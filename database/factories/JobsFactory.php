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
            'job_type_id' => $this->faker->randomNumber(1,4),
            'active' => $this->faker->boolean,
            'date_posted' => $this->faker->dateTime,
            'date_expires' => $this->faker->dateTime,
            'created_by' => $this->faker->randomNumber(1),
            'updated_by' => $this->faker->randomNumber(1),


        ];
    }
}
