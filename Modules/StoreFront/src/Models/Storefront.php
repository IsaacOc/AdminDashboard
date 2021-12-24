<?php

namespace Modules\StoreFront\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Storefront extends Model
{
    use HasFactory;

    protected $table = 'storefront';

    protected $fillable = [
        'name', 'country', 'State', 'City'         
    ];

}
