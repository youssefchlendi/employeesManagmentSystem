<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/generatePdf/{id}/fiche/{fid}',[App\Http\Controllers\PdfController::class, 'generatePDF']);

Route::get('/logout',[MainController::class,'logout'])->name('auth.logout');
Route::post('/save',[MainController::class,'save'])->name('auth.save');
Route::post('/check',[MainController::class,'check'])->name('auth.check');
    Route::group(['middleware'=>['AuthCheck']], function(){
            Route::get('/{any?}', [
        function () {
            return view('vue');
        }
        ])->where('any', '^((?!login|register|save|check|logout).)*$');

        Route::get('/login',[MainController::class,'login'])->name('auth.login');
        Route::get('/register',[MainController::class,'register'])->name('auth.register');
});
