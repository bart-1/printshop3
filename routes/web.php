<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CalcBcController;
use App\Http\Controllers\CalcLatexSticersController;
use App\Http\Controllers\CalcSmallFormatController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
 return redirect('welcome');
});

Route::get('/welcome', [WelcomeController::class, 'index'])->name('welcome');


Route::post('/welcome', [AuthenticatedSessionController::class, 'destroy']
)->name('welcome.logout');
Route::post('/calcbc', [AuthenticatedSessionController::class, 'destroy']
)->name('calcbc.logout');

Route::get('/calcbc', [CalcBcController::class, 'index'])->name('calcbc');

Route::post('/sfcolorprint', [AuthenticatedSessionController::class, 'destroy']
)->name('sfcolorprint.logout');

Route::get('/sfcolorprint', [CalcSmallFormatController::class, 'index'])->name('sfcolorprint');

Route::post('/latexstickers', [AuthenticatedSessionController::class, 'destroy']
)->name('latexstickers.logout');

Route::get('/latexstickers', [CalcLatexSticersController::class, 'index'])->name('latexstickers');


Route::get('/dashboard', function () {
 return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';
