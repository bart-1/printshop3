<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegisteredUserSeeder extends Seeder
{
 /**
  * Run the database seeds.
  */
 public function run(): void
 {
  DB::table('users')->insert([
   'name'                   => "bfagencja",
   'email'                  => "bf@test.pl",
   'password'               => Hash::make('test'),
   'discount'               => 10,
   'discount_products_list' => "{list: [
'a4_black_print_prices',
'a4_color_print_prices',
'a4_color_gray_print_prices',
'a4_color_plot_cut_price',
'bc40_print_prices',
'bc44_print_prices',
'bc_lamin_prices',
'bc_lamin_mix_prices',
'bc_lamin_st_prices',
'lf_print_min_price',
'lf_paper_print_prices',
'lf_foil_print_prices',
'lf_foil_ed_print_prices',
'lf_block_print_prices',
'lf_canvas_print_prices',
'lf_plot_cut__min_price',
'lf_plot_cut_price',
'lf_non_print_cut_price',
'lf_transfer_foil_price',
'roll_lamin_min_price',
'lf_roll_lamin_price',
'a4_roll_lamin_prices',
'a4_roll_lamin_st_prices',
'fold_prices',
'staple_prices',
'staple_binder_prices',
'cut_price',
'hole_prices',
'rounded_corners_prices',
'binding_metal_prices',
'binding_plastic_prices',

}",

  ]);

  DB::table('users')->insert(['name' => "bart",
   'email'                            => "studio@dziwnykot.pl",
   'password'                         => Hash::make('testtest'),
  ]);

 }
}
