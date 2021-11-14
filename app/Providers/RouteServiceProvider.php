<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * This is used by Laravel authentication to redirect users after login.
     *
     * @var string
     */
<<<<<<< HEAD
    // public const HOME = '/home';
=======
    public const HOME = '/home';
>>>>>>> c71c05adc9b14966338fbae3ae973de2ad00b28b

    /**
     * The controller namespace for the application.
     *
     * When present, controller route declarations will automatically be prefixed with this namespace.
     *
     * @var string|null
     */
    // protected $namespace = 'App\\Http\\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
<<<<<<< HEAD
        // parent::boot()
        $this->configureRateLimiting();
        $this->loadMigrationsFrom(app_path('Modules/TestModule/database/Migrations'));

    //     $this->routes(function () {
    //         Route::prefix('api')
    //             ->middleware('api')
    //             ->namespace($this->namespace)
    //             ->group(base_path('routes/api.php'));

    //         Route::middleware('web')
    //             ->namespace($this->namespace)
    //             ->group(base_path('routes/web.php'));
    //     });
=======
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
        });
>>>>>>> c71c05adc9b14966338fbae3ae973de2ad00b28b
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
        });
    }
<<<<<<< HEAD
      /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapModulesRoutes();
    }

    protected function mapModulesRoutes()
    {
        // dump(config('database.default'));
        // Use the middleware 'web' if you're writing a Web Application 
        Route::prefix('api')
            ->middleware('api')
            ->group(base_path('routes/modules.php'));
    }
=======
>>>>>>> c71c05adc9b14966338fbae3ae973de2ad00b28b
}
