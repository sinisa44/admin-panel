<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

// Route::get('/', '\App\Http\Controllers\Auth\LoginController@index');
Route::get( '/', function() {
    return view ('auth.login');
});

Route::group( ['middleware' => 'auth'], function(){
    Route::get('/home', 'HomeController@index')->name('home');

    //hostingUser
    Route::get('/hostinguser/create', 'HostingUserController@create' );
    Route::get( '/hostinguser', 'HostingUserController@index' );

    //bookkeping
    Route::get( '/bookeping', 'BookkepingController@index' );

    //mailInfo
    Route::get( '/mailinfo', 'MailInfoController@index' );

    //Informaition
    Route::get( '/information', 'InformationController@index' );
});

