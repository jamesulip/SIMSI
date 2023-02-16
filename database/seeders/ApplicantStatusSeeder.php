<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ApplicantStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // create applicant status\
        // set foreign key check to 0
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        \App\Models\ApplicantStatus::truncate();
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        $APPLICANT_STATUS = [
            [
                'name' => 'New',
                'color' => 'blue',
            ],
            [
                'name' => 'SELECTED',
                'color' => 'light-blue',
            ],
            [
                'name' => 'INTERVIEWED',
                'color' => 'yellow',
            ],
            [
                'name' => 'DEPLOYED',
                'color' => 'green',
            ],
            [
                'name' => 'BACK OUT',
                'color' => 'red',
            ],
            [
                'name' => 'NOT QUALIFIED',
                'color' => 'red',
            ],
        ];
        // update or create
        foreach ($APPLICANT_STATUS as $status) {
            \App\Models\ApplicantStatus::updateOrCreate(
                ['name' => $status['name']],
                ['color' => $status['color']]
            );
        }
    }
}
