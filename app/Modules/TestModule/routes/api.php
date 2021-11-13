<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Modules\TestModule\Http\Controllers\TestController;

// Routes file to handle module routes

Route::get('/test', function(Request $request) {
   return response()->json(['Modules Inside the Module Routes File working']);
});

Route::get('/cont', [TestController::class, 'index']);
Route::post('/store', [TestController::class, 'store']);
//  'Modules\TestModule\Http\Controllers\TestController@index');
// [\Modules\TestModule\Http\Controllers\TestController::class, 'index']);