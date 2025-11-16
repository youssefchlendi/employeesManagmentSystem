<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class QuickTestSeeder extends Seeder
{
    /**
     * Quick seeder for testing purposes with minimal data.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('🚀 Quick Test Seeding Started...');
        
        // Minimal data for quick testing
        $this->call([
            UsersSeeder::class,
        ]);
        
        // Create just a few companies
        $faker = \Faker\Factory::create('fr_FR');
        $companies = [
            [
                'titre' => 'Test Company 1 SARL',
                'matricule_fiscale' => 'TEST12345',
                'registre_commerce' => 'RCTEST001',
                'adresse' => 'Test Address 1, Tunis',
                'ville' => 'Tunis',
                'activités' => 'Test Business Activity 1'
            ],
            [
                'titre' => 'Test Company 2 SA',
                'matricule_fiscale' => 'TEST23456',
                'registre_commerce' => 'RCTEST002',
                'adresse' => 'Test Address 2, Sfax',
                'ville' => 'Sfax',
                'activités' => 'Test Business Activity 2'
            ],
            [
                'titre' => 'Test Company 3 SUARL',
                'matricule_fiscale' => 'TEST34567',
                'registre_commerce' => 'RCTEST003',
                'adresse' => 'Test Address 3, Sousse',
                'ville' => 'Sousse',
                'activités' => 'Test Business Activity 3'
            ]
        ];
        
        foreach ($companies as $companyData) {
            \App\Models\Entreprise::create($companyData);
        }
        
        // Create employees for these companies
        $companies = \App\Models\Entreprise::all();
        $positions = ['Développeur', 'Comptable', 'Commercial', 'Secrétaire', 'Manager'];
        
        foreach ($companies as $company) {
            for ($i = 0; $i < 5; $i++) {
                \App\Models\Employe::create([
                    'nom' => $faker->lastName,
                    'prenom' => $faker->firstName,
                    'cin' => $faker->unique()->numberBetween(10000000, 99999999),
                    'mat_cnss' => 'TEST' . $faker->unique()->numberBetween(100000, 999999),
                    'fonction' => $faker->randomElement($positions),
                    'entreprise_id' => $company->id,
                ]);
            }
        }
        
        // Create basic rubrics
        $basicRubrics = [
            'Salaire de Base',
            'Prime de Transport', 
            'Cotisation CNSS Employé',
            'IRPP (Impôt sur le Revenu)'
        ];
        
        foreach ($basicRubrics as $rubric) {
            \App\Models\Rebrique::create(['titre' => $rubric]);
        }
        
        // Create basic pay sheets
        $employees = \App\Models\Employe::all();
        foreach ($employees as $employee) {
            for ($i = 0; $i < 3; $i++) {
                $fiche = \App\Models\Fiche::create([
                    'date' => now()->subMonths($i)->endOfMonth(),
                    'total' => 0,
                    'employe_id' => $employee->id,
                ]);
                
                // Attach basic rubrics
                $salaireBase = \App\Models\Rebrique::where('titre', 'Salaire de Base')->first();
                $transport = \App\Models\Rebrique::where('titre', 'Prime de Transport')->first();
                $cnss = \App\Models\Rebrique::where('titre', 'Cotisation CNSS Employé')->first();
                
                if ($salaireBase) {
                    $fiche->rebriques()->attach($salaireBase->id, ['montant' => rand(800, 2000)]);
                }
                if ($transport) {
                    $fiche->rebriques()->attach($transport->id, ['montant' => rand(30, 100)]);
                }
                if ($cnss) {
                    $fiche->rebriques()->attach($cnss->id, ['montant' => -rand(80, 200)]);
                }
                
                // Update total
                $total = $fiche->rebriques()->sum('montant');
                $fiche->update(['total' => $total]);
            }
        }
        
        $this->command->info('✅ Quick Test Seeding Completed!');
        $this->command->info('Created: ' . \App\Models\Entreprise::count() . ' companies, ' . 
                            \App\Models\Employe::count() . ' employees, ' . 
                            \App\Models\Fiche::count() . ' pay sheets');
    }
}
