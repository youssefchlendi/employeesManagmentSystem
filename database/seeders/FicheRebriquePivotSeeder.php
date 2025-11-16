<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fiche;
use App\Models\Rebrique;
use App\Models\Employe;
use Carbon\Carbon;

class FicheRebriquePivotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $fiches = Fiche::with('employes')->get();
        
        // Define rubric categories with their typical amount ranges and whether they're positive or negative
        $rubricCategories = [
            'salaire_base' => [
                'rubrics' => ['Salaire de Base'],
                'min_amount' => 800,
                'max_amount' => 5000,
                'probability' => 100, // Always present
                'is_positive' => true
            ],
            'heures_sup' => [
                'rubrics' => ['Heures Supplémentaires'],
                'min_amount' => 50,
                'max_amount' => 400,
                'probability' => 60,
                'is_positive' => true
            ],
            'primes_performance' => [
                'rubrics' => ['Prime de Rendement', 'Prime de Responsabilité', 'Bonus de Performance'],
                'min_amount' => 100,
                'max_amount' => 800,
                'probability' => 40,
                'is_positive' => true
            ],
            'primes_fixes' => [
                'rubrics' => ['Prime d\'Ancienneté', 'Prime de Transport', 'Indemnité de Restauration'],
                'min_amount' => 30,
                'max_amount' => 200,
                'probability' => 70,
                'is_positive' => true
            ],
            'allocations' => [
                'rubrics' => ['Allocation Familiale', 'Indemnité de Logement', 'Indemnité de Télécommunication'],
                'min_amount' => 50,
                'max_amount' => 300,
                'probability' => 50,
                'is_positive' => true
            ],
            'primes_annuelles' => [
                'rubrics' => ['Prime de Fin d\'Année (13ème mois)', 'Prime de Vacances (14ème mois)'],
                'min_amount' => 500,
                'max_amount' => 2000,
                'probability' => 15, // Only for December/June
                'is_positive' => true
            ],
            'cotisations_sociales' => [
                'rubrics' => ['Cotisation CNSS Employé', 'Cotisation Retraite Complémentaire'],
                'min_amount' => 80,
                'max_amount' => 400,
                'probability' => 100, // Always present
                'is_positive' => false
            ],
            'impots' => [
                'rubrics' => ['IRPP (Impôt sur le Revenu)', 'Taxe de Formation Professionnelle'],
                'min_amount' => 50,
                'max_amount' => 600,
                'probability' => 90,
                'is_positive' => false
            ],
            'assurances' => [
                'rubrics' => ['Assurance Maladie', 'Mutuelle Santé'],
                'min_amount' => 20,
                'max_amount' => 100,
                'probability' => 80,
                'is_positive' => false
            ],
            'deductions_variables' => [
                'rubrics' => ['Avance sur Salaire', 'Absence Non Justifiée', 'Retard'],
                'min_amount' => 10,
                'max_amount' => 300,
                'probability' => 25,
                'is_positive' => false
            ],
            'frais_divers' => [
                'rubrics' => ['Cantine', 'Parking', 'Syndicat'],
                'min_amount' => 5,
                'max_amount' => 50,
                'probability' => 60,
                'is_positive' => false
            ]
        ];

        foreach ($fiches as $fiche) {
            $totalAmount = 0;
            $ficheDate = Carbon::parse($fiche->date);
            $isDecemberOrJune = in_array($ficheDate->month, [12, 6]);
            
            foreach ($rubricCategories as $category => $config) {
                // Skip annual bonuses if not December or June
                if ($category === 'primes_annuelles' && !$isDecemberOrJune) {
                    continue;
                }
                
                // Increase probability for annual bonuses in December/June
                $probability = $config['probability'];
                if ($category === 'primes_annuelles' && $isDecemberOrJune) {
                    $probability = 80;
                }
                
                if (rand(1, 100) <= $probability) {
                    // Select random rubric from category
                    $selectedRubric = $faker->randomElement($config['rubrics']);
                    $rubrique = Rebrique::where('titre', $selectedRubric)->first();
                    
                    if ($rubrique) {
                        // Calculate amount based on employee's position level
                        $baseAmount = rand($config['min_amount'], $config['max_amount']);
                        
                        // Adjust amount based on position (managers get more)
                        $employe = $fiche->employes;
                        if ($employe && (
                            strpos(strtolower($employe->fonction), 'directeur') !== false ||
                            strpos(strtolower($employe->fonction), 'responsable') !== false ||
                            strpos(strtolower($employe->fonction), 'chef') !== false ||
                            strpos(strtolower($employe->fonction), 'manager') !== false
                        )) {
                            $baseAmount *= 1.5; // 50% increase for management positions
                        }
                        
                        $amount = $config['is_positive'] ? $baseAmount : -$baseAmount;
                        $totalAmount += $amount;
                        
                        // Attach rubric to pay sheet
                        $fiche->rebriques()->attach($rubrique->id, [
                            'montant' => round($amount, 2)
                        ]);
                    }
                }
            }
            
            // Update the total for the pay sheet
            $fiche->update(['total' => round($totalAmount, 2)]);
        }
        
        // Create some special cases for testing (simplified for performance)
        // $this->createSpecialPaySheets();
    }
    
    private function createSpecialPaySheets()
    {
        // Create a high-earning executive pay sheet
        $executiveFiche = Fiche::whereHas('employes', function ($query) {
            $query->where('fonction', 'like', '%Directeur%');
        })->first();
        
        if ($executiveFiche) {
            $executiveFiche->rebriques()->detach(); // Clear existing
            $totalAmount = 0;
            
            // High base salary
            $salaireBase = Rebrique::where('titre', 'Salaire de Base')->first();
            if ($salaireBase) {
                $amount = 8000;
                $executiveFiche->rebriques()->attach($salaireBase->id, ['montant' => $amount]);
                $totalAmount += $amount;
            }
            
            // Executive bonus
            $bonusPerf = Rebrique::where('titre', 'Bonus de Performance')->first();
            if ($bonusPerf) {
                $amount = 2000;
                $executiveFiche->rebriques()->attach($bonusPerf->id, ['montant' => $amount]);
                $totalAmount += $amount;
            }
            
            // High deductions
            $irpp = Rebrique::where('titre', 'IRPP (Impôt sur le Revenu)')->first();
            if ($irpp) {
                $amount = -1500;
                $executiveFiche->rebriques()->attach($irpp->id, ['montant' => $amount]);
                $totalAmount += $amount;
            }
            
            $executiveFiche->update(['total' => round($totalAmount, 2)]);
        }
        
        // Create a minimum wage pay sheet
        $minWageFiche = Fiche::whereHas('employes', function ($query) {
            $query->whereIn('fonction', ['Agent de Nettoyage', 'Gardien', 'Coursier']);
        })->first();
        
        if ($minWageFiche) {
            $minWageFiche->rebriques()->detach(); // Clear existing
            $totalAmount = 0;
            
            // Minimum base salary
            $salaireBase = Rebrique::where('titre', 'Salaire de Base')->first();
            if ($salaireBase) {
                $amount = 450; // SMIG Tunisia
                $minWageFiche->rebriques()->attach($salaireBase->id, ['montant' => $amount]);
                $totalAmount += $amount;
            }
            
            // Small transport allowance
            $transport = Rebrique::where('titre', 'Prime de Transport')->first();
            if ($transport) {
                $amount = 30;
                $minWageFiche->rebriques()->attach($transport->id, ['montant' => $amount]);
                $totalAmount += $amount;
            }
            
            // Minimal deductions
            $cnss = Rebrique::where('titre', 'Cotisation CNSS Employé')->first();
            if ($cnss) {
                $amount = -43; // ~9.18% of 450
                $minWageFiche->rebriques()->attach($cnss->id, ['montant' => $amount]);
                $totalAmount += $amount;
            }
            
            $minWageFiche->update(['total' => round($totalAmount, 2)]);
        }
    }
}
