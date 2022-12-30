<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employer>
 */
class EmployerFactory extends Factory
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
            'name' => $this->faker->company,
            'country' => $this->faker->country,
            'address' => $this->faker->address,
            'description' => $this->faker->text,
            'email' => $this->faker->email,
            'phone' => $this->faker->phoneNumber,
            'website' => $this->faker->url,
        ];
    }
}
