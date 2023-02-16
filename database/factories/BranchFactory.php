<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Branch>
 */
class BranchFactory extends Factory
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
            // 'name',
            // 'address',
            // 'phone',
            // 'email',
            // 'website',
            'name' => $this->faker->state,
            'address' => $this->faker->address,
            // random email json
            'phone' =>[$this->faker->phoneNumber, $this->faker->phoneNumber, $this->faker->phoneNumber, $this->faker->phoneNumber],
            'email' =>[$this->faker->email, $this->faker->email, $this->faker->email, $this->faker->email],
            'website' => $this->faker->url,
        ];
    }
}
