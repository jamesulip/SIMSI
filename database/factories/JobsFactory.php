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
            $job->addMediaFromUrl('https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/315108739_124198990453935_1819151734633997690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEDW1q49Y8esUcW_I07SNI7ZY3IAIl0hI5ljcgAiXSEjpYg93t_5t7sKN_XFB_vsK_DlLjZXDmgn6c76jh_DIsj&_nc_ohc=RgNaS2FgiJcAX8asPb_&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfBprLyh1-4qEFM8sU3GU11slc0a0r36SrR1ppUaXYXqOA&oe=63D281E9')->toMediaCollection('images');
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
