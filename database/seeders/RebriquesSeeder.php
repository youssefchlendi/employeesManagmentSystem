<?php

namespace Database\Seeders;

use App\Models\Rebrique;
use Illuminate\Database\Seeder;

class RebriquesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Standard Tunisian payroll rubrics
        $rubrics = [
            // Basic Salary Components
            'Salaire de Base',
            'Heures Supplémentaires',
            'Prime d\'Ancienneté',
            'Prime de Rendement',
            'Prime de Responsabilité',
            'Prime de Risque',
            'Prime de Nuit',
            'Prime de Week-end',
            'Prime de Déplacement',
            'Prime de Transport',
            
            // Allowances & Benefits
            'Indemnité de Logement',
            'Indemnité de Restauration',
            'Indemnité de Télécommunication',
            'Indemnité de Voiture',
            'Indemnité Kilométrique',
            'Allocation Familiale',
            'Prime de Mariage',
            'Prime de Naissance',
            'Prime de Scolarité',
            'Prime de Fin d\'Année (13ème mois)',
            'Prime de Vacances (14ème mois)',
            
            // Performance & Incentives
            'Bonus de Performance',
            'Commission sur Ventes',
            'Prime d\'Objectifs',
            'Prime de Production',
            'Prime de Qualité',
            'Intéressement aux Bénéfices',
            'Participation aux Résultats',
            
            // Holiday & Leave Pay
            'Congés Payés',
            'Indemnité de Congé',
            'Jours Fériés Travaillés',
            'Rattrapage Congé',
            
            // Social Security & Deductions (Negative amounts)
            'Cotisation CNSS Employé',
            'Cotisation Retraite Complémentaire',
            'Assurance Maladie',
            'Assurance Groupe',
            'Mutuelle Santé',
            
            // Taxes (Negative amounts)
            'IRPP (Impôt sur le Revenu)',
            'Taxe de Formation Professionnelle',
            'Contribution Sociale de Solidarité',
            
            // Other Deductions (Negative amounts)
            'Avance sur Salaire',
            'Prêt Personnel',
            'Retenue Disciplinaire',
            'Absence Non Justifiée',
            'Retard',
            'Frais Médicaux',
            'Syndicat',
            'Cantine',
            'Parking',
            
            // Reimbursements
            'Remboursement Frais',
            'Note de Frais Validée',
            'Frais de Mission',
            'Remboursement Formation',
            
            // Special Payments
            'Indemnité de Licenciement',
            'Préavis',
            'Gratification de Stage',
            'Rappel de Salaire',
            'Régularisation',
            'Provision pour Congés'
        ];

        foreach ($rubrics as $rubric) {
            Rebrique::create([
                'titre' => $rubric
            ]);
        }
    }
}
