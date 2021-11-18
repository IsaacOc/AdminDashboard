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
        $category->job_type = $this->validateRequest()['job_type'];
        $category->hourly_rate_fee = $this->validateRequest()['hourly_rate_fee'];
        $category->minimum_fee = $this->validateRequest()['minimum_fee'];
        $category->maximum_fee = $this->validateRequest()['maximum_fee'];
        $category->status = $this->validateRequest()['status'];
        $category->banner_web = $this->storeBannerImage();

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
        // return response()->json($categoryId);
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
            return response()->json($category->sub_categories()->orderBy('id', 'desc')->get());
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
        $category->job_type = $this->validateRequest()['job_type'];
        $category->hourly_rate_fee = $this->validateRequest()['hourly_rate_fee'];
        $category->minimum_fee = $this->validateRequest()['minimum_fee'];
        $category->maximum_fee = $this->validateRequest()['maximum_fee'];
        $category->status = $this->validateRequest()['status'];
        $category->banner_web = $this->storeBannerImage();

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
            'job_type' => 'required',
            'hourly_rate_fee' => '',
            'minimum_fee' => '',
            'maximum_fee' => '',
            'banner_image' => '',
            'status' => '',
            ]);
            // 'business_group_id' => 'required',
            // 'booking_type' => 'required',
            // 'billing_strategy' => 'required',
            // 'cancellation_fees' => '',
            // 'consultation_fees' => '',
            // 'visitation_fee' => '',
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
            request()->file('banner_image')->move(public_path('uploads/sub_category/banner_image'), $bannerImage);
            return $bannerImage;

        }
    }


    /**
     * Store the Mobile Banner from here and return the name to store in the database.
     */

    public function storeBannerMobile()
    {
        if (request()->hasFile('banner_mobile')) {

            request()->validate([
                'image' => 'image|mimes:jpg,jpeg'
            ]);

           $bannerMobile = time().".".request()->file('banner_mobile')->getClientOriginalName();
            request()->file('banner_mobile')->move(public_path('uploads/category/banner_mobile'), $bannerMobile);
            return $bannerMobile;
        }
    }

    // Function to return the selected state icon after its stored in uploads folder
    public function storeSelectedStateIcon()
    {
        if (request()->hasFile('selected_state_icon')) {

            request()->validate([
                'image' => 'image|mimes:jpeg,jpg,svg,png'
            ]);
            $selectedStateIcon = time().".".request()->file('selected_state_icon')->getClientOriginalName();
            request()->file('selected_state_icon')
                ->move(public_path('uploads/category/selected_state_icon'), $selectedStateIcon);
            
            return $selectedStateIcon;
        }
    }

    // Function to return the unselected state icon after its stored in uploads folder
    public function storeUnselectedStateIcon()
    {
        if (request()->hasFile('un_selected_state_icon')) {

            request()->validate([
                'un_selected_state_icon' => 'image|mimes:png,jpg,svg,jpeg'
            ]);

            $unselectedStateIcon = time().".".request()->file('un_selected_state_icon')->getClientOriginalName();
            request()->file('un_selected_state_icon')
                ->move(public_path('uploads/category/un_selected_state_icon'), $unselectedStateIcon);
            
            return $unselectedStateIcon;
        }
    }
}

