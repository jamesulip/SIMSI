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
            $table->text('description')->nullable()->change();
            $table->text('text_description')->nullable()->change();
            $table->text('company',255)->nullable();
            $table->text('company_description')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('jobs', function (Blueprint $table) {
            //
            $table->text('description')->nullable(false)->change();
            $table->text('text_description')->nullable(false)->change();
            $table->dropColumn('company');
            $table->dropColumn('company_description');
        });
    }
};
