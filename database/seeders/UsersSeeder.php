<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('fr_FR');

        // Create admin user
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@company.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // Create HR manager
        User::create([
            'name' => 'HR Manager',
            'email' => 'hr@company.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // Create payroll manager
        User::create([
            'name' => 'Payroll Manager',
            'email' => 'payroll@company.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // Create additional users
        for ($i = 0; $i < 8; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'email_verified_at' => $faker->boolean(80) ? now() : null,
            ]);
        }
    }
}
