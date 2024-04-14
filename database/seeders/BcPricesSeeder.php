<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BcPricesSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('bc_prices')->insert([
   'tresholds' => 100,
   'one_side'        => 59,
   'both_side'        => 79,
   'none' => 0,
   'mat'       => 30,
   'gloss'     => 30,
   'mix'       => 45,
   'soft'      => 50]);
  DB::table('bc_prices')->insert([
   'tresholds' => 200,
   'one_side'        => 98,
   'both_side'        => 138,
   'none' => 0,
   'mat'       => 44,
   'gloss'     => 44,
   'mix'       => 55,
   'soft'      => 86]);
  DB::table('bc_prices')->insert([
   'tresholds' => 300,
   'one_side'        => 135,
   'both_side'        => 192,
   'none' => 0,
   'mat'       => 53,
   'gloss'     => 53,
   'mix'       => 67,
   'soft'      => 122]);
  DB::table('bc_prices')->insert([
   'tresholds' => 400,
   'one_side'        => 164,
   'both_side'        => 236,
   'none' => 0,
   'mat'       => 70,
   'gloss'     => 70,
   'mix'       => 89,
   'soft'      => 158]);
  DB::table('bc_prices')->insert([
   'tresholds' => 500,
   'one_side'        => 185,
   'both_side'        => 270,
   'none' => 0,
   'mat'       => 85,
   'gloss'     => 85,
   'mix'       => 109,
   'soft'      => 194]);
  DB::table('bc_prices')->insert([
   'tresholds' => 600,
   'one_side'        => 204,
   'both_side'        => 294,
   'none' => 0,
   'mat'       => 93,
   'gloss'     => 93,
   'mix'       => 119,
   'soft'      => 205]);
  DB::table('bc_prices')->insert([
   'tresholds' => 700,
   'one_side'        => 231,
   'both_side'        => 328,
   'none' => 0,
   'mat'       => 102,
   'gloss'     => 102,
   'mix'       => 131,
   'soft'      => 215]);
  DB::table('bc_prices')->insert([
   'tresholds' => 800,
   'one_side'        => 264,
   'both_side'        => 360,
   'none' => 0,
   'mat'       => 106,
   'gloss'     => 106,
   'mix'       => 136,
   'soft'      => 238]);
  DB::table('bc_prices')->insert([
   'tresholds' => 900,
   'one_side'        => 288,
   'both_side'        => 387,
   'none' => 0,
   'mat'       => 109,
   'gloss'     => 109,
   'mix'       => 140,
   'soft'      => 271]);
  DB::table('bc_prices')->insert([
   'tresholds' => 1000,
   'one_side'        => 320,
   'both_side'        => 420,
   'none' => 0,
   'mat'       => 111,
   'gloss'     => 111,
   'mix'       => 143,
   'soft'      => 299]);
 }
}
