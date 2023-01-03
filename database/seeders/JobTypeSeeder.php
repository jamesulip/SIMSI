<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class JobTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create seeder for job   types
        $jobTypes = [
            [
                'name' => 'Full Time',
                'description' => 'Full Time',
                'active' => true,
                'created_by' => 'admin',
            ],
            [
                'name' => 'Part Time',
                'description' => 'Part Time',
                'active' => true,
                'created_by' => 'admin',
            ],
            [
                'name' => 'Contract',
                'description' => 'Contract',
                'active' => true,
                'created_by' => 'admin',
            ],
            [
                'name' => 'Internship',
                'description' => 'Internship',
                'active' => true,
                'created_by' => 'admin',
            ],
            [
                'name' => 'Temporary',
                'description' => 'Temporary',
                'active' => true,
                'created_by' => 'admin',
            ],
        ];
        foreach ($jobTypes as $jobType) {
            \App\Models\JobType::updateOrCreate(
                ['name' => $jobType['name']],
                [
                    'description' => $jobType['description'],
                    'active' => $jobType['active'],
                    'created_by' => $jobType['created_by'],
                ]
            );
        }
    }
}
