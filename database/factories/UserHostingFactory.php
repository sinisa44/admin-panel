<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HostingUser;
use Faker\Generator as Faker;

$factory->define(HostingUser::class, function (Faker $faker) {
    return [
        'client_type' => $faker->randomElement([1,2]),
        'customer'    => $faker->company,
        'first_name'  => $faker->firstName,
        'last_name'   => $faker->lastName,
        'jmbg'        => $faker->numberBetween( 10000000000000,  99999999999999 ),
        'address'     => $faker->address,
        'location'    => $faker->randomElement(
            [
                'becej',
                'novi sad',
                'beograd',
                'zrenjanin',
                'cacak',
                'subotica'
            ]
        ),
        'zip_code'      => $faker->numberBetween( 10000, 30000 ),
        'phone_number'  => $faker->phoneNumber,
        'mobile_number' => $faker->phoneNumber,
        'email'         => $faker->unique->email,
        'tax_id'        => $faker->numberBetween( 10000, 20000 ),
        'pib'           => $faker->numberBetween( 100000, 200000 ),
        'active'        => $faker->numberBetween(1,2)
    ];
});
