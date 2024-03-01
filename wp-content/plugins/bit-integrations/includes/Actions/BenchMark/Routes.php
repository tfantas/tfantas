<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\BenchMark\BenchMarkController;
use BitCode\FI\Core\Util\Route;

Route::post('benchMark_authorize', [BenchMarkController::class, 'benchMarkAuthorize']);
Route::post('benchMark_headers', [BenchMarkController::class, 'benchMarkHeaders']);
Route::post('benchMark_lists', [BenchMarkController::class, 'benchMarkLists']);
