<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Jobs>
 */
class JobsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function configure(){
        return $this->afterCreating(function ($job) {
            // add media
            $job->addMediaFromUrl('/315108739_124198990453935_1819151734633997690_n.jpg')->toMediaCollection('images');
        });
    }
    public function definition()
    {


        return [
            //
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->paragraph,
            'location' => $this->faker->address,
            'salary' => $this->faker->randomNumber(5),
            'show_salary' => $this->faker->boolean,
            'skills' => $this->faker->words(5),
            'text_description' => $this->faker->paragraph,
            // random from model
            'job_type_id' => $this->faker->randomNumber(1, 4),
            'active' => $this->faker->boolean,
            'date_posted' => $this->faker->dateTime,
            // faker greater than date_posted
            'date_expires' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = '+1 years'),
            'created_by' => $this->faker->randomNumber(1),
            'updated_by' => $this->faker->randomNumber(1),

        ];
    }
}
