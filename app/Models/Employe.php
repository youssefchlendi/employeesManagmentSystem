<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    protected $table="employes";
    protected $primaryKey="id";
    protected $fillable=['nom','prenom','cin','mat_cnss','fonction','entreprise_id'];
}
