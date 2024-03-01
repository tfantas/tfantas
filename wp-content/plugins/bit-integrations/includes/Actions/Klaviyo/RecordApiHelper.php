<?php

/**
 * Klaviyo    Record Api
 */

namespace BitCode\FI\Actions\Klaviyo;

use BitCode\FI\Core\Util\Common;
use BitCode\FI\Core\Util\Helper;
use BitCode\FI\Core\Util\HttpHelper;
use BitCode\FI\Log\LogHandler;

/**
 * Provide functionality for Record Add Member
 */
class RecordApiHelper
{
    private $_integrationID;
    private $baseUrl = 'https://a.klaviyo.com/api/v2/';


    public function __construct($integrationDetails, $integId)
    {
        $this->_integrationDetails = $integrationDetails;
        $this->_integrationID = $integId;
    }

    public function addMember($authKey, $listId, $data)
    {
        $apiEndpoints = "{$this->baseUrl}list/{$listId}/members?api_key={$authKey}";
        $headers = [
            'Content-Type' => 'application/json'
        ];

        return HttpHelper::post($apiEndpoints, $data, $headers);
    }

    public function generateReqDataFromFieldMap($data, $field_map)
    {
        $dataFinal = [];

        

        foreach ($field_map as $key => $value) {
            $triggerValue = $value->formField;
            $actionValue = $value->klaviyoFormField;
            if ($triggerValue === 'custom') {
                $dataFinal[$actionValue] = Common::replaceFieldWithValue($value->customValue, $data);
            } elseif (!is_null($data[$triggerValue])) {
                $dataFinal[$actionValue] = $data[$triggerValue];
            }
        }
        return $dataFinal;
    }

    public function execute(
        $listId,
        $fieldValues,
        $field_map,
        $authKey
    ) {
        $finalData = $this->generateReqDataFromFieldMap($fieldValues, $field_map);
        $requestBody = [
            "profiles" => [
                $finalData
            ]
        ];
        $data = (object)$requestBody;
        $apiResponse = $this->addMember($authKey, $listId, wp_json_encode($data));
        if ($apiResponse->detail) {
            $res = ['success' => false, 'message' => $apiResponse->detail, 'code' => 400];
            LogHandler::save($this->_integrationID, json_encode(['type' => 'members', 'type_name' => 'add-members']), 'error', json_encode($res));
        } else {

            $res = ['success' => true, 'message' => $apiResponse, 'code' => 200];
            LogHandler::save($this->_integrationID, json_encode(['type' => 'members', 'type_name' => 'add-members']), 'success', json_encode($res));
        }
        return $apiResponse;
    }
}
