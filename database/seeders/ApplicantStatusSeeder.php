<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
                'color' => 'blue'
            ],
            [
                'name' => 'Qualified',
                'color' => 'light-blue'
            ],
            [
                'name' => 'In Progress',
                'color' => 'yellow'
            ],
            [
                'name' => 'Hired',
                'color' => 'green'
            ],
            [
                'name' => 'Rejected',
                'color' => 'red'
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
