<?php

use Illuminate\Database\Seeder;

class HouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $houses = [
        [
          'name' => 'Grand Regal Hotel',
          'description' => 'Grand Regal Hotel description.',
          'lat' => '7.103602',
          'long' => '125.641840',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Waterfront Insular',
          'description' => 'Waterfront Insular description',
          'lat' => '7.105997',
          'long' => '125.650400',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Seda Abreeza',
          'description' => 'Seda Abreeza description',
          'lat' => '7.089527',
          'long' => '125.610773',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Jazzy James Hotel',
          'description' => 'Jazzy James Hotel description',
          'lat' => '7.085514',
          'long' => '125.612844',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'D Leonor Hotel',
          'description' => 'D Leonor description.',
          'lat' => '7.084101',
          'long' => '125.612074',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Sychar Garden',
          'description' => 'Sychar Garden description',
          'lat' => '7.084170',
          'long' => '125.612460',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Apo View Hotel',
          'description' => 'Apo View Hotel description',
          'lat' => '7.069218',
          'long' => '125.607617',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Marco Polo',
          'description' => 'Marco Polo description',
          'lat' => '7.072316',
          'long' => '125.611415',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Regency Inn',
          'description' => 'Regency Inn description.',
          'lat' => '7.074638',
          'long' => '125.614008',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'The Pinnacle Hotel and Suites',
          'description' => 'The Pinnacle Hotel and Suites description',
          'lat' => '7.076203',
          'long' => '125.615253',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Hotel Uno',
          'description' => 'Hotel Uno description',
          'lat' => '7.070363',
          'long' => '125.611653',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Jazzy James Hotel',
          'description' => 'Jazzy James Hotel description',
          'lat' => '7.085514',
          'long' => '125.612844',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Nevermind Hotel',
          'description' => 'Nerver mind description.',
          'lat' => '7.084934',
          'long' => '125.573968',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Lorem Ipsum',
          'description' => 'Sychar Garden description',
          'lat' => '7.059556',
          'long' => '125.580314',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Hotel nvidia',
          'description' => 'Apo View Hotel description',
          'lat' => '7.115292',
          'long' => '125.626233',
          'price' => rand(1000, 20000),
        ],
        [
          'name' => 'Hotel Mahiwaga',
          'description' => 'Marco Polo description',
          'lat' => '7.124389',
          'long' => '125.596766',
          'price' => rand(1000, 20000),
        ],
      ];

      \App\Models\House::insert($houses);
    }
}
