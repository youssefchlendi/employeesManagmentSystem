<?php

namespace Database\Seeders;

use App\Models\Fiche;
use App\Models\Employe;
use Illuminate\Database\Seeder;

class FichesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $employes = Employe::all();
        
        // Generate pay sheets for the last 6 months
        $startDate = now()->subMonths(6)->startOfMonth();
        
        foreach ($employes as $employe) {
            // Generate between 4-6 pay sheets per employee (some months might be missing)
            $numFiches = rand(4, 6);
            $generatedMonths = [];
            
            for ($i = 0; $i < $numFiches; $i++) {
                // Generate a random month within the last 6 months
                do {
                    $monthOffset = rand(0, 5);
                    $ficheDate = $startDate->copy()->addMonths($monthOffset);
                    $monthKey = $ficheDate->format('Y-m');
                } while (in_array($monthKey, $generatedMonths));
                
                $generatedMonths[] = $monthKey;
                
                // Set the date to the last day of the month for payroll
                $ficheDate = $ficheDate->endOfMonth();
                
                // Ensure we don't create pay sheets for future months
                if ($ficheDate > now()) {
                    $ficheDate = now()->subMonth()->endOfMonth();
                }
                
                Fiche::create([
                    'date' => $ficheDate,
                    'total' => 0, // Will be calculated after rubrics are attached
                    'employe_id' => $employe->id,
                ]);
            }
        }
        
        // Create some specific test pay sheets
        $testEmployeeIds = Employe::take(5)->pluck('id');
        
        foreach ($testEmployeeIds as $employeId) {
            // Current month pay sheet
            Fiche::create([
                'date' => now()->endOfMonth(),
                'total' => 0,
                'employe_id' => $employeId,
            ]);
            
            // Previous month pay sheet
            Fiche::create([
                'date' => now()->subMonth()->endOfMonth(),
                'total' => 0,
                'employe_id' => $employeId,
            ]);
        }
    }
}
