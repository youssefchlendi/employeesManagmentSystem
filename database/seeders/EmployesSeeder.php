<?php

namespace Database\Seeders;

use App\Models\Employe;
use App\Models\Entreprise;
use Illuminate\Database\Seeder;

class EmployesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('fr_FR');
        
        // Common Tunisian job positions
        $positions = [
            // IT & Technology
            'Développeur Full Stack', 'Analyste Programmeur', 'Chef de Projet IT', 'Administrateur Système',
            'Data Analyst', 'DevOps Engineer', 'UI/UX Designer', 'Testeur QA', 'Architecte Solutions',
            
            // Management & Administration
            'Directeur Général', 'Directeur Financier', 'Directeur Commercial', 'Responsable RH',
            'Chef Comptable', 'Contrôleur de Gestion', 'Responsable Marketing', 'Responsable Qualité',
            
            // Finance & Accounting
            'Comptable', 'Auditeur Interne', 'Analyste Financier', 'Trésorier', 'Contrôleur Budgétaire',
            
            // Sales & Marketing
            'Commercial', 'Responsable Ventes', 'Chargé Marketing', 'Community Manager', 'Business Developer',
            
            // Operations & Production
            'Chef de Production', 'Superviseur', 'Technicien', 'Opérateur Machine', 'Responsable Logistique',
            'Chef d\'Équipe', 'Contrôleur Qualité', 'Mécanicien', 'Électricien', 'Agent de Maintenance',
            
            // Healthcare
            'Médecin Généraliste', 'Infirmier', 'Pharmacien', 'Technicien Laboratoire', 'Kinésithérapeute',
            
            // Education
            'Professeur', 'Formateur', 'Coordinateur Pédagogique', 'Responsable Formation',
            
            // Construction
            'Ingénieur Civil', 'Architecte', 'Chef de Chantier', 'Conducteur de Travaux', 'Maçon',
            
            // Transportation & Logistics
            'Chauffeur', 'Responsable Expédition', 'Agent Logistique', 'Dispatcher',
            
            // Banking & Insurance
            'Conseiller Clientèle', 'Chargé de Crédit', 'Analyste Risque', 'Agent d\'Assurance',
            
            // General Services
            'Secrétaire', 'Assistant Administratif', 'Réceptionniste', 'Agent de Sécurité', 
            'Agent de Nettoyage', 'Gardien', 'Coursier'
        ];

        $entreprises = Entreprise::all();
        
        foreach ($entreprises as $entreprise) {
            // Each company gets between 3-8 employees
            $numEmployees = rand(3, 8);
            
            for ($i = 0; $i < $numEmployees; $i++) {
                // Generate unique CIN (8 digits)
                do {
                    $cin = $faker->unique()->numberBetween(10000000, 99999999);
                } while (Employe::where('cin', $cin)->exists());
                
                // Generate unique CNSS matricule
                do {
                    $matCnss = $faker->regexify('[0-9]{2}[A-Z]{2}[0-9]{6}');
                } while (Employe::where('mat_cnss', $matCnss)->exists());

                Employe::create([
                    'nom' => $faker->lastName,
                    'prenom' => $faker->firstName,
                    'cin' => $cin,
                    'mat_cnss' => $matCnss,
                    'fonction' => $faker->randomElement($positions),
                    'entreprise_id' => $entreprise->id,
                ]);
            }
        }
        
        // Add some specific employees for testing
        $testEmployees = [
            [
                'nom' => 'Ben Ali',
                'prenom' => 'Mohamed',
                'cin' => 12345678,
                'mat_cnss' => '01TN123456',
                'fonction' => 'Directeur Général',
                'entreprise_id' => 1
            ],
            [
                'nom' => 'Trabelsi',
                'prenom' => 'Fatma',
                'cin' => 23456789,
                'mat_cnss' => '02TN234567',
                'fonction' => 'Responsable RH',
                'entreprise_id' => 1
            ],
            [
                'nom' => 'Hadj Salem',
                'prenom' => 'Ahmed',
                'cin' => 34567890,
                'mat_cnss' => '03TN345678',
                'fonction' => 'Chef Comptable',
                'entreprise_id' => 2
            ]
        ];

        foreach ($testEmployees as $employee) {
            // Check if CIN or mat_cnss already exists
            if (!Employe::where('cin', $employee['cin'])->exists() && 
                !Employe::where('mat_cnss', $employee['mat_cnss'])->exists()) {
                Employe::create($employee);
            }
        }
    }
}
