## About Rouge

<<<<<<< HEAD
Rouge is a laravel theming system that allows for multiple template themes to be used with laravel regardless of the technology they use.
=======
Rouge is a laravel theming system that allows for multiple template themes to be used with laravel  regardless of the technology they use.

>>>>>>> c71c05adc9b14966338fbae3ae973de2ad00b28b

## Folder Structure

The Themes are stored in /themes/{theme-name}. The base theme is called rouge and its modules are stored in /themes/rouge/js/views/modules.

## How to run

To run the project, First put it in the htdocs folder of your server.

Install Packages:
<<<<<<< HEAD

```shell
npm install && npm run dev
```

=======
```shell 
npm install && npm run dev
```
>>>>>>> c71c05adc9b14966338fbae3ae973de2ad00b28b
Start the project:
start your local serve and navigate to your project uri, for example 127.0.0.1:80/rouge/public

Watch for changes during development:
<<<<<<< HEAD

```shell
npm run watch
```

=======
```shell 
npm run watch
```
>>>>>>> c71c05adc9b14966338fbae3ae973de2ad00b28b
##Finished FrontEnd Modules:
1.Dashboard
2.Reports
3.Businesses
4.Bookings
5.Services
6.Financial
7.Marketing
8.Customers
9.Service Providers
10.Logs
11.Categories
12.Ratings
<<<<<<< HEAD

### Custom Modules Write Up

Make a file inside the modules file manually
Load your routes in the Route Service provider in the route providers file
Register your module route file inside the route/module.php file in the root directory
Make all the relevant files ie controllers, entities, migrations manually
Make a database migration with the artisan command with a --path option to your module
Load your migration inside the service provider manually using loadMigrations From method
Make A controller inside the Http/Controllers in Module
Register the controller to Route in the routes folder of your module
Make a model using the artisan command with a path option to the module/entities folder
=======
>>>>>>> c71c05adc9b14966338fbae3ae973de2ad00b28b
