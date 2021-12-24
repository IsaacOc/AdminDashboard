<?php

namespace Modules\Customer\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Customer\Models\Place;
use Grimzy\LaravelMysqlSpatial\Types\Point;
use Illuminate\Contract\Support\Jsonable;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $customerplaces = Place::get('location');
        //$customerplace = json_encode($customerplaces);
        //print_r($customerplaces->location->getLat());
        $original_data = json_decode($customerplaces, true);
        $features = array();

        foreach($original_data as $key => $value) { 
            foreach($value as $key => $value) {
            // $features[] = array(
            //         'type' => 'Feature',
            //         'geometry' => array('type' => 'Point', 'coordinates' => array((float)$value['coordinates'][1],(float)$value['coordinates'][0])),
            //         'properties' => array('name' => 'ervie', 'id' => 1),
            //         );
            // };  
            };
        };
        return response()->json($value);
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
        $place = new Place;

        $place->name = $this->validateRequest()['name'];
       
        $place->location = new Point($this->validateRequest()['long'], $this->validateRequest()['lat']);

        $place->save();
        
        return response()->json([
            'status' => (bool)$place,
            'book location' => $place,
            'message' => $place ? 'book location Created' : 'Error Creating book location'
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
            'long' => 'required',            
            'lat' => 'required',
            ]);
    }

    public function geoJson($locales) 
    {
        $original_data = json_decode($locales, true);
        $features = array();

        foreach($original_data as $key => $value) { 
            foreach($value as $key => $value) {
                print_r($value);
            // $features[] = array(
            //         'type' => 'Feature',
            //         'geometry' => array('type' => 'Point', 'coordinates' => array((float)$value['coordinates'][1],(float)$value['coordinates'][0])),
            //         'properties' => array('name' => 'ervie', 'id' => 1),
            //         );
             };  
        };

        //$allfeatures = array('type' => 'FeatureCollection', 'features' => $features);
        return json_encode($value);

    }
}
