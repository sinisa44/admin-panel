<?php

use Illuminate\Database\Seeder;

class UserHostingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( App\HostingUser::class, 200 )->create();
    }
}
