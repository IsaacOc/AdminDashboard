<?php

namespace App\Modules\TestModule\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestModel extends Model
{
    use HasFactory;

    protected $table = 'tests';
    protected $fillable = ['test'];
}
