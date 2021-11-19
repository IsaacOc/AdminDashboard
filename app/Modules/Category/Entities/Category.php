<?php

namespace App\Modules\Category\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'category_name', 'description', 'business_group_id', 'location', 
        'image_text', 'creation_date', 'banner_image', 'status', 'usergroup', 'position'
    ];

    public function subcategories()
    {    
        return $this->hasMany(\App\Modules\SubCategory\Entities\SubCategory::class);
    }
}
