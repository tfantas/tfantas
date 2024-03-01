<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\SliceWp\SliceWpController;
use BitCode\FI\Core\Util\Route;

Route::post('slicewp_authorize', [SliceWpController::class, 'authorizeSliceWp']);
