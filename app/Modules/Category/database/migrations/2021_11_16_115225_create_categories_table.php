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
            $table->string('booking_type', 255);
            $table->string('billing_strategy', 255);
            $table->string('job_type', 255);
            $table->double('cancellation_fees', 10, 3)->nullable();
            $table->double('consultation_fees')->nullable();
            $table->double('visitation_fee')->nullable();
            $table->double('hourly_rate_fee')->nullable();
            $table->double('minimum_fee')->nullable();
            $table->double('maximum_fee')->nullable();
            $table->string('banner_web',255)->nullable();
            $table->string('banner_mobile',255)->nullable();
            $table->string('selected_state_icon',255)->nullable();
            $table->string('un_selected_state_icon',255)->nullable();
            $table->integer('status')->nullable();
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
