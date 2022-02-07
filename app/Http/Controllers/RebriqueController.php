<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rebrique;
class RebriqueController extends Controller
{
    public function show($id=null){
        if(!isset($id)){
            $Rebriques = Rebrique::orderBy('updated_at','DESC')
            ->get();
            if (!empty($Rebriques))
                return response()->json(
                    $Rebriques
                , 200);
            else
                return response()->json([
                    "No Rebrique found"
                ], 404);
        }else{
            $Rebrique = Rebrique::find($id);

            if (!empty($Rebrique))
                return response()->json([
                    $Rebrique
                ], 200);
            else
                return response()->json([
                    "No Rebrique found"
                ], 404);
        }

    }


    public function store(Request $request){
        $titre = $request->input('titre');
        $data = array(
            "titre"=> $titre,
        );
        $Rebrique = Rebrique::create($data);
        if ($Rebrique) {
            return response()->json([
                'data' => [
                    'message' => 'Success',
                    'id' => $Rebrique->id,
                    'attributes' => $Rebrique
                ]
            ], 201);
        } else {
            return response()->json([
                'message' => 'Fail'
            ], 400);
        }
    }
    public function update(Request $request, $id){
        $Rebrique = Rebrique::find($id);
        if ($Rebrique){
            $Rebrique->titre = $request->input('titre')?$request->input('titre'):$Rebrique->titre;
            $Rebrique->save();
            return response()->json([
                    'message' => 'Update Success',
                    'id' => $Rebrique->id,
                    'attributes' => $Rebrique
            ], 201);
        }else{
            return response()->json([
                "No Rebrique found"
            ], 404);
        }
    }
    public function Destroy($id){
        $Rebrique = Rebrique::find($id);
        if ($Rebrique) {
            $Rebrique->delete();
            return response()->json([
            ], 204);
        } else {
            return response()->json([
                'type' => 'Rebrique',
                'message' => 'Not Found'
            ], 404);
        }
    }
}
