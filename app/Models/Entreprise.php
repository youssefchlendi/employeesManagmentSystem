<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entreprise extends Model
{
    protected $table="entreprises";
    protected $primaryKey="id";
    protected $fillable = ['titre', 'matricule_fiscale', 'registre_commerce', 'adresse', 'ville' ,'activités'];
    public function employes(){
        return $this->hasMany(Employe::class,'entreprise_id');
    }
}
