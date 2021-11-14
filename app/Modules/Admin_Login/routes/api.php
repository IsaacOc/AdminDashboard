<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Modules\Admin_Login\Http\Controllers\AdminController;



/**
 * --------------------------------------------------------------
 * Routes file to handle admin registration, login, logout routes
 */


Route::prefix('api/admin')->group(function() {
   Route::middleware('auth:api')->get('/user', function (Request $request) {
      return $request->user();
   });

   Route::group(['middleware' => 'auth:api'], function () {
      Route::get('/user', [AdminController::class, 'authUser']);
      Route::post('/logout', [AdminController::class, 'logout']);
   });

   Route::get('/users', [AdminController::class, 'index']);
   Route::post('/login', [AdminController::class, 'login']);
   Route::post('/register', [AdminController::class, 'register']);
});