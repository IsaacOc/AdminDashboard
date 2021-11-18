<?php

namespace App\Modules\Category\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'category_name', 'description', 'business_group_id', 'hourly_rate_fee', 
        'minimum_fee', 'maximum_fee', 'banner_web', 'status', 'city_id'
    ];

    public function sub_categories()
    {    
        return $this->hasMany(\App\Modules\SubCategory\Entities\SubCategory::class);
    }
}
