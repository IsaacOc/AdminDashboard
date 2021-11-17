<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Modules\SubCategory\Http\Controllers\SubCategoryController;



/**
 * --------------------------------------------------------------
 * Routes file to sub categories actions
 */


Route::prefix('api/admin/sub-category')->group(function() {

   Route::get('/', [SubCategoryController::class, 'index']);
   Route::get('/{subCategoryId}', [SubCategoryController::class, 'show']);
   Route::post('/', [SubCategoryController::class, 'store']);
   Route::delete('/{subCategoryId}', [SubCategoryController::class, 'destroy']);
});