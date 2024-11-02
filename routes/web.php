<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CollectionController;

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

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/collection/{collection}', [CollectionController::class, 'show'])->name('collection');

Route::get('/product/{product}', [ProductController::class, 'show'])->name('product');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    
    Route::post('/collection/store', [CollectionController::class, 'store'])->name('add-collection');
    Route::put('/collection/{collection}/update', [CollectionController::class, 'update'])->name('update-collection');
    Route::delete('/collection/{collection}/destroy', [CollectionController::class, 'destroy'])->name('delete-collection');

    Route::post('/product/store', [ProductController::class, 'store'])->name('add-product');
    Route::put('/product/{product}/update', [ProductController::class, 'update'])->name('update-product');
    Route::delete('/product/{product}/destroy', [ProductController::class, 'destroy'])->name('destroy-product');
});
