<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fiche;

class FicheController extends Controller
{
    public function show(Request $request,$id=null){
        if(!isset($id)){
            $fiches = Fiche::with('employes')->paginate('5');
            if (!empty($fiches))
                return response()->json(
                    $fiches
                , 200);
            else
                return response()->json([
                    "No fiche found"
                ], 404);
        }else{
            $fiche = Fiche::find($id);

            if (!empty($fiche))
                return response()->json([
                    $fiche
                ], 200);
            else
                return response()->json([
                    "No fiche found"
                ], 404);
        }

    }
    public function showAll(){
        $fiches = Fiche::all();
        if(!empty($fiches)){
            return response()->json(['data'=>$fiches],200);
        }else{
            return response()->json(["No fiche found"],404);
        }
    }

    public function store(Request $request){
        $date = $request->input('date');
        $employe_id = $request->input('employe_id');
        $data = array(
            "date"=> $date,
            "employe_id"=> $employe_id
        );
        $fiche = Fiche::create($data);
        if ($fiche) {
            return response()->json([
                'data' => [
                    'message' => 'Success',
                    'id' => $fiche->id,
                    'attributes' => $fiche
                ]
            ], 201);
        } else {
            return response()->json([
                'message' => 'Fail'
            ], 400);
        }
    }
    public function update(Request $request, $id){
        $fiche = Fiche::find($id);
        if ($fiche){
            $fiche->date = $request->input('date')?$request->input('date'):$fiche->date;
            $fiche->employe_id = $request->input('employe_id')?$request->input('employe_id'):$fiche->employe_id;
            $fiche->save();
            return response()->json([
                    'message' => 'Update Success',
                    'id' => $fiche->id,
                    'attributes' => $fiche
            ], 201);
        }else{
            return response()->json([
                "No fiche found"
            ], 404);
        }
    }
    public function Destroy($id){
        $fiche = Fiche::find($id);
        if ($fiche) {
            $fiche->delete();
            return response()->json([
            ], 204);
        } else {
            return response()->json([
                'type' => 'fiche',
                'message' => 'Not Found'
            ], 404);
        }
    }
}
