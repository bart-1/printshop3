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
   'Access-Control-Allow-Origin'      => 'https://www.dziwnykot.pl, https://www.dziwnykot.pl/calc-test, https://dziwnykot.pl',
   'Access-Control-Allow-Methods'     => 'POST, GET, OPTIONS, PUT, DELETE',
   'Access-Control-Allow-Credentials' => 'true',
   'Access-Control-Max-Age'           => '0',
   'Access-Control-Allow-Headers'     => 'Content-Type, Authorization, X-Requested-With, X-Inertia, X-Inertia-Version',
   'Accept'                           => 'application/json, text/javascript',
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
