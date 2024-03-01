<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\GoogleContacts\GoogleContactsController;
use BitCode\FI\Core\Util\Route;

Route::post('googleContacts_authorization', [GoogleContactsController::class, 'authorization']);
