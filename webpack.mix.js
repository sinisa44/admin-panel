const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// js('resources/js/app.js', 'public/js')
mix.sass( 'resources/sass/main/app.scss', 'public/css/main' )
    .sass( 'resources/sass/navigation/app.scss', 'public/css/navigation')
    .sass( 'resources/sass/home/app.scss', 'public/css/home' )
    .sass( 'resources/sass/home/users/create/app.scss', 'public/css/home/users/create')
    // .sass( 'resources/sass/login/app.scss', 'public/css/login')
    // .sass('resources/sass/app.scss', 'public/css');

mix.js( 'resources/js/home/app.js' , 'public/js/home') 
   .js( 'resources/js/users/create/app.js', 'public/js/users/create')
