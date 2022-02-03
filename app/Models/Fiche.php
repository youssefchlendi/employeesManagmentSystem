<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fiche extends Model
{
    protected $table="fiches";
    protected $primaryKey="id";
    protected $fillable=['date','total','employe_id'];
}
