<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\Lemlist\LemlistController;
use BitCode\FI\Core\Util\Route;

Route::post('lemlist_authorize', [LemlistController::class, 'authorization']);
Route::post('lemlist_campaigns', [LemlistController::class, 'getAllCampaign']);
