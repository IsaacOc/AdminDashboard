<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Routes file to handle module routes

// Route::get('/test', function(Request $request) {
//    return response()->json(['Modules Routes File working']);
// });

Route::group([], base_path('app/Modules/Admin_Login/routes/api.php'));

Route::get('/', function () {
    return view('welcome');
});