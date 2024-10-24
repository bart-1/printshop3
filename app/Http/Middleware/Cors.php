<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{

//  public function handle($request, Closure $next)
//  {
//   return $next($request)
//    ->header('Access-Control-Allow-Origin', '*')
//    ->header('Access-Control-Allow-Methods', '*')
//    ->header('Access-Control-Allow-Credentials', true)
//    ->header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,X-Token-Auth,Authorization')
//    ->header('Accept', 'application/json');
//  }
 public function handle($request, Closure $next)
 {
  $headers = [
   'Access-Control-Allow-Origin'  => 'https://dziwnykot.pl',
   'Access-Control-Allow-Methods' => '*',

  ];

  if ($request->isMethod('OPTIONS')) {
   return response()->json('{"method":"OPTIONS"}', 200, $headers);
  }

  $response = $next($request);
  foreach ($headers as $key => $value) {
   $response->header($key, $value);
  }

  return $response;
 }

}
