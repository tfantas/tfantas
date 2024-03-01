<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\Insightly\InsightlyController;
use BitCode\FI\Core\Util\Route;

Route::post('insightly_authentication', [InsightlyController::class, 'authentication']);
Route::post('insightly_fetch_all_organisations', [InsightlyController::class, 'getAllOrganisations']);
Route::post('insightly_fetch_all_categories', [InsightlyController::class, 'getAllCategories']);
Route::post('insightly_fetch_all_statuses', [InsightlyController::class, 'getAllStatuses']);
Route::post('insightly_fetch_all_LeadStatuses', [InsightlyController::class, 'getLeadStatuses']);
Route::post('insightly_fetch_all_LeadSources', [InsightlyController::class, 'getLeadSources']);
Route::post('insightly_fetch_all_CRMPipelines', [InsightlyController::class, 'getAllCRMPipelines']);
Route::post('insightly_fetch_all_CRMPipelineStages', [InsightlyController::class, 'getAllCRMPipelineStages']);
