@extends('layouts.app')

@section('styles')
    <link rel="stylesheet" href="{{ asset( 'css/navigation/app.css') }}">
    <link rel="stylesheet" href="{{ asset( 'css/home/app.css') }}">

    @yield( 'home-styles')
@endsection

@section('content')
    <section id="main-container">
        <div class="sidenav">
            <ul id="sidenav__ul">
                <a href="{{ url('hostinguser/create') }}"> 
                    <li id="li-newUser">New User</li>
                </a>
                <a href="{{ url( '/hostinguser') }}"> 
                    <li id="li-showUser">Show Users</li>
                </a>
                <a href=" {{url( '/bookeping' ) }}"> 
                    <li id="li-bookkeping">Bookkeping</li>
                </a>
                <a href="{{ url( '/mailinfo' ) }}"> 
                    <li id="li-mailInfo">Mail Info</li>
                </a>
                <a href="{{ url( '/information' ) }}"> 
                    <li id="li-information">Information</li>
                </a>
            </ul>

            <div class="sidenav__shrink">
                <i class="fas fa-arrow-alt-circle-left fa-2x "></i>
                <i class="fas fa-arrow-alt-circle-right fa-2x none"></i>
            </div>
        </div>
        <div class="container">
            <div class="home-content">
                @yield( 'home-content' )
            </div>
        </div>
    </section>
@endsection

@section( 'scripts' )
    <script src="{{ asset('js/home/app.js') }}"></script>
@endsection
