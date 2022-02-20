<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;
class apiCheck
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
        if(!$request->header('auth'))
        {
                $response = [
                    'message' => 'Unauthorized',
                ];

                return response()->json($response, 401);
        }
        else
        {
            $id = $request->header('auth');
            $user = User::find($id);
            if($user){
                return $next($request);
            }else{
                $response = [
                    'message' => 'Unauthorized',
                ];

                return response()->json($response, 401);
            }

        }

        return $next($request);
    }
}
