<?php

namespace App\Modules\Category\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Modules\Category\Entities\Category;
// use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CategoryController extends Controller
{
    /**
     * Displays the list of all categories.
     */
    public function index()
    {
        $categories = Category::orderBy('id', 'desc')->get();
        return response()->json($categories);
    }

    /**
     * Stores the newly created category in the db.
     */
    public function store()
    {
        $category = new Category;

        // which means there should be a certain category before creating  category

        $category->category_name = $this->validateRequest()['category_name'];
        $category->description = $this->validateRequest()['description'];
        // $category->business_group_id = $this->validateRequest()['business_group_id'];
        $category->location = $this->validateRequest()['location'];
        $category->banner_image = $this->storeBannerImage();
        $category->image_text = $this->validateRequest()['image_text'];
        $category->status = $this->validateRequest()['status'];
        $category->usergroup = $this->validateRequest()['usergroup'];
        $category->position = $this->validateRequest()['position'];
        $category->creation_date = $this->validateRequest()['creation_date'];

        $category->save();
        
        return response()->json([
            'status' => (bool)$category,
            'category' => $category,
            'message' => $category ? 'Category Created' : 'Error Creating Category'
        ]);
    }

    /**
     * Shows the specified category.
     */
    public function show($categoryId)
    {
        $singleCategory = Category::where('id', $categoryId)->first();
            // return response()->json($singleCategory);
        if($singleCategory) {
            return response()->json($singleCategory);
        } else {
            return response()->json(['message' => 'No such Category']);
        }
    }

    /**
     * Displays all sub categories associated with the specified category.
     */
  

    public function subcategories($categoryId) {
        $category = Category::where('id', $categoryId)->first();
        
        if($category->count()) {
            $subcategories = $category->subcategories()->orderBy('id', 'desc')->get();
            if($subcategories->count()) {
                return response()->json($subcategories);
            } else {
                return response()->json(['message' => 'No sub categories found for this category']);
            }
        } else {
            return response()->json(['message' => 'No such Category']);
        }
    }

    public function businessGroupCategory($categoryId)
    {
        $category = Category::where('id', '=', $categoryId)->first();
        return response()->json($category->businessgroup);
    }

    /**
     * Updates the specified category in the db.
     */
    public function update( $categoryId)
    {
        $category = Category::where('id', $categoryId)->first();

        // which means there should be a certain category before creating  category

        $category->category_name = $this->validateRequest()['category_name'];
        $category->description = $this->validateRequest()['description'];
        // $category->business_group_id = $this->validateRequest()['business_group_id'];
        $category->location = $this->validateRequest()['location'];
        $category->banner_image = $this->storeBannerImage();
        $category->image_text = $this->validateRequest()['image_text'];
        $category->status = $this->validateRequest()['status'];
        $category->usergroup = $this->validateRequest()['usergroup'];
        $category->position = $this->validateRequest()['position'];
        $category->creation_date = $this->validateRequest()['creation_date'];

        $category->save();
        
        return response()->json([
            'status' => $category,
            'message' => $category ? 'Category Updated!' : 'Error Updating Category',
        ]);
    }

    /**
     * Deletes the specified category from the db.
     */
    public function destroy($categoryId)
    {        
        $category = Category::where('id', '=', $categoryId)->first();
        
        if($category) {
            $status = $category->delete();
            if($status) {
                return response()->json(['message' => 'Category Deleted!']);
            } else {
                return response()->json(['message' => 'An Error occurred while deleting the Category']);
            }
        } else {
            return response()->status(404)->json(['message' => 'Category Not Found']);
        }
    }

    /**
     * Handles the request validations.
     */
    public function validateRequest()
    {
        return request()->validate([
            'category_name' => 'required',
            'description' => 'required',
            'location' => 'required',
            'status' => 'required',
            'banner_image' => '',
            'image_text' => '',
            'usergroup' => '',
            'position' => '',
            'creation_date' => '',
            ]);
            // 'business_group_id' => 'required',
            // 'city_id' => 'required'
    }


    /**
     * Store the Web Banner from here and return the name to store in the database.
     */
    public function storeBannerImage()
    {
        if (request()->hasFile('banner_image')) {

            request()->validate([
                'banner_image' => 'image|mimes:jpeg,jpg'
            ]);

            $bannerImage = time().".".request()->file('banner_image')->getClientOriginalName();
            request()->file('banner_image')->move(public_path('uploads/category/banner_image'), $bannerImage);
            return $bannerImage;

        }
    }

}

