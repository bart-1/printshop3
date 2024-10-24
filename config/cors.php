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

 'paths'                    => ['api/*', 'sanctum/csrf-cookie'],

 'allowed_methods'          => ['GET', 'POST', 'OPTIONS'],

 'allowed_origins'          => ['https://dziwnykot.pl'],

 'allowed_origins_patterns' => ['/^https?:\/\/(www\.)?dziwnykot\.pl\/[a-z0-9\/-]+$/'],

 'allowed_headers'          => ['*'],

 'exposed_headers'          => ['X-Inertia'],

 'max_age'                  => 0,

 'supports_credentials'     => true,

];
