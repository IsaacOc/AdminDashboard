<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('category_name',255);
            $table->text('description');
            $table->string('location', 255);
            $table->integer('status');
            $table->string('usergroup')->nullable();
            $table->string('position')->nullable();
            $table->string('banner_image',255)->nullable();
            $table->string('image_text')->nullable();
            $table->string('creation_date')->nullable();
            // $table->unsignedInteger('business_group_id')->foriegn()->refrences('id')->on('business_groups');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
