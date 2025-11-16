<?php

namespace Database\Seeders;

use App\Models\Employe;
use App\Models\Fiche;
use App\Models\Rebrique;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class EmployeeLifecycleSeeder extends Seeder
{
    /**
     * Run the database seeds for employee lifecycle events.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('👨‍💼 Generating employee lifecycle events...');
        
        // Generate new hires with prorated salaries
        $this->generateNewHires();
        
        // Generate departing employees with final settlements
        $this->generateDepartures();
        
        // Generate employee promotions
        $this->generatePromotions();
        
        // Generate leave and absence impacts
        $this->generateLeaveImpacts();
        
        // Generate training and development costs
        $this->generateTrainingCosts();
        
        $this->command->info('✅ Employee lifecycle events generated!');
    }
    
    /**
     * Generate new hire scenarios with prorated first salaries
     */
    private function generateNewHires()
    {
        $recentEmployees = Employe::latest()->take(15)->get();
        
        foreach ($recentEmployees->take(5) as $employe) {
            // Simulate mid-month hiring
            $hireDate = Carbon::now()->subDays(rand(5, 25));
            $firstPaySheet = $employe->fiches()->orderBy('date', 'asc')->first();
            
            if ($firstPaySheet) {
                $firstPaySheetDate = Carbon::parse($firstPaySheet->date);
                $daysWorked = $hireDate->diffInDays($firstPaySheetDate->endOfMonth());
                $totalDaysInMonth = $firstPaySheetDate->daysInMonth;
                $prorationFactor = $daysWorked / $totalDaysInMonth;
                
                // Prorate the base salary
                $salaireBase = $firstPaySheet->rebriques()
                    ->where('titre', 'Salaire de Base')
                    ->first();
                
                if ($salaireBase) {
                    $originalAmount = $salaireBase->pivot->montant;
                    $proratedAmount = $originalAmount * $prorationFactor;
                    
                    $firstPaySheet->rebriques()->updateExistingPivot($salaireBase->rebrique_id, [
                        'montant' => round($proratedAmount, 2)
                    ]);
                    
                    // Recalculate total
                    $total = $firstPaySheet->rebriques()->sum('montant');
                    $firstPaySheet->update(['total' => $total]);
                }
            }
        }
    }
    
    /**
     * Generate employee departures with final settlements
     */
    private function generateDepartures()
    {
        $departingEmployees = Employe::inRandomOrder()->take(3)->get();
        
        foreach ($departingEmployees as $employe) {
            $lastPaySheet = $employe->fiches()->latest('date')->first();
            
            if ($lastPaySheet) {
                // Add severance pay
                $indemnite = Rebrique::where('titre', 'Indemnité de Licenciement')->first();
                if ($indemnite) {
                    $yearsOfService = rand(1, 10);
                    $baseSalary = $lastPaySheet->rebriques()
                        ->where('titre', 'Salaire de Base')
                        ->first();
                    
                    if ($baseSalary) {
                        $severanceAmount = $baseSalary->pivot->montant * $yearsOfService * 0.5;
                        
                        $lastPaySheet->rebriques()->attach($indemnite->id, [
                            'montant' => round($severanceAmount, 2)
                        ]);
                    }
                }
                
                // Add notice pay
                $preavis = Rebrique::where('titre', 'Préavis')->first();
                if ($preavis && $baseSalary) {
                    $lastPaySheet->rebriques()->attach($preavis->id, [
                        'montant' => round($baseSalary->pivot->montant, 2)
                    ]);
                }
                
                // Add accrued vacation pay
                $congesPayes = Rebrique::where('titre', 'Congés Payés')->first();
                if ($congesPayes && $baseSalary) {
                    $accruedVacation = rand(5, 25); // Days
                    $dailyRate = $baseSalary->pivot->montant / 30;
                    $vacationPay = $dailyRate * $accruedVacation;
                    
                    $lastPaySheet->rebriques()->attach($congesPayes->id, [
                        'montant' => round($vacationPay, 2)
                    ]);
                }
                
                // Recalculate total
                $total = $lastPaySheet->rebriques()->sum('montant');
                $lastPaySheet->update(['total' => $total]);
            }
        }
    }
    
    /**
     * Generate promotion scenarios
     */
    private function generatePromotions()
    {
        $employeesForPromotion = Employe::where('fonction', 'not like', '%Directeur%')
            ->where('fonction', 'not like', '%Responsable%')
            ->inRandomOrder()
            ->take(20)
            ->get();
        
        foreach ($employeesForPromotion as $employe) {
            if (rand(1, 100) <= 25) { // 25% get promoted
                $promotionMonth = Carbon::now()->subMonths(rand(1, 12));
                
                // Find pay sheet around promotion time
                $promotionFiche = $employe->fiches()
                    ->whereYear('date', $promotionMonth->year)
                    ->whereMonth('date', $promotionMonth->month)
                    ->first();
                
                if ($promotionFiche) {
                    // Add promotion bonus
                    $primeResponsabilite = Rebrique::where('titre', 'Prime de Responsabilité')->first();
                    if ($primeResponsabilite) {
                        $promotionFiche->rebriques()->attach($primeResponsabilite->id, [
                            'montant' => rand(300, 800)
                        ]);
                    }
                    
                    // Increase base salary for subsequent months
                    $salaireBase = Rebrique::where('titre', 'Salaire de Base')->first();
                    if ($salaireBase) {
                        $currentSalary = $promotionFiche->rebriques()
                            ->where('rebrique_id', $salaireBase->id)
                            ->first();
                        
                        if ($currentSalary) {
                            $raiseAmount = $currentSalary->pivot->montant * 0.20; // 20% raise
                            $newSalary = $currentSalary->pivot->montant + $raiseAmount;
                            
                            // Update subsequent pay sheets
                            $promotionDate = Carbon::parse($promotionFiche->date);
                            $subsequentFiches = $employe->fiches()
                                ->whereDate('date', '>', $promotionDate)
                                ->get();
                            
                            foreach ($subsequentFiches as $fiche) {
                                $fiche->rebriques()->updateExistingPivot($salaireBase->id, [
                                    'montant' => round($newSalary, 2)
                                ]);
                            }
                        }
                    }
                }
            }
        }
    }
    
    /**
     * Generate leave and absence impacts on salary
     */
    private function generateLeaveImpacts()
    {
        $employees = Employe::inRandomOrder()->take(20)->get();
        
        foreach ($employees as $employe) {
            $recentFiches = $employe->fiches()
                ->where('date', '>=', now()->subMonths(3))
                ->get();
            
            foreach ($recentFiches as $fiche) {
                // 15% chance of some kind of absence
                if (rand(1, 100) <= 15) {
                    $absenceType = rand(1, 3);
                    
                    switch ($absenceType) {
                        case 1: // Unpaid absence
                            $absenceRubric = Rebrique::where('titre', 'Absence Non Justifiée')->first();
                            if ($absenceRubric) {
                                $daysAbsent = rand(1, 5);
                                $dailyRate = 30; // Average daily deduction
                                $deduction = $daysAbsent * $dailyRate;
                                
                                $fiche->rebriques()->attach($absenceRubric->id, [
                                    'montant' => -$deduction
                                ]);
                            }
                            break;
                            
                        case 2: // Paid sick leave
                            // No deduction, but add sick leave tracking
                            break;
                            
                        case 3: // Vacation taken
                            $congesRubric = Rebrique::where('titre', 'Congés Payés')->first();
                            if ($congesRubric) {
                                // Vacation is usually paid, so positive amount
                                $vacationDays = rand(2, 10);
                                $dailyRate = 25;
                                
                                $fiche->rebriques()->attach($congesRubric->id, [
                                    'montant' => $vacationDays * $dailyRate
                                ]);
                            }
                            break;
                    }
                }
                
                // 5% chance of tardiness deduction
                if (rand(1, 100) <= 5) {
                    $retardRubric = Rebrique::where('titre', 'Retard')->first();
                    if ($retardRubric) {
                        $fiche->rebriques()->attach($retardRubric->id, [
                            'montant' => -rand(10, 50)
                        ]);
                    }
                }
            }
        }
    }
    
    /**
     * Generate training and development costs/reimbursements
     */
    private function generateTrainingCosts()
    {
        $employeesInTraining = Employe::inRandomOrder()->take(8)->get();
        
        foreach ($employeesInTraining as $employe) {
            if (rand(1, 100) <= 40) { // 40% receive training
                $trainingFiche = $employe->fiches()
                    ->where('date', '>=', now()->subMonths(3))
                    ->inRandomOrder()
                    ->first();
                
                if ($trainingFiche) {
                    $remboursementFormation = Rebrique::where('titre', 'Remboursement Formation')->first();
                    if ($remboursementFormation) {
                        $trainingCost = rand(200, 2000);
                        
                        $trainingFiche->rebriques()->attach($remboursementFormation->id, [
                            'montant' => $trainingCost
                        ]);
                    }
                }
            }
        }
        
        // Recalculate all affected totals
        $this->recalculateModifiedTotals();
    }
    
    /**
     * Recalculate totals for modified pay sheets
     */
    private function recalculateModifiedTotals()
    {
        // Get all fiches that have been modified (simplified approach: recalculate recent ones)
        $ficheesToUpdate = Fiche::where('updated_at', '>', now()->subMinutes(5))->get();
        
        foreach ($ficheesToUpdate as $fiche) {
            $total = $fiche->rebriques()->sum('montant');
            $fiche->update(['total' => round($total, 2)]);
        }
    }
}
