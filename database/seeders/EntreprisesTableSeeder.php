<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Entreprise;

class EntreprisesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('fr_FR');
        
        // Predefined realistic company data
        $companies = [
            [
                'titre' => 'TechnoSoft Solutions SARL',
                'matricule_fiscale' => 'MF1234567890',
                'registre_commerce' => 'RC2024001',
                'adresse' => '123 Avenue de la Technologie, Lac 2',
                'ville' => 'Tunis',
                'activités' => 'Développement de logiciels et solutions informatiques'
            ],
            [
                'titre' => 'Manufacture Textile du Nord',
                'matricule_fiscale' => 'MF2345678901',
                'registre_commerce' => 'RC2024002',
                'adresse' => '45 Zone Industrielle Bizerte',
                'ville' => 'Bizerte',
                'activités' => 'Production textile et confection'
            ],
            [
                'titre' => 'Banque Populaire Tunisienne',
                'matricule_fiscale' => 'MF3456789012',
                'registre_commerce' => 'RC2024003',
                'adresse' => '78 Avenue Habib Bourguiba',
                'ville' => 'Tunis',
                'activités' => 'Services bancaires et financiers'
            ],
            [
                'titre' => 'Construction & Bâtiment SA',
                'matricule_fiscale' => 'MF4567890123',
                'registre_commerce' => 'RC2024004',
                'adresse' => '156 Route de Sfax Km 12',
                'ville' => 'Sousse',
                'activités' => 'Travaux de construction et bâtiment'
            ],
            [
                'titre' => 'Agro-Alimentaire Premium',
                'matricule_fiscale' => 'MF5678901234',
                'registre_commerce' => 'RC2024005',
                'adresse' => '234 Zone Agricole Kairouan',
                'ville' => 'Kairouan',
                'activités' => 'Transformation et distribution agro-alimentaire'
            ],
            [
                'titre' => 'Clinique Méditerranée',
                'matricule_fiscale' => 'MF6789012345',
                'registre_commerce' => 'RC2024006',
                'adresse' => '67 Avenue de la Santé, Menzah',
                'ville' => 'Tunis',
                'activités' => 'Services médicaux et hospitaliers'
            ],
            [
                'titre' => 'Transport & Logistique Express',
                'matricule_fiscale' => 'MF7890123456',
                'registre_commerce' => 'RC2024007',
                'adresse' => '89 Route Nationale GP1',
                'ville' => 'Sfax',
                'activités' => 'Transport de marchandises et logistique'
            ],
            [
                'titre' => 'Éducation Supérieure Privée',
                'matricule_fiscale' => 'MF8901234567',
                'registre_commerce' => 'RC2024008',
                'adresse' => '12 Rue de l\'Université, Centre Ville',
                'ville' => 'Monastir',
                'activités' => 'Enseignement supérieur et formation professionnelle'
            ],
            [
                'titre' => 'Hôtel Résidence de Luxe',
                'matricule_fiscale' => 'MF9012345678',
                'registre_commerce' => 'RC2024009',
                'adresse' => '345 Boulevard du Front de Mer',
                'ville' => 'Hammamet',
                'activités' => 'Hôtellerie et services touristiques'
            ],
            [
                'titre' => 'Pharmacie Centrale Distribution',
                'matricule_fiscale' => 'MF0123456789',
                'registre_commerce' => 'RC2024010',
                'adresse' => '98 Avenue Charles de Gaulle',
                'ville' => 'Ariana',
                'activités' => 'Distribution pharmaceutique et parapharmaceutique'
            ]
        ];

        // Insert predefined companies
        foreach ($companies as $company) {
            Entreprise::create($company);
        }

        // Generate additional random companies
        for ($i = 0; $i < 5; $i++) {
            $activities = [
                'Conseil en management et organisation',
                'Services informatiques et développement web',
                'Import-export de produits industriels',
                'Maintenance et réparation automobile',
                'Production et distribution d\'énergie renouvelable',
                'Services comptables et audit financier',
                'Marketing digital et communication',
                'Vente au détail et grande distribution',
                'Services de sécurité et gardiennage',
                'Nettoyage industriel et entretien',
                'Formation professionnelle continue',
                'Services juridiques et contentieux',
                'Immobilier et promotion immobilière',
                'Agriculture biologique et export',
                'Télécommunications et réseaux'
            ];

            $cities = ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Bizerte', 'Gabès', 'Ariana', 'Ben Arous', 'Nabeul', 'Monastir', 'Mahdia', 'Kasserine'];
            
            do {
                $matriculeFiscale = 'MF' . $faker->unique()->numerify('##########');
                $registreCommerce = 'RC' . date('Y') . str_pad($i + 11, 3, '0', STR_PAD_LEFT);
            } while (
                Entreprise::where('matricule_fiscale', $matriculeFiscale)->exists() ||
                Entreprise::where('registre_commerce', $registreCommerce)->exists()
            );

            Entreprise::create([
                'titre' => $faker->company . ' ' . $faker->randomElement(['SARL', 'SA', 'SUARL', 'SNC']),
                'matricule_fiscale' => $matriculeFiscale,
                'registre_commerce' => $registreCommerce,
                'adresse' => $faker->streetAddress . ', ' . $faker->randomElement(['Zone Industrielle', 'Centre Ville', 'Nouvelle Ville']),
                'ville' => $faker->randomElement($cities),
                'activités' => $faker->randomElement($activities),
            ]);
        }
    }
}
