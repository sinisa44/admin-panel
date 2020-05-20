<?php

use Illuminate\Database\Seeder;

class HostingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory( App\Hosting::class, 100 )->create();
    }
}
