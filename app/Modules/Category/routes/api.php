<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Modules\Category\Http\Controllers\CategoryController;



/**
 * --------------------------------------------------------------
 * Routes file to categories actions
 */


Route::prefix('api/admin/category')->group(function() {
   // Route::group(['middleware' => 'auth:api'], function () {
   //    Route::get('/user', [AdminController::class, 'authUser']);
   //    Route::post('/logout', [AdminController::class, 'logout']);
   // });
   Route::get('/', [CategoryController::class, 'index']);
   Route::get('/{category}', [CategoryController::class, 'show']);
   Route::post('/', [CategoryController::class, 'store']);
});