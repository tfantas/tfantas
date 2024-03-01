<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\PropovoiceCRM\PropovoiceCRMController;
use BitCode\FI\Core\Util\Route;

Route::post('propovoice_authorize', [PropovoiceCRMController::class, 'authorizePropovoiceCrm']);
Route::post('propovoice_crm_lead_tags', [PropovoiceCRMController::class, 'leadTags']);
Route::post('propovoice_crm_lead_label', [PropovoiceCRMController::class, 'leadLabel']);
