<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    protected $table="employes";
    protected $primaryKey="id";
    protected $fillable=['nom','prenom','cin','mat_cnss','fonction','entreprise_id'];
    public function fiches(){
        return $this->hasMany(Fiche::class,'employe_id');
    }
    public function entreprise(){
        return $this->belongsTo(Entreprise::class,'entreprise_id');
    }

}
