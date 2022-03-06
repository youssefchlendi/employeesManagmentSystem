<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use App\Models\Employe;
use App\Models\Entreprise;
use App\Models\Fiche;
use NumberFormatter;

class PdfController extends Controller
{
    public function generatePDF($id,$fid)

    {
        $fiches = Fiche::with('employes')->with('rebriques')->where('employe_id','=',$id)->where('id','=',$fid)->get();
        if($fiches){
        $rebriques =array();
        $employe = array();
        $entreprise_id=0;
        $date =0;
        $total = 0;
        foreach($fiches as $fiche){$total=$fiche->total;$date = $fiche->date;foreach($fiche->rebriques as $rebrique ){array_push($rebriques,['titre'=>$rebrique->titre,'montant'=>$rebrique->pivot->montant]);}};
        foreach($fiches as $fiche){$employe=["nom"=>$fiche->employes->nom,"prenom"=>$fiche->employes->prenom,"cin"=>$fiche->employes->cin,"mat_cnss"=>$fiche->employes->mat_cnss,"fonction"=>$fiche->employes->fonction];$entreprise_id=$fiche->employes->entreprise_id;};
        $entreprise = Entreprise::find($entreprise_id);
        $entreprise = ["titre"=>$entreprise->titre, "matricule_fiscale"=>$entreprise->matricule_fiscale, "registre_commerce"=>$entreprise->registre_commerce, "adresse"=>$entreprise->adresse, "ville"=>$entreprise->ville];

        $f = new NumberFormatter("fr", NumberFormatter::SPELLOUT);
        $a = $total*1000;
        $c = $a % 1000;          // cent remainder
        $d = ($a - $c) / 1000;   // dollars
        $df = $f->format($d);
        $cf = $f->format($c);
        $totalLit = $df . " dinars et " . $cf . " millimes";
        $totalLit = strtoupper($totalLit);
        setlocale(LC_TIME, "fr_FR.UTF8");
        $date = \DateTime::createFromFormat("Y-m-d", $date);
        $Year = $date->format("Y").'';
        $month = $this->dateToFrench($date->format("F")).'';
        $data = [
            'date' => $month.', '.$Year,

            'entreprise' => $entreprise,

            'employe' => $employe,

            'rebriques' => $rebriques,

            'total' => $total,

            'totalLit' => $totalLit,

        ];


        $pdf = PDF::loadView('myPDF', $data);
        file_put_contents('fichedepaies/f'.$month.$Year.$employe['nom'].$employe['prenom'].$employe['cin'].'.pdf', $pdf->download('itsolutionstuff.pdf'));
        return $pdf->download('itsolutionstuff.pdf');

    }

    }

    public function dateToFrench($month)
{
    $english_months = array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    $french_months = array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    return str_replace($english_months, $french_months, $month );
}
}
