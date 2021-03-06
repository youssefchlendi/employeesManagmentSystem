<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EntrepriseRequest;
use App\Models\Entreprise;
class EntrepriseController extends Controller
{
    public function show(Request $request,$id=null){
        if(!isset($id)){
            $search = $request->input('search');
            $entreprises = Entreprise::with('employes')
            ->where('titre','like','%'.$search.'%')
            ->orderBy('updated_at','DESC')
            ->paginate('5');
            if (!empty($entreprises))
                return response()->json(
                    $entreprises
                , 200);
            else
                return response()->json([
                    "No Entreprise found"
                ], 404);
        }else{
            $entreprise = Entreprise::with('employes')->with('employes.fiches')->find($id);

            if (!empty($entreprise))
                return response()->json(
                    $entreprise
            , 200);
            else
                return response()->json([
                    "No Entreprise found"
                ], 404);
        }

    }

    public function showAll(){
        $entreprises = Entreprise::with('employes')->orderBy('updated_at','DESC')->get();
        if(!empty($entreprises)){
            return response()->json(['data'=>$entreprises],200);
        }else{
            return response()->json(["No entreprise found"],404);
        }
    }

    public function store(EntrepriseRequest $request){
        // 'email' => required|email|exists:users,email|max:50',
        // 'password' => 'required|min:6'

        $titre = $request->input('titre');
        $matriculeFiscale = $request->input('matricule_fiscale');
        $registreCommerce = $request->input('registre_commerce');
        $adresse = $request->input('adresse');
        $ville = $request->input('ville');
        $activités = $request->input('activités');
        $data = array(
            "titre"=> $titre,
            "matricule_fiscale"=> $matriculeFiscale,
            "registre_commerce"=> $registreCommerce,
            "adresse"=> $adresse,
            "ville"=> $ville,
            "activités"=> $activités
        );

        $entreprise = Entreprise::create($data);
        if ($entreprise) {
            return response()->json([
                'data' => [
                    'message' => 'Success',
                    'id' => $entreprise->id,
                    'attributes' => $entreprise
                ]
            ], 201);
        } else {
            return response()->json([
                'message' => 'Fail'
            ], 400);
        }
        return "Success";
    }

    public function update(Request $request, $id){
        $entreprise = Entreprise::find($id);
        if ($entreprise){
            $entreprise->titre = $request->input('titre')?$request->input('titre'):$entreprise->titre;
            $entreprise->matricule_fiscale = $request->input('matricule_fiscale')?$request->input('matricule_fiscale'):$entreprise->matricule_fiscale;
            $entreprise->registre_commerce = $request->input('registre_commerce')?$request->input('registre_commerce'):$entreprise->registre_commerce;
            $entreprise->adresse = $request->input('adresse')?$request->input('adresse'):$entreprise->adresse;
            $entreprise->ville = $request->input('ville')?$request->input('ville'):$entreprise->ville;
            $entreprise->activités = $request->input('activités')?$request->input('activités'):$entreprise->activités;
            $entreprise->save();
            return response()->json([
                    'message' => 'Update Success',
                    'id' => $entreprise->id,
                    'attributes' => $entreprise
            ], 201);
        }else{
            return response()->json([
                "No Entreprise found"
            ], 404);
        }
    }
    public function Destroy($id){
        $Entreprise = Entreprise::find($id);
        if ($Entreprise) {
            $Entreprise->delete();
            return response()->json([
            ], 204);
        } else {
            return response()->json([
                'type' => 'Entreprise',
                'message' => 'Not Found'
            ], 404);
        }
    }
    public function getSession(Request $request){
        // echo $request->session()->get('id');
        $entreprise = Entreprise::where('id','=',session()->get('id'))->first();
        return response()->json($entreprise,200);
    }
}
