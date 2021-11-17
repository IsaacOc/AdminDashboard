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
        $category->booking_type = $this->validateRequest()['booking_type'];
        $category->billing_strategy = $this->validateRequest()['billing_strategy'];
        $category->job_type = $this->validateRequest()['job_type'];
        $category->cancellation_fees = $this->validateRequest()['cancellation_fees'];
        $category->visitation_fee = $this->validateRequest()['visitation_fee'];
        $category->minimum_fee = $this->validateRequest()['minimum_fee'];
        $category->maximum_fee = $this->validateRequest()['maximum_fee'];
        $category->status = $this->validateRequest()['status'];
        $category->banner_web = $this->storeBannerWeb();
        $category->banner_mobile = $this->storeBannerMobile();
        $category->selected_state_icon = $this->storeSelectedStateIcon();
        $category->un_selected_state_icon = $this->storeUnselectedStateIcon();

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
        $category->booking_type = $this->validateRequest()['booking_type'];
        $category->billing_strategy = $this->validateRequest()['billing_strategy'];
        $category->job_type = $this->validateRequest()['job_type'];
        $category->cancellation_fees = $this->validateRequest()['cancellation_fees'];
        $category->visitation_fee = $this->validateRequest()['visitation_fee'];
        $category->minimum_fee = $this->validateRequest()['minimum_fee'];
        $category->maximum_fee = $this->validateRequest()['business_group_id'];
        $category->status = $this->validateRequest()['status'];
        $category->banner_web = $this->storeBannerWeb();
        $category->banner_mobile = $this->storeBannerMobile();
        $category->selected_state_icon = $this->storeSelectedStateIcon();
        $category->un_selected_state_icon = $this->storeUnselectedStateIcon();

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
            'booking_type' => 'required',
            'billing_strategy' => 'required',
            'job_type' => 'required',
            'cancellation_fees' => '',
            'consultation_fees' => '',
            'visitation_fee' => '',
            'hourly_rate_fee' => '',
            'minimum_fee' => '',
            'maximum_fee' => '',
            'banner_web' => '',
            'banner_mobile' => '',
            'status' => '',
            'selected_state_icon' => '',
            'un_selected_state_icon' => '',
            ]);
            // 'business_group_id' => 'required',
            // 'city_id' => 'required'
    }


    /**
     * Store the Web Banner from here and return the name to store in the database.
     */
    public function storeBannerWeb()
    {
        if (request()->hasFile('banner_web')) {

            request()->validate([
                'banner_web' => 'image|mimes:jpeg,jpg'
            ]);

            $bannerWeb = time().".".request()->file('banner_web')->getClientOriginalName();
            request()->file('banner_web')->move(public_path('uploads/sub_category/banner_web'), $bannerWeb);
            return $bannerWeb;

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
