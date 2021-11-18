<?php

namespace App\Modules\SubCategory\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;

    protected $table = 'sub_categories';

    protected $fillable = [
        'category_id','sub_category_name','sub_category_description',
        'banner_image', 'status'
    ];

    public function category() {
        return $this->belongsTo(\App\Modules\Category\Entities\Category::class);
    }
}
