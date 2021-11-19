<?php

namespace App\Modules\SubCategory\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Modules\SubCategory\Entities\SubCategory;
use App\Modules\Category\Entities\Category;

class SubCategoryController extends Controller
{
    public function index()
    {
        $subCategories = SubCategory::orderBy('created_at', 'desc')->get();
        return response()->json($subCategories);
        // return response()->json('Sub categories');

    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        
        // return response()->json($this->validateRequest());
        $subCategory = new SubCategory;

        // which means there should be a certain category before creating sub category
        $subCategory->category_id = $this->validateRequest()['category_id'];
        $subCategory->sub_category_name = $this->validateRequest()['sub_category_name'];
        $subCategory->sub_category_description = $this->validateRequest()['sub_category_description'];
        $subCategory->status = $this->validateRequest()['status'];
        $subCategory->banner_image = $this->storeBannerImage();

        $category = Category::where('id', '=', $this->validateRequest()['category_id'])->first();
        if($category !== null) {
            $subCategory->save();

            return response()->json([
                'sub category' => $subCategory,
                'message' => $subCategory ? 'Sub Category Created' : 'Error Creating Sub Category'
            ]);
        } else {
            return response()->json(['message' => 'Category doesnot exist, please select a category that exists']);
        }
        
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($subCategoryId)
    {
        $subCategory = SubCategory::where('id', '=', $subCategoryId)->first();
        if($subCategory) {
            return response()->json($subCategory);
        } else {
            return response()->json(['message' => 'No such Sub Category']);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $subCategoryId)
    {
        
        $singleSubSategory = SubCategory::where('id', '=', $subCategoryId)->first();

        $updatedSubCategory = $singleSubSategory;

        $updatedSubCategory->category_id = $this->validateRequest()['category_id'];
        $updatedSubCategory->sub_category_name = $this->validateRequest()['sub_category_name'];
        $updatedSubCategory->sub_category_description = $this->validateRequest()['sub_category_description'];
        $updatedSubCategory->status = $this->validateRequest()['status'];
        $updatedSubCategory->banner_image = $this->storeBannerImage();
        $updatedSubCategory->save();
        
        return response()->json([
            'sub category' => $updatedSubCategory,
            'message' => $updatedSubCategory ? 'Sub Category Updated' : 'Error Updating Sub Category'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($subCategoryId)
    {
        $subCategory = SubCategory::where('id', '=', $subCategoryId)->first();
        
        if($subCategory) {
            $status = $subCategory->delete();
            if($status) {
                return response()->json(['message' => 'Sub Category Deleted!']);
            } else {
                return response()->json(['message' => 'An Error occurred while deleting the Sub Category']);
            }
        } else {
            return response()->status(404)->json(['message' => 'Sub Category Not Found']);
        }
    }

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

    public function validateRequest()
    {
        return request()->validate([
            'category_id' => 'required',
            'sub_category_name' => 'required',
            'sub_category_description' => 'required',
            'banner_image' => '',
            'status' => ''
        ]);
    }
}
