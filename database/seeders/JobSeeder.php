<?php

namespace Database\Seeders;

use App\Models\Jobs;
use App\Models\Applicant;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
        // add relation factory for applicants
        ->has(Applicant::factory()
        // set random applicant status
        ->state(function (array $attributes, Jobs $job) {
            return [
               'applicant_status_id' => \App\Models\ApplicantStatus::inRandomOrder()->first()->id,
            ];
        })
        ->count(10))
        ->count(10)->create();
    }
}
