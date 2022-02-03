<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/entreprise')->namespace('App\Http\Controllers')->group(function(){
    Route::post('/add','EntrepriseController@store');

    Route::post('/{entreprise_id?}','EntrepriseController@show');

    Route::put('/{entreprise_id}','EntrepriseController@update');

    Route::delete('/{entreprise_id}','EntrepriseController@Destroy');

});

Route::prefix('/employe')->namespace('App\Http\Controllers')->group(function(){
    Route::post('/add','EmployeController@store');

    Route::post ('/{employe_id?}','EmployeController@show');

    Route::put('/{employe_id}','EmployeController@update');

    Route::delete('/{employe_id}','EmployeController@Destroy');

});
