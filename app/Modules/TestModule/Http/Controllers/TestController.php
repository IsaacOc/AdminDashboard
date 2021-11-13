<?php

namespace App\Modules\TestModule\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Modules\TestModule\Entities\TestModel;

class TestController extends Controller
{
   public function index()
   {
      return response()->json(['Controller function working']);
   }

   public function store(Request $request)
   {

      $test = new TestModel;
      $test->test = 'Worked';
      $test->save();

      return response()->json($test);
   }
}