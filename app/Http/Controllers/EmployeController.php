<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
class EmployeController extends Controller
{
    public function show(Request $request,$id=null){
        if(!isset($id)){
            $search = $request->input('search');
            if ($search!=''){
                $employes = Employe::with('fiches')->with('fiches.rebriques')
                ->paginate('5');
                if (!empty($employes))
                    return response()->json(
                        $employes
                    , 200);
                else
                    return response()->json([
                        "No employe found"
                    ], 404);
            }else{
                $employes = Employe::with('fiches')->with('fiches.rebriques')
                ->where('nom','like','%'.$search.'%')
                ->orWhere('prenom','like','%'.$search.'%')
                ->paginate('5');
                if (!empty($employes))
                    return response()->json(
                        $employes
                    , 200);
                else
                    return response()->json([
                        "No employe found"
                    ], 404);
            }
            $employe = Employe::find($id);

            if (!empty($employe))
                return response()->json([
                    $employe
                ], 200);
            else
                return response()->json([
                    "No employe found"
                ], 404);
        }

    }
    public function store(Request $request){
        $nom = $request->input('nom');
        $prenom = $request->input('prenom');
        $cin = $request->input('cin');
        $mat_cnss = $request->input('mat_cnss');
        $fonction = $request->input('fonction');
        $entreprise_id = $request->input('entreprise_id');
        $data = array(
            "nom"=> $nom,
            "prenom"=> $prenom,
            "cin"=> $cin,
            "mat_cnss"=> $mat_cnss,
            "fonction"=> $fonction,
            "entreprise_id"=> $entreprise_id
        );
        $employe = Employe::create($data);
        if ($employe) {
            return response()->json([
                'data' => [
                    'message' => 'Success',
                    'id' => $employe->id,
                    'attributes' => $employe
                ]
            ], 201);
        } else {
            return response()->json([
                'message' => 'Fail'
            ], 400);
        }
    }
    public function getAll(){
        $employe = Employe::all();
        if (!empty($employe))
                return response()->json([
                    "data"=>$employe
                ], 200);
            else
                return response()->json([
                    "No employe found"
        ], 404);
    }
    public function update(Request $request, $id){
        $employe = Employe::find($id);
        if ($employe){
            $employe->nom = $request->input('nom')?$request->input('nom'):$employe->nom;
            $employe->prenom = $request->input('prenom')?$request->input('prenom'):$employe->prenom;
            $employe->cin = $request->input('cin')?$request->input('cin'):$employe->cin;
            $employe->mat_cnss = $request->input('mat_cnss')?$request->input('mat_cnss'):$employe->mat_cnss;
            $employe->fonction = $request->input('fonction')?$request->input('fonction'):$employe->fonction;
            $employe->entreprise_id = $request->input('entreprise_id')?$request->input('entreprise_id'):$employe->entreprise_id;
            $employe->save();
            return response()->json([
                    'message' => 'Update Success',
                    'id' => $employe->id,
                    'attributes' => $employe
            ], 201);
        }else{
            return response()->json([
                "No employe found"
            ], 404);
        }
    }
    public function Destroy($id){
        $employe = Employe::find($id);
        if ($employe) {
            $employe->delete();
            return response()->json([
            ], 204);
        } else {
            return response()->json([
                'type' => 'employe',
                'message' => 'Not Found'
            ], 404);
        }
    }
}

