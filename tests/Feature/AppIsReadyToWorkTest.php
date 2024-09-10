<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use function PHPUnit\Framework\assertTrue;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class AppIsReadyToWork extends TestCase
{
 /**
  * A basic test example.
  */
 public function test_the_application_returns_a_successful_response(): void
 {
  $response = $this->get('/welcome');

  $response->assertStatus(200);
 }
 public function test_the_application_returns_a_successful_response_when_redirect(): void
 {
  $response = $this->get('/');

  $response->assertRedirectToRoute('welcome');
 }
 public function test_the_application_has_connected_necessary_tables(): void
 {
  $tables = ['bc_prices',
   'a4_color_print_prices',
   'a4_substrate_prices',
   'bc_prices',
   'bindery_cut_prices',
   'boards_prices',
   'dimensions_with_multipliers',
   'failed_jobs',
   'fold_staple_prices',
   'lamination_prices',
   'large_format_color_print_prices',
   'migrations',
   'min_prices',
   'password_reset_tokens',
   'permission_role',
   'permissions',
   'personal_access_tokens',
   'plotter_cut_prices',
   'price_list',
   'roles',
   'users',
  ];

  foreach ($tables as $table) {
   assertTrue(Schema::hasTable($table));
  }

 }
}
