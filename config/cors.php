<?php

return [

 /*
 |--------------------------------------------------------------------------
 | Cross-Origin Resource Sharing (CORS) Configuration
 |--------------------------------------------------------------------------
 |
 | Here you may configure your settings for cross-origin resource sharing
 | or "CORS". This determines what cross-origin operations may execute
 | in web browsers. You are free to adjust these settings as needed.
 |
 | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 |
  */

 'paths'                    => ['api/*', 'sanctum/csrf-cookie', '*', '*/*', 'public/*'],

 'allowed_methods'          => ['GET', 'POST', 'DELETE', 'OPTIONS'],

 'allowed_origins'          => ['https://dziwnykot.pl/calc-test', 'https://wwww.dziwnykot.pl/calc-test', 'https://www.dziwnykot.pl', 'https://dziwnykot.pl'],

 'allowed_origins_patterns' => [],

 'allowed_headers'          => ['*'],

 'exposed_headers'          => ['x-inertia'],

 'max_age'                  => 0,

 'supports_credentials'     => false,

];
