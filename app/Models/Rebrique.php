<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rebrique extends Model
{
    protected $table="rebriques";
    protected $primaryKey="id";
    protected $fillable=['titre'];

    public function fiches()
    {
        return $this->belongsToMany(Fiche::class,
        'fiche_rebrique',
        'rebrique_id',
        'fiche_id');
    }
}
