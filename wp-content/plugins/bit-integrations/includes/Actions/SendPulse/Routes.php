<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\SendPulse\SendPulseController;
use BitCode\FI\Core\Util\Route;

Route::post('sendPulse_authorize', [SendPulseController::class, 'authorization']);
Route::post('sendPulse_lists', [SendPulseController::class, 'getAllList']);
Route::post('sendPulse_headers', [SendPulseController::class, 'sendPulseHeaders']);
