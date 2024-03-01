<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\GiveWp\GiveWpController;
use BitCode\FI\Core\Util\Route;

Route::post('giveWp_authorize', [GiveWpController::class, 'authorizeGiveWp']);
