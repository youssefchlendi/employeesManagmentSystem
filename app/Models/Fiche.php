<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fiche extends Model
{
    protected $table="fiches";
    protected $primaryKey="id";
    protected $fillable=['date','total','employe_id'];
    public function employes(){
        return $this->belongsTo(Employe::class,'employe_id');
    }

    public function rebriques()
    {
        return $this->belongsToMany(Rebrique::class,
        'fiche_rebrique',
        'fiche_id',
        'rebrique_id')
        ->withPivot(['montant']);
    }


}
