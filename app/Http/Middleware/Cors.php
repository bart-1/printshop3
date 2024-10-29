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
//    'Access-Control-Allow-Origin'      => ['https://dziwnykot.pl/calc-test', 'https://dziwnykot.pl', 'https://wwww.dziwnykot.pl/calc-test', 'https://www.dziwnykot.pl'],
   'Access-Control-Allow-Origin'      => ['*'],
   'Access-Control-Allow-Methods'     => ['*'],
   'Access-Control-Allow-Credentials' => 'true',
   'Access-Control-Max-Age'           => '0',
   'Access-Control-Expose-Headers'    => 'X-Inertia',
//    'Access-Control-Allow-Headers'     => ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Inertia', 'X-Inertia-Version'],
   'Access-Control-Allow-Headers'     => ['*'],
//    'Accept'                           => ['application/json', 'text/javascript'],
   'Accept'                           => ['*'],
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
