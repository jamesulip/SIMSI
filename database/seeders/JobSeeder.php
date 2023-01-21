<?php

namespace Database\Seeders;

use App\Models\Applicant;
use App\Models\Jobs;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Jobs::factory()
        // add employer relation
        ->hasEmployer()

        // add relation factory for applicants
        ->has(Applicant::factory()
        // set random applicant status
        ->state(function (array $attributes, Jobs $job) {
            return [
                'applicant_status_id' => \App\Models\ApplicantStatus::inRandomOrder()->first()->id,
            ];
        })
        // attach file

        ->count(10))
        ->count(10)->create();
    }
    // configure after creating
    
}
