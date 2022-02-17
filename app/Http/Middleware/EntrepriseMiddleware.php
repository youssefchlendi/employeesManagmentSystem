<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EntrepriseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(!session()->has('entreprise') && ($request->path() !='login' && $request->path() !='register' )){
            return redirect('/login')->with('fail','Vous devez être connecté en tant qu"entreprise');
        }

        if(session()->has('entreprise') && ($request->path() == 'login' || $request->path() == 'register' ) ){
            return back();
        }
        return $next($request)->header('Cache-Control','no-cache, no-store, max-age=0, must-revalidate')
        ->header('Pragma','no-cache')
        ->header('Expires','Sat 01 Jan 1990 00:00:00 GMT');
    }
}
