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
   'Access-Control-Allow-Origin'      => ['https://dziwnykot.pl/calc-test', 'https://dziwnykot.pl', 'https://wwww.dziwnykot.pl/calc-test', 'https://www.dziwnykot.pl'],
   'Access-Control-Allow-Methods'     => ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'HEAD'],
   'Access-Control-Allow-Credentials' => 'false',
   'Access-Control-Max-Age'           => '0',
   'Access-Control-Expose-Headers'    => 'X-Inertia',
   'Access-Control-Allow-Headers'     => ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Token-Auth', 'X-Inertia', 'X-Inertia-Version', 'Accept', 'Session'],
   'Accept'                           => ['application/json', 'text/javascript', 'text/html', 'application/xhtml+xml'],
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
