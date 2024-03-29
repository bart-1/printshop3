<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
 /**
  * Run the migrations.
  */
 public function up(): void
 {
  Schema::create('price_list', function (Blueprint $table) {
   $table->id();
   $table->timestamps();

   //DTP
   $table->integer('dtp_h_price');

   //A4 printing
   $table->integer('a4_black_print_tresholds');
   $table->integer('a4_black_print_prices');
   $table->integer('a4_color_print_tresholds');
   $table->integer('a4_color_print_prices');
   $table->integer('a4_color_gray_print_prices');
   $table->integer('a4_color_plot_cut_price');
   $table->string('a4_papers', 30);
   $table->integer('a4_paper_prices');

   //color copy
   $table->integer('a4_color_copy_tresholds');
   $table->integer('a4_color_copy_prices');

   //CAD
   $table->integer('cad_black_print_tresholds');
   $table->integer('cad_black_print_prices');
   $table->integer('cad_color_print_tresholds');
   $table->integer('cad_color_print_prices');
   $table->integer('cad_fold_prices');

   //scan

   $table->integer('cad_scan_tresholds');
   $table->integer('cad_scan_price');
   $table->integer('a4_scan_tresholds');
   $table->integer('a4_scan_price');
   $table->integer('a4_scan_hand_price');
   $table->integer('cd_archive_price');

   //business cards
   $table->integer('bc_print_tresholds');
   $table->integer('bc40_print_prices');
   $table->integer('bc44_print_prices');
   $table->integer('bc_lamin_prices');
   $table->integer('bc_lamin_mix_prices');
   $table->integer('bc_lamin_st_prices');

   //large format printing
   $table->integer('lf_print_min_price');
   $table->integer('lf_print_tresholds');
   $table->integer('lf_paper_print_prices');
   $table->integer('lf_foil_print_prices');
   $table->integer('lf_foil_ed_print_prices');
   $table->integer('lf_block_print_prices');
   $table->integer('lf_canvas_print_prices');

   //plot cut
   $table->integer('lf_plot_cut__min_price');
   $table->integer('lf_plot_cut_price');
   $table->integer('lf_non_print_cut_tresholds');
   $table->integer('lf_non_print_cut_price');
   $table->integer('lf_removal_unused_foil_price');
   $table->integer('lf_transfer_foil_price');

   //boards
   $table->integer('pcv3_price');
   $table->integer('pcv5_price');
   $table->integer('magnetic_price');
   $table->integer('kappa5_price');
   $table->integer('dibond_price');
   $table->integer('second_side_price');

   //lamination
   $table->integer('roll_lamin_min_price');
   $table->integer('lf_roll_lamin_price');
   $table->integer('lamin_tresholds');
   $table->integer('a4_roll_lamin_prices');
   $table->integer('a4_roll_lamin_st_prices');
   $table->integer('a3_100_lamin_prices');
   $table->integer('a3_250_lamin_prices');
   $table->integer('a4_100_lamin_prices');
   $table->integer('a4_250_lamin_prices');
   $table->integer('a5_100_lamin_prices');
   $table->integer('a5_250_lamin_prices');
   $table->integer('a6_100_lamin_prices');
   $table->integer('a6_250_lamin_prices');
   $table->integer('bc_100_lamin_prices');
   $table->integer('bc_250_lamin_prices');

   //introligatory
   $table->integer('intro_tresholds');
   $table->integer('fold_prices');
   $table->integer('staple_prices');
   $table->integer('staple_binder_prices');
   $table->integer('cut_price');
   $table->integer('hole_prices');
   $table->integer('rounded_corners_prices');

   //binding
   $table->integer('binding_discount_tresholds');
   $table->integer('binding_a3_conv_factor');
   $table->integer('binding_cad_conv_factor');
   $table->integer('binding_size_tresholds');
   $table->integer('binding_metal_prices');
   $table->integer('binding_plastic_prices');
   $table->integer('binding_crystal_prices');
   $table->integer('binding_glued_min_price');
   $table->integer('binding_glued_prices');
   $table->integer('binding_diploma_prices');
   $table->integer('binding_diploma_text_prices');
   $table->integer('binding_calendar_price');

   //mugs
   $table->integer('mug_tresholds');
   $table->integer('mug_prices');
   $table->integer('mug_xl_prices');
   $table->integer('mug_magic_prices');
   $table->integer('mug_color_prices');
   $table->integer('mug_latte_prices');
   $table->integer('mug_mini_prices');
   $table->integer('mug_latte_xl_prices');

   //rollups
   $table->integer('stand_tresholds');
   $table->integer('rollup_pst_85_prices');
   $table->integer('rollup_ps_85_prices');
   $table->integer('rollup_pst_100_prices');
   $table->integer('rollup_ps_100_prices');
   $table->integer('rollup_pst_120_prices');
   $table->integer('rollup_ps_120_prices');
   $table->integer('stand_spider_prices');

  });
 }

 /**
  * Reverse the migrations.
  */
 public function down(): void
 {
  Schema::dropIfExists('price_list');
 }
};
