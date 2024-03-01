<?php

/**
 * SystemIO Integration
 */

namespace BitCode\FI\Actions\SystemIO;

use WP_Error;
use BitCode\FI\Core\Util\HttpHelper;

/**
 * Provide functionality for SystemIO integration
 */
class SystemIOController
{
    protected $_defaultHeader;
    protected $_apiEndpoint;

    public function __construct()
    {
        $this->_apiEndpoint = "https://api.systeme.io/api";
    }

    private function checkValidation($fieldsRequestParams, $customParam = '**')
    {
        if (empty($fieldsRequestParams->api_key) || empty($customParam)) {
            wp_send_json_error(__('Requested parameter is empty', 'bit-integrations'), 400);
        }
    }

    private function setHeaders($apiKey)
    {
        $this->_defaultHeader = [
            "x-api-key"       => $apiKey,
            "Content-Type"  => "application/json"
        ];
    }

    public function authentication($fieldsRequestParams)
    {
        $this->checkValidation($fieldsRequestParams);
        $this->setHeaders($fieldsRequestParams->api_key);
        $apiEndpoint  = $this->_apiEndpoint . "/contacts";
        $response     = HttpHelper::get($apiEndpoint, null, $this->_defaultHeader);

        if (isset($response->items)) {
            wp_send_json_success('Authentication successful', 200);
        } else {
            wp_send_json_error('Please enter valid API Key & API Secret', 400);
        }
    }

    public function getAllTags($fieldsRequestParams)
    {
        $this->checkValidation($fieldsRequestParams);
        $this->setHeaders($fieldsRequestParams->api_key);
        $apiEndpoint  = $this->_apiEndpoint . "/tags";
        $response     = HttpHelper::get($apiEndpoint, null, $this->_defaultHeader);

        if (!isset($response->errors)) {
            $tags = [];
            foreach ($response->items as $tag) {
                array_push(
                    $tags,
                    (object) [
                        'id'    => $tag->id,
                        'name'  => $tag->name
                    ]
                );
            }
            wp_send_json_success($tags, 200);
        } else {
            wp_send_json_error('Tags fetching failed', 400);
        }
    }

    public function execute($integrationData, $fieldValues)
    {
        $integrationDetails = $integrationData->flow_details;
        $integId            = $integrationData->id;
        $apiKey             = $integrationDetails->api_key;
        $fieldMap           = $integrationDetails->field_map;
        $actionName         = $integrationDetails->actionName;

        if (empty($fieldMap) || empty($actionName) || empty($apiKey)) {
            return new WP_Error('REQ_FIELD_EMPTY', __('module, fields are required for SystemIO api', 'bit-integrations'));
        }

        $recordApiHelper    = new RecordApiHelper($integrationDetails, $integId, $apiKey);
        $systemIOApiResponse   = $recordApiHelper->execute($fieldValues, $fieldMap, $actionName);

        if (is_wp_error($systemIOApiResponse)) {
            return $systemIOApiResponse;
        }
        return $systemIOApiResponse;
    }
}
