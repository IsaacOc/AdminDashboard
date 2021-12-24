<?php
use Illuminate\Support\Facades\Route;
use Modules\Map\Http\Controllers\MapController;
use Modules\Map\Http\Controllers\LocatorController;

Route::get('index', [MapController::class, 'index'])->name('Map.index');
Route::get('/locator', [LocatorController::class, 'index'])->name('Map.locator');

Route::prefix('api/admin/map')->group(function() {
   
    Route::get('/', [MapController::class, 'index'])->name('Map.index');
    Route::get('/', [MapController::class, 'index'])->name('Map.index');

 });