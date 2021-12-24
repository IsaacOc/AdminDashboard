<?php
use Illuminate\Support\Facades\Route;
use Modules\Customer\Http\Controllers\CustomerController;


Route::prefix('api/admin/customer')->group(function() {
   
    Route::post('/', [CustomerController::class, 'store']);

    Route::get('/', [CustomerController::class, 'index']);
 });