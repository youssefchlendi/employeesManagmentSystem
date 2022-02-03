<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 5; $i++) {
            do{
            $data = [
                'titre' => $faker->unique()->company,
                'matricule_fiscale' => $faker->unique()->numberBetween(25, 50),
                'registre_commerce' => $faker->unique()->numberBetween(25, 50),
                'adresse' => $faker->unique()->address,
                'ville' => $faker->unique()->city,
                'activités' => $faker->unique()->sentence,
            ];}while(DB::table('entreprises')->where('matricule_fiscale', $data['matricule_fiscale'])->count() || DB::table('entreprises')->where('registre_commerce', $data['registre_commerce'])->count());
            DB::table('entreprises')->insert($data);
        }
        for ($i = 0; $i < 10 ; $i++){
            DB::table('employes')->insert([
                'nom' => $faker->firstName,
                'prenom' => $faker->lastName,
                'cin' => $faker->randomNumber(8),
                'mat_cnss' => $faker->iban(001),
                'fonction' => $faker->jobTitle,
                'entreprise_id' => rand(1,9),
            ]);
        }
    }
}
