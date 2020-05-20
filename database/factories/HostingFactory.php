<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Hosting;
use Faker\Generator as Faker;

$factory->define(Hosting::class, function (Faker $faker) {
    return [
       'user_id' => $faker->unique()->numberBetween(1, 100),
       'packet'  => $faker->randomElement(
           [
               'Lite',
               'Base',
               'Full',
               'Max'
           ]
           ),
        'payment' => $faker->randomElement(
            [
                'Annual',
                'Monthly'
            ]
        )
    ];
});
