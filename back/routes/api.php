<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NeilArmstrongController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//header('Access-Control-Allow-Origin: anakim.space');
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, PATCH, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With");

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


Route::group(['middleware' => 'auth:sanctum'], function (){
    Route::get('/get', [NeilArmstrongController::class, 'index']);
});
