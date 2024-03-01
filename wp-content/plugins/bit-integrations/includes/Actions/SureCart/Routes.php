<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\SureCart\SureCartController;
use BitCode\FI\Core\Util\Route;

Route::post('sureCart_authorization', [SureCartController::class, 'checkAuthorization']);
