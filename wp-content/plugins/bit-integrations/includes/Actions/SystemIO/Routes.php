<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\SystemIO\SystemIOController;
use BitCode\FI\Core\Util\Route;

Route::post('systemIO_authentication', [SystemIOController::class, 'authentication']);
Route::post('systemIO_fetch_all_tags', [SystemIOController::class, 'getAllTags']);
