<?php

namespace Modules\StoreFront\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Contracts\Support\Renderable;
use Modules\StoreFront\Models\Storefront;

class StoreFrontController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $storefront = new Storefront;

        $storefront->name = $this->validateRequest()['name'];
        $storefront->country = $this->validateRequest()['country'];
        $storefront->state = $this->validateRequest()['state'];
        $storefront->city = $this->validateRequest()['city'];

        $storefront->save();
        
        return response()->json([
            'status' => (bool)$storefront,
            'storefront' => $storefront,
            'message' => $storefront ? 'storefront Created' : 'Error Creating storefront'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    
    /**
     * Handles the request validations.
     */
    public function validateRequest()
    {
        return request()->validate([
            'name' => 'required',
            'country' => 'required',
            'state' => 'required',
            'city' => 'required',
            ]);
    }

}
