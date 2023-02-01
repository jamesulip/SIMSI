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
                'name' => 'Not Qualified',
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
