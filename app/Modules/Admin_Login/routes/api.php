<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Routes file to handle module routes

Route::prefix('admin')->group(function() {
   Route::get('/', function(Request $request) {
      return response()->json(['Prefix routes inside modules']);
   });
});