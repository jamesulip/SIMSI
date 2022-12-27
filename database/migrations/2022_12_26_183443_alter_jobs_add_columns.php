<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('jobs', function (Blueprint $table) {
            //
            $table->string('text_description')->nullable();
            $table->boolean('active')->default(true);
            $table->date('date_posted')->nullable();
            $table->date('date_expires')->nullable();
            $table->string('job_type')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->foreignIdFor(\App\Models\JobType::class)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // set foreign key checks to 0
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Schema::table('jobs', function (Blueprint $table) {
            //
            $table->dropColumn('text_description');
            $table->dropColumn('active');
            $table->dropColumn('date_posted');
            $table->dropColumn('date_expires');
            $table->dropColumn('job_type');
            $table->dropColumn('created_by');
            $table->dropColumn('updated_by');
            $table->dropForeign(['job_type_id']);
            $table->dropColumn('job_type_id');

        });
        // set foreign key checks to 1
        \DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};
