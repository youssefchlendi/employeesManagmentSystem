<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fiche;
use App\Models\RebriqueFiche;

class FicheController extends Controller
{
    public function show(Request $request,$id=null){
        if(!isset($id)){
            $fiches = Fiche::with('employes')->with('rebriques')
            ->orderBy('updated_at','DESC')
            ->paginate('5');
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
    public function deleteRebsrel($fiche_id){
        RebriqueFiche::where('fiche_id','=',$fiche_id)->delete();
        return response()->json([
            'type' => 'rebriquerel',
            'message' => 'rebriquerel removed'
        ], 204);

    }
    public function linkRebrique($fiche_id,$rebrique_id)
    {

        $Fiche = Fiche::find($fiche_id);
        if ($Fiche->rebriques()->where('rebrique_id','=',$rebrique_id)->count()!=0){
            $Fiche->rebriques()->detach($rebrique_id);
            return response()->json([
                'type' => 'rebrique',
                'message' => 'rebrique attached',
                'attached' => false
            ], 201);

        }else {

            $Fiche->rebriques()->attach($rebrique_id);
            return response()->json([
                'type' => 'rebrique',
                'message' => 'rebrique attached',
                'attached' => true
            ], 201  );
        }
    }
    public function setMontant(Request $request,$fiche_id,$rebrique_id){
        $fiche = Fiche::find($fiche_id);
        $fiche->rebriques()->updateExistingPivot($rebrique_id,['montant'=>$request->input('montant')]);
        $fiche->save();
        return response()->json([
            "message"=> "montant set"
        ], 200);
    }
    public function getMontant($fiche_id,$rebrique_id){
        $fiche = Fiche::find($fiche_id);
        $f = $fiche->rebriques()->where('rebrique_id','=',$rebrique_id)->first();
        if (!empty($f))
        return response()->json([
            $f
        ], 200);
    }
    public function calcTotal($id=null){
        if ($id!=null){
            $fiches = Fiche::find($id)->with('rebriques')->get();
            foreach ($fiches as $fiche){
                    $sum=0;
                    foreach ($fiche->rebriques as $rebrique){
                        $sum+=$rebrique->pivot->montant;
                    }
                    $fiche->total=$sum;;
                    $fiche->save();
            }
        }else{
            $fiches = Fiche::with('rebriques')->get();
            foreach ($fiches as $fiche){
            $sum=0;
            foreach ($fiche->rebriques as $rebrique){
                $sum+=$rebrique->pivot->montant;
            }
            $fiche->total=$sum;;
            $fiche->save();
            }
        }
    }
}
