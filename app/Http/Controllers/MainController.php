<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Entreprise;
use App\Models\Employe;
use Illuminate\Support\Facades\Hash;

class MainController extends Controller
{
    public function login(){
        return view('auth.login');
    }
    public function register(){
        return view('auth.register');
    }
    public function save(Request $request){
        // Validate request
        $request->validate([
            "name" =>"required",
            "email" =>"required|email|unique:users",
            "password" =>"required|min:8|max:255",
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $save = $user->save();

        if ($save){
            return back()->with('success','Registered succefuly');
        }else{
            return back()->with('fail','something went wrong');
        }
    }

    public function logout(){
        if (session()->has('LoggedUser')){
            session()->pull('LoggedUser');
            return redirect('/login');
        }
        if (session()->has('id')){
            session()->pull('id');
            return redirect('/login');
        }

    }

    public function check(Request $request){
        // Validate request
        // return $request->EmployeEntreprise;
        if ($request->EmployeEntreprise=='entreprise'){
            $request->validate([
                "current" =>"required",
            ]);
            // echo $request->current;
             $entrepriseInfo = Entreprise::where('matricule_fiscale','=',$request->current)->first();
            //  print_r($entrepriseInfo);
            if (!$entrepriseInfo){
                return back()->with('fail','Matricule fiscale non existant');
            }else{
                $request->session()->put('id',$entrepriseInfo->id);
                return redirect('entrepriseDetails');
            }

        }
        if ($request->EmployeEntreprise=='employe'){
            $request->validate([
                "current" =>"required",
            ]);
            // echo $request->current;
             $employeInfo = Employe::where('cin','=',$request->current)->first();
            //  print_r($employeInfo);
            if (!$employeInfo){
                return back()->with('fail','CIN non existant');
            }else{
                $request->session()->put('id',$employeInfo->id);
                return redirect('employeDetails');
            }

        }
        if ($request->EmployeEntreprise=='admin')  {
            $request->validate([
                "current" =>"required|email",
                "password" =>"required|min:8|max:255",
            ]);
            $userInfo = User::where('email','=',$request->current)->first();
            if (!$userInfo){
                return back()->with('fail','We don"t recognize your email');
            }else{
                if(Hash::check($request->password,$userInfo->password)){
                    if (session()->has('id')){
                        session()->pull('id');
                    }
                    $request->session()->put('LoggedUser',$userInfo->id);
                    return redirect('/');
                }else{
                    return back()->with('fail','Password incorrect');
                }
            }
        }
    }
}
