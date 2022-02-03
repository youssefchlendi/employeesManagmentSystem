<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRebriqueFichesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fiche_rebrique', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fiche_id');
            $table->foreignId('rebrique_id');

            $table->foreign('fiche_id')->references('id')->on('fiches')
                ->onDelete('cascade');
            $table->foreign('rebrique_id')->references('id')->on('rebriques')
                ->onDelete('cascade');
            $table->float('montant',10,2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rebrique_fiches');
    }
}
