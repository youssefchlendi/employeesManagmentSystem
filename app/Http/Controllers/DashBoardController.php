<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entreprise;
use App\Models\Employe;
use App\Models\Fiche;
use Illuminate\Support\Facades\DB;
class DashBoardController extends Controller
{
    public function all(){
        //total entreprise
        $totalEntreprise = count(Entreprise::all());
        //total employs
        $totalEmploye = count(Employe::all());
        //total fiches
        $totalFiche = count(Fiche::all());
        $entrepriseEmployeCount = Entreprise::withCount('employes')->having('employes_count','<>',0)->get();
        //Employe par entrepris [titre][count]
        $finalCount=array();
        $finalEntName=array();
        $finaleEntCount=array();
        // echo 'Total Entreprise: '.$totalEntreprise.' Employee: '.$totalEmploye.' total fiche'.$totalFiche.' Total employe par entreprise ';
        foreach($entrepriseEmployeCount as $entreprise){
            array_push($finalEntName,$entreprise['titre']);
            array_push($finaleEntCount,$entreprise['employes_count']);
        }
        $finalCount=['labels'=> $finalEntName,'data'=>$finaleEntCount];
        // array_push($finalCount,['titre'=>$entreprise['titre'],'count'=>$entreprise['employes_count']]);
        // print_r($finalCount);
        // echo '<br>';
        $fichesByDate = Fiche::orderBy('created_at')->get()->groupBy(function($item) {
            return $item->created_at->format('Y-m-d');
       });
        //frequence de génération des fiches [date][count]
       $fichesDateCount=array();
       $fichesDate=array();
       $fichesCount=array();
        foreach($fichesByDate as $key => $post){
            array_push($fichesDate,$key);
            array_push($fichesCount,$post->count());
        };
        $fichesDateCount=['labels'=> $fichesDate,'data'=>$fichesCount];
        // print_r($fichesDateCount);
        // salaire moyen par entreprise

        // Salaire moyenne par entreprise
        $employes = DB::table('employes')
                        ->select(DB::raw('avg(total) as moyenne,titre'))
                        ->join('fiches','fiches.employe_id','=','employes.id')
                        ->join('entreprises','entreprises.id','=','employes.entreprise_id')
                        ->groupBy('titre')
                        ->having('moyenne','<>',0)
                        ->get();
        $entrepriseName=array();
        $entrepriseAvg=array();
        foreach ($employes as $employe){
            array_push($entrepriseAvg,$employe->moyenne);
            array_push($entrepriseName,$employe->titre);

        }
        $employes=['labels'=> $entrepriseName,'data'=>$entrepriseAvg];

        // print_r($employes);
        return response()->json(
            ['totalEntreprise'=>$totalEntreprise,
            'totalEmploye'=>$totalEmploye,
            'totalFiche'=>$totalFiche,
            'employeParEntreprise'=>$finalCount,
            'frequenceFiches'=>$fichesDateCount,
            'entrepriseMoySalaire'=>$employes
            ]
            , 200);
    }
}
