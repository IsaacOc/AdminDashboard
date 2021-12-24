<?php
use Illuminate\Support\Facades\Route;
use Modules\Cities\Http\Controllers\CityController;

Route::get('city', [CityController::class, 'index'])->name('Map.index');

Route::prefix('api/admin/map')->group(function() {
   
    Route::post('/', [CityController::class, 'store']);
    Route::put('/{cityId}', [CityController::class, 'update']);

 });