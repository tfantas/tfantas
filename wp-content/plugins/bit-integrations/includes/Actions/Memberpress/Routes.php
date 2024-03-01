<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\Memberpress\MemberpressController;
use BitCode\FI\Core\Util\Route;

Route::post('memberpress_authorize', [MemberpressController::class, 'authorizeMemberpress']);
Route::post('fetch_all_membership', [MemberpressController::class, 'getAllMembership']);
Route::post('fetch_all_payment_gateway', [MemberpressController::class, 'allPaymentGateway']);
