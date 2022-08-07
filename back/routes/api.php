<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesWatchController;
use App\Http\Controllers\KabanchikController;
use App\Http\Controllers\NeilArmstrongController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// it doesn't work for me.
/*header('Access-Control-Allow-Origin', "fuck-you-laravel.anakim.space");
header('Access-Control-Allow-Credentials', true);
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, PATCH, OPTIONS');
header("Access-Control-Allow-Headers", "X-Requested-With");*/

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Public
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/getkabanchikcategories', [KabanchikController::class, 'index']);   // get kabanchik categories


Route::post('/get2', [NeilArmstrongController::class, 'index2']);
Route::post('/new_kabanchik_group', [CategoriesWatchController::class, 'new_group']);
Route::get('/get_kabanchik_groups', [CategoriesWatchController::class, 'get_groups']);
Route::post('/set_kabanchik_group_watched/{id}', [CategoriesWatchController::class, 'set_group_watched']);

Route::group(['middleware' => 'auth:sanctum'], function (){
    Route::get('/get', [NeilArmstrongController::class, 'index']);
});
