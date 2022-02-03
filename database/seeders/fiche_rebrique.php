<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fiche;
use App\Models\Rebrique;
class fiche_rebrique extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        // for ($i = 0; $i < 5; $i++){
        //     Fiche::create([
        //         "date"=>$faker->date($format = 'Y-m-d', $max = 'now'),
        //         "employe_id"=>"3"
        //     ]);
        // }
        // for ($i = 0; $i < 5; $i++){
        //     Rebrique::create([
        //         "titre"=>$faker->jobTitle,
        //     ]);
        // }

        foreach (Fiche::all() as $fiche){
            $rebriques = Rebrique::inRandomOrder()->take(1)->pluck('id');
            $fiche->rebriques()->attach($rebriques,["montant" => rand(1,10000) ]);
        }

    }
}
