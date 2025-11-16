<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('🚀 Starting comprehensive database seeding...');
        
        // Disable foreign key checks for MySQL
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        
        $this->command->info('📊 Seeding Users...');
        $this->call(UsersSeeder::class);
        
        $this->command->info('🏢 Seeding Companies (Entreprises)...');
        $this->call(EntreprisesTableSeeder::class);
        
        $this->command->info('👥 Seeding Employees (Employés)...');
        $this->call(EmployesSeeder::class);
        
        $this->command->info('📋 Seeding Pay Rubrics (Rubriques)...');
        $this->call(RebriquesSeeder::class);
        
        $this->command->info('💰 Seeding Pay Sheets (Fiches de Paie)...');
        $this->call(FichesSeeder::class);
        
        $this->command->info('🔗 Creating Pay Sheet - Rubric Relationships...');
        $this->call(FicheRebriquePivotSeeder::class);
        
        // Skip advanced analytics for faster seeding - uncomment if needed
        // $this->command->info('📈 Generating Advanced Payroll Analytics...');
        // $this->call(PayrollAnalyticsSeeder::class);
        
        // $this->command->info('🔄 Processing Employee Lifecycle Events...');
        // $this->call(EmployeeLifecycleSeeder::class);
        
        // Re-enable foreign key checks
        \DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        
        $this->command->info('✅ Database seeding completed successfully!');
        $this->displaySeedingStats();
    }
    
    /**
     * Display seeding statistics
     */
    private function displaySeedingStats()
    {
        $stats = [
            'Users' => \App\Models\User::count(),
            'Companies' => \App\Models\Entreprise::count(),
            'Employees' => \App\Models\Employe::count(),
            'Pay Rubrics' => \App\Models\Rebrique::count(),
            'Pay Sheets' => \App\Models\Fiche::count(),
            'Pay Sheet Items' => \DB::table('fiche_rebrique')->count(),
        ];
        
        $this->command->info('📈 Seeding Statistics:');
        foreach ($stats as $entity => $count) {
            $this->command->info("   • {$entity}: {$count}");
        }
        
        $this->command->info('');
        $this->command->info('🎯 Test Data Available:');
        $this->command->info('   • Admin User: admin@company.com / password');
        $this->command->info('   • HR Manager: hr@company.com / password');
        $this->command->info('   • Payroll Manager: payroll@company.com / password');
        $this->command->info('   • 15 Companies with realistic Tunisian data');
        $this->command->info('   • ~75 Employees across different industries');
        $this->command->info('   • 60+ Pay rubrics including Tunisian specifics');
        $this->command->info('   • 6 months of pay history per employee');
        $this->command->info('   • Realistic salary calculations with deductions');
    }
}
