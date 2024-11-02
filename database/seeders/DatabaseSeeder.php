<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Collection;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'madmans',
            'email' => 'madmans@supplyou.com',
            'password' => Hash::make('madmansmadmans'),
        ]);

        // Collection::create([
        //     'title' => 'US business banks',
        //     'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus, harum similique nam nulla nesciunt impedit voluptates cumque. Nulla nam officia aliquam corrupti facere sint inventore tempore tenetur porro eum.'
        // ]);
    }
}
