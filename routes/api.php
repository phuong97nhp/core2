<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/* Api Register */

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [App\Http\Controllers\admin\AuthController::class, 'login']);
    Route::post('/register', [App\Http\Controllers\admin\AuthController::class, 'register']);
    Route::post('/logout', [App\Http\Controllers\admin\AuthController::class, 'logout']);
    Route::post('/refresh', [App\Http\Controllers\admin\AuthController::class, 'refresh']);
    Route::get('/user-profile', [App\Http\Controllers\admin\AuthController::class, 'userProfile']);
    Route::post('/change-pass', [App\Http\Controllers\admin\AuthController::class, 'changePassWord']);    

    //thêm hình ảnh 
    Route::post('/media/upload', [App\Http\Controllers\admin\MediaController::class, 'up']);

    // role 
    Route::controller(App\Http\Controllers\admin\RoleController::class)->group(function () {
        Route::get('/role/view', 'index')->name('Xem phân quyền');
        Route::post('/role/add', 'add')->name('Thêm phân quyền');
        Route::get('/role/set/{id}', 'set')->name('Cài đặt phân quyền');
        Route::post('/role/setting', 'setting')->name('Thêm quyền');
    });
    // Route::get('/role/view', [App\Http\Controllers\admin\RoleController::class, 'index']);
    // Route::post('/role/add', [App\Http\Controllers\admin\RoleController::class, 'add']);
    // Route::get('/role/set', [App\Http\Controllers\admin\RoleController::class, 'set'])->name('Cài đặt');


});