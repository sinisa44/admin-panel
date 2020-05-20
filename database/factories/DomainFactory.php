<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Domain;
use Faker\Generator as Faker;

$factory->define(Domain::class, function (Faker $faker) {
    return [
        'user_id' => $faker->unique()->numberBetween( 1, 100 ),
        'name'    => $faker->domainName,
        'period'  => $faker->numberBetween(1, 10 )
    ];
});
