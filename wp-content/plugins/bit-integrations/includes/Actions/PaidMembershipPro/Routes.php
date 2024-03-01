<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\PaidMembershipPro\PaidMembershipProController;
use BitCode\FI\Core\Util\Route;

Route::post('paid_membership_pro_authorize', [PaidMembershipProController::class, 'authorizeMemberpress']);
Route::post('fetch_all_paid_membership_pro_level', [PaidMembershipProController::class, 'getAllPaidMembershipProLevel']);
