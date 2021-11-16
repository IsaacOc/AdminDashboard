<?php

namespace App\Modules\Category\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'category_name', 'description', 'business_group_id', 'booking_type', 'billing_strategy',
        'job_type', 'cancellation_fees', 'consultation_fees', 'visitation_fee', 'hourly_rate_fee', 
        'minimum_fee', 'maximum_fee', 'banner_web','banner_mobile', 'selected_state_icon', 
        'un_selected_state_icon', 'status', 'city_id'
    ];

    public function sub_categories()
    {    
        return $this->hasMany(\Modules\SubCategory\Entities\SubCategory::class);
    }
}
