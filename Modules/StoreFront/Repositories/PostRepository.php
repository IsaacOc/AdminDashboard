<?php

namespace Modules\Storefront;

use Illuminate\Support\str;
use App\User;
use App\logs;
use App\pagehit;

use App\Events\Links;
use App\Events\TimeIn;

class PostRepository implements PostRepositoryInterface
{
    public function saveLinks(){
        event(new Links());
    }
    
    public function sendNotification(){
        event(new TimeIn());
    }
    
}
