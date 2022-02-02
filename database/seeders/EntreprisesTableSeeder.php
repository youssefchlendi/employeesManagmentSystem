<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Entreprise;
class EntreprisesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        Entreprise::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 10; $i++) {
            Entreprise::create([
                'titre' => $faker->company,
                'matricule-fiscale' => $faker->numberBetween(25, 50),
                'registre-commerce' => $faker->numberBetween(25, 50),
                'adresse' => $faker->address,
                'ville' => $faker->city,
                'activités' => $faker->sentence,
            ]);
        }
    }
}
