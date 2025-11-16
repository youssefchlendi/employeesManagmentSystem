<?php

namespace Database\Seeders;

use App\Models\Employe;
use App\Models\Fiche;
use App\Models\Rebrique;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class PayrollAnalyticsSeeder extends Seeder
{
    /**
     * Run the database seeds for advanced payroll analytics.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('📊 Generating advanced payroll analytics data...');
        
        // Generate salary progression data
        $this->generateSalaryProgressions();
        
        // Generate seasonal bonuses
        $this->generateSeasonalBonuses();
        
        // Generate performance reviews impact
        $this->generatePerformanceReviews();
        
        // Generate department-specific data
        $this->generateDepartmentSpecificData();
        
        $this->command->info('✅ Advanced payroll analytics data generated!');
    }
    
    /**
     * Generate salary progression over time
     */
    private function generateSalaryProgressions()
    {
        $employes = Employe::with(['fiches' => function($query) {
            $query->orderBy('date', 'asc');
        }])->get();
        
        foreach ($employes as $employe) {
            $fiches = $employe->fiches->sortBy('date');
            if ($fiches->count() < 3) continue; // Need at least 3 months
            
            // Simulate salary increases (5-15% annually for good performers)
            $shouldGetRaise = rand(1, 100) <= 70; // 70% chance of raise
            
            if ($shouldGetRaise) {
                $raiseMonth = $fiches->skip(rand(2, max(2, $fiches->count() - 2)))->first();
                if ($raiseMonth) {
                    $salaireBase = Rebrique::where('titre', 'Salaire de Base')->first();
                    if ($salaireBase) {
                        $currentSalary = $raiseMonth->rebriques()
                            ->where('rebrique_id', $salaireBase->id)
                            ->first();
                            
                        if ($currentSalary) {
                            $raisePercentage = rand(5, 15) / 100;
                            $newSalary = $currentSalary->pivot->montant * (1 + $raisePercentage);
                            
                            // Update all subsequent pay sheets
                            $raiseDate = \Carbon\Carbon::parse($raiseMonth->date);
                            $subsequentFiches = $fiches->filter(function($fiche) use ($raiseDate) {
                                return \Carbon\Carbon::parse($fiche->date)->gt($raiseDate);
                            });
                            foreach ($subsequentFiches as $fiche) {
                                $fiche->rebriques()->updateExistingPivot($salaireBase->id, [
                                    'montant' => round($newSalary, 2)
                                ]);
                                
                                // Recalculate total
                                $total = $fiche->rebriques()->sum('montant');
                                $fiche->update(['total' => $total]);
                            }
                        }
                    }
                }
            }
        }
    }
    
    /**
     * Generate seasonal bonuses
     */
    private function generateSeasonalBonuses()
    {
        $fiches = Fiche::whereMonth('date', 12)->get(); // December pay sheets
        $primeFinAnnee = Rebrique::where('titre', 'Prime de Fin d\'Année (13ème mois)')->first();
        
        if ($primeFinAnnee) {
            foreach ($fiches as $fiche) {
                if (rand(1, 100) <= 85) { // 85% get year-end bonus
                    $salaireBase = $fiche->rebriques()
                        ->where('titre', 'Salaire de Base')
                        ->first();
                    
                    if ($salaireBase) {
                        $bonusAmount = $salaireBase->pivot->montant; // Full month salary
                        
                        $fiche->rebriques()->attach($primeFinAnnee->id, [
                            'montant' => $bonusAmount
                        ]);
                        
                        // Update total
                        $total = $fiche->rebriques()->sum('montant');
                        $fiche->update(['total' => $total]);
                    }
                }
            }
        }
    }
    
    /**
     * Generate performance review impacts
     */
    private function generatePerformanceReviews()
    {
        $performanceRubrics = [
            'Prime de Rendement',
            'Bonus de Performance',
            'Prime d\'Objectifs'
        ];
        
        $employes = Employe::all();
        
        foreach ($employes as $employe) {
            // Simulate quarterly performance reviews
            $recentFiches = $employe->fiches()
                ->where('date', '>=', now()->subMonths(6))
                ->get();
            
            $performanceLevel = rand(1, 5); // 1-5 performance rating
            
            foreach ($recentFiches as $fiche) {
                $ficheDate = Carbon::parse($fiche->date);
                if ($ficheDate->month % 3 == 0) { // Quarterly months
                    $rubric = Rebrique::whereIn('titre', $performanceRubrics)
                        ->inRandomOrder()
                        ->first();
                    
                    if ($rubric && $performanceLevel >= 3) {
                        $baseAmount = 200;
                        $performanceMultiplier = $performanceLevel * 0.5;
                        $amount = $baseAmount * $performanceMultiplier;
                        
                        if (!$fiche->rebriques()->where('rebrique_id', $rubric->id)->exists()) {
                            $fiche->rebriques()->attach($rubric->id, [
                                'montant' => round($amount, 2)
                            ]);
                            
                            $total = $fiche->rebriques()->sum('montant');
                            $fiche->update(['total' => $total]);
                        }
                    }
                }
            }
        }
    }
    
    /**
     * Generate department-specific pay data
     */
    private function generateDepartmentSpecificData()
    {
        // IT Department gets tech allowances
        $itEmployees = Employe::where('fonction', 'like', '%Développeur%')
            ->orWhere('fonction', 'like', '%IT%')
            ->orWhere('fonction', 'like', '%Programmeur%')
            ->get();
        
        $techAllowance = Rebrique::where('titre', 'Indemnité de Télécommunication')->first();
        
        if ($techAllowance) {
            foreach ($itEmployees as $employe) {
                $recentFiches = $employe->fiches()->take(3)->get();
                foreach ($recentFiches as $fiche) {
                    if (!$fiche->rebriques()->where('rebrique_id', $techAllowance->id)->exists()) {
                        $fiche->rebriques()->attach($techAllowance->id, [
                            'montant' => rand(80, 150)
                        ]);
                    }
                }
            }
        }
        
        // Sales team gets commissions
        $salesEmployees = Employe::where('fonction', 'like', '%Commercial%')
            ->orWhere('fonction', 'like', '%Vente%')
            ->get();
        
        $commission = Rebrique::where('titre', 'Commission sur Ventes')->first();
        
        if ($commission) {
            foreach ($salesEmployees as $employe) {
                $recentFiches = $employe->fiches()->take(5)->get();
                foreach ($recentFiches as $fiche) {
                    if (rand(1, 100) <= 60) { // 60% chance of commission
                        if (!$fiche->rebriques()->where('rebrique_id', $commission->id)->exists()) {
                            $fiche->rebriques()->attach($commission->id, [
                                'montant' => rand(200, 1000)
                            ]);
                        }
                    }
                }
            }
        }
        
        // Update all totals
        $this->recalculateAllTotals();
    }
    
    /**
     * Recalculate all pay sheet totals
     */
    private function recalculateAllTotals()
    {
        $fiches = Fiche::with('rebriques')->get();
        
        foreach ($fiches as $fiche) {
            $total = $fiche->rebriques()->sum('montant');
            $fiche->update(['total' => round($total, 2)]);
        }
    }
}
