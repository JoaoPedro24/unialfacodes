<?php

use App\Http\Controllers\SiteControler;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/teste', [SiteControler::class, 'index']); //Esta rota manda para o arquivo controller no método index
