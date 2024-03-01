<?php

/**
 * Telegram Record Api
 */

namespace BitCode\FI\Actions\Telegram;

use BitCode\FI\Log\LogHandler;
use BitCode\FI\Core\Util\Common;
use BitCode\FI\Core\Util\HttpHelper;
use BitCode\FI\Actions\Telegram\FilesApiHelper;

/**
 * Provide functionality for Record insert, upsert
 */
class RecordApiHelper
{
    private $_defaultHeader;
    private $_integrationID;
    private $_apiEndPoint;

    public function __construct($apiEndPoint, $integId)
    {
        $this->_defaultHeader["Content-Type"] = 'multipart/form-data';
        $this->_integrationID = $integId;
        $this->_apiEndPoint = $apiEndPoint;
    }

    public function sendMessages($data)
    {
        $insertRecordEndpoint = $this->_apiEndPoint . '/sendMessage';
        return HttpHelper::get($insertRecordEndpoint, $data, $this->_defaultHeader);
    }

    public function execute($integrationDetails, $fieldValues)
    {
        $msg = Common::replaceFieldWithValue($integrationDetails->body, $fieldValues);
        $messagesBody = str_replace(['<p>', '</p>', '&nbsp;'], ' ', $msg);

        if (!empty($integrationDetails->actions->attachments)) {
            foreach ($fieldValues as $fieldKey => $fieldValue) {
                if ($integrationDetails->actions->attachments === $fieldKey) {
                    $file = $fieldValue;
                }
            }

            if (
                !empty($file)
                && ((is_array($file) && is_readable($file[0][0]))
                    || (is_string($file) && is_readable($file)))
            ) {
                if (is_array($file[0]) && count($file[0]) > 1) {
                    $data = [
                        'chat_id' => $integrationDetails->chat_id,
                        'caption' => $messagesBody,
                        'media' => is_array($file) ? $file[0] : $file
                    ];

                    $sendPhotoApiHelper = new FilesApiHelper();
                    $recordApiResponse = $sendPhotoApiHelper->uploadMultipleFiles($this->_apiEndPoint, $data);
                } else {
                    $data = [
                        'chat_id' => $integrationDetails->chat_id,
                        'caption' => $messagesBody,
                        'parse_mode' => $integrationDetails->parse_mode,
                        'photo' => is_array($file[0]) ? $file[0][0] : $file[0]
                    ];

                    $sendPhotoApiHelper = new FilesApiHelper();
                    $recordApiResponse = $sendPhotoApiHelper->uploadFiles($this->_apiEndPoint, $data);
                }
            } elseif (
                !empty($file)
                && (is_array($file) && is_string($file[0]))
            ) {
                $data = [
                    'chat_id' => $integrationDetails->chat_id,
                    'caption' => $messagesBody,
                    'parse_mode' => $integrationDetails->parse_mode,
                    'photo' => $file[0]
                ];

                $sendPhotoApiHelper = new FilesApiHelper();
                $recordApiResponse = $sendPhotoApiHelper->uploadFiles($this->_apiEndPoint, $data);
            } else {
                $data = [
                    'chat_id' => $integrationDetails->chat_id,
                    'text' => $messagesBody,
                    'parse_mode' => $integrationDetails->parse_mode
                ];
                $recordApiResponse = $this->sendMessages($data);
            }

            $type = 'insert';
        } else {
            $data = [
                'chat_id' => $integrationDetails->chat_id,
                'text' => $messagesBody,
                'parse_mode' => $integrationDetails->parse_mode
            ];
            $recordApiResponse = $this->sendMessages($data);
            $type = 'insert';
        }
        $recordApiResponse = is_string($recordApiResponse) ? json_decode($recordApiResponse) : $recordApiResponse;

        if ($recordApiResponse && $recordApiResponse->ok) {
            LogHandler::save($this->_integrationID, ['type' =>  'record', 'type_name' => $type], 'success', $recordApiResponse);
        } else {
            LogHandler::save($this->_integrationID, ['type' =>  'record', 'type_name' => $type], 'error', $recordApiResponse);
        }
        return $recordApiResponse;
    }
}
