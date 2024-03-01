<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\CustomAction\CustomActionController;
use BitCode\FI\Core\Util\Route;

Route::post('checking_function_validity', [CustomActionController::class, 'functionValidateHandler']);
