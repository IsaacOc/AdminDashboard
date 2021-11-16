<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;






// Routes file to handle module routes

Route::group([], base_path('app/Modules/Admin_Login/routes/api.php'));
Route::group([], base_path('app/Modules/Category/routes/api.php'));
Route::group([], base_path('app/Modules/SubCategory/routes/api.php'));

Route::get('/modules', function () {
    return response()->json(['modules']);
});