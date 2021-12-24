<?php
use Illuminate\Support\Facades\Route;
use Modules\StoreFront\Http\Controllers\StoreFrontController;


Route::prefix('api/admin/storefront')->group(function() {
   
    Route::post('/', [StoreFrontController::class, 'store']);

 });