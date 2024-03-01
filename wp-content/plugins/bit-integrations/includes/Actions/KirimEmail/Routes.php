<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\KirimEmail\KirimEmailController;
use BitCode\FI\Core\Util\Route;

Route::post('kirimEmail_authorization', [KirimEmailController::class, 'checkAuthorization']);
Route::post('kirimEmail_fetch_all_list', [KirimEmailController::class, 'getAllList']);
