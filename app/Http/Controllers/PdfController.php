<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use App\Models\Employe;
use App\Models\Entreprise;
use App\Models\Fiche;
class PdfController extends Controller
{
    public function generatePDF($id,$fid)

    {
        $fiches = Fiche::with('employes')->with('rebriques')->where('employe_id','=',$id)->where('id','=',$fid)->get();
        if($fiches){
        // print_r($fiches);
        $rebriques =array();
        $employe = array();
        $entreprise_id=0;
        $date =0;
        $total = 0;
        foreach($fiches as $fiche){$total=$fiche->total;$date = $fiche->date;foreach($fiche->rebriques as $rebrique ){array_push($rebriques,['titre'=>$rebrique->titre,'montant'=>$rebrique->pivot->montant]);}};
        // print_r($rebriques);
        foreach($fiches as $fiche){$employe=["nom"=>$fiche->employes->nom,"prenom"=>$fiche->employes->prenom,"cin"=>$fiche->employes->cin,"mat_cnss"=>$fiche->employes->mat_cnss,"fonction"=>$fiche->employes->fonction];$entreprise_id=$fiche->employes->entreprise_id;};
        // print_r($employe);
        // echo '<br>'.$entreprise_id;
        // echo($entreprise_id);
        $entreprise = Entreprise::find($entreprise_id);
        $entreprise = ["titre"=>$entreprise->titre, "matricule_fiscale"=>$entreprise->matricule_fiscale, "registre_commerce"=>$entreprise->registre_commerce, "adresse"=>$entreprise->adresse, "ville"=>$entreprise->ville];
        // print_r($entreprise);
        // echo $date;
        // $f = new \NumberFormatter("en", \NumberFormatter::SPELLOUT);

        $totalLit =$this->numberTowords($total);
        setlocale(LC_TIME, "fr_FR.UTF8");
        $date = \DateTime::createFromFormat("Y-m-d", $date);
        $Year = $date->format("Y").'';
        $month = $this->dateToFrench($date->format("F")).'';
        // echo $month.','.$Year;
        $data = [
            'date' => $month.', '.$Year,

            'entreprise' => $entreprise,

            'employe' => $employe,

            'rebriques' => $rebriques,

            'total' => $total,

            'totalLit' => $totalLit,

        ];
        // echo "<pre>";print_r($data);echo"</pre>";


        $pdf = PDF::loadView('myPDF', $data);
        // return view('myPDFC')->with('data', $data);

        // file_put_contents('fichedepaies/f'.$month.$Year.$employe['nom'].$employe['prenom'].$employe['cin'].'.pdf', $pdf->download('itsolutionstuff.pdf'));
        return $pdf->download('itsolutionstuff.pdf');

    }

    }
    public function numberTowords($num)
    {

    $ones = array(
    0 =>"ZERO",
    1 => "UN",
    2 => "DEUX",
    3 => "TROIS",
    4 => "QUATRE",
    5 => "CINQUE",
    6 => "SIX",
    7 => "SEPT",
    8 => "HUIT",
    9 => "NEUF",
    10 => "DIX",
    11 => "ONZE",
    12 => "DOUZE",
    13 => "TRAISE",
    14 => "QUATORZE",
    15 => "QUINZE",
    16 => "SEIZE",
    17 => "DIX-SEPT",
    18 => "DIX-HUIT",
    19 => "DIX-NEUF",
    "014" => "QUATORZE"
    );
    $tens = array(
    0 => "ZERO",
    1 => "DIX",
    2 => "VINGT",
    3 => "TRENTE",
    4 => "QUARENTE",
    5 => "CINQUENTE",
    6 => "SOIXANTE",
    7 => "SOIXANTE-DIX",
    8 => "QUATRE-VINGT",
    9 => "QUATRE-VINGT-DIX"
    );
    $hundreds = array(
    "CENT",
    "MILLE",
    "MILLION",
    "BILLION",
    "TRILLION",
    "QUARDRILLION"
    ); /*limit t quadrillion */
    $num = number_format($num,2,".",",");
    $num_arr = explode(".",$num);
    $wholenum = $num_arr[0];
    $decnum = $num_arr[1];
    $whole_arr = array_reverse(explode(",",$wholenum));
    krsort($whole_arr,1);
    $rettxt = "";
    foreach($whole_arr as $key => $i){

    while(substr($i,0,1)=="0")
            $i=substr($i,1,5);
            if($i!=''){
                if($i < 20){
                // echo "getting:".($i);
                $rettxt .= $ones[$i];
                }elseif($i < 100){
                if(substr($i,0,1)!="0")  $rettxt .= $tens[substr($i,0,1)];
                if(substr($i,1,1)!="0") $rettxt .= " ".$ones[substr($i,1,1)];
                }else{
                if(substr($i,0,1)!="0") $rettxt .= $ones[substr($i,0,1)]." ".$hundreds[0];
                if(substr($i,1,1)!="0")$rettxt .= " ".$tens[substr($i,1,1)];
                if(substr($i,2,1)!="0")$rettxt .= " ".$ones[substr($i,2,1)];
                }
            }
    if($key > 0){
    $rettxt .= " ".$hundreds[$key]." ";
    }
    }
    if($decnum > 0){
    $rettxt .= " and ";
    if($decnum < 20){
    $rettxt .= $ones[$decnum];
    }elseif($decnum < 100){
    $rettxt .= $tens[substr($decnum,0,1)];
    $rettxt .= " ".$ones[substr($decnum,1,1)];
    }
    }
    return $rettxt;
    }
    public function dateToFrench($month)
{
    $english_months = array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    $french_months = array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    return str_replace($english_months, $french_months, $month );
}
}
