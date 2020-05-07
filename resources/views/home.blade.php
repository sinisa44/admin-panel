@extends('layouts.app')

@section('styles')
    <link rel="stylesheet" href="{{ asset( 'css/navigation/app.css') }}">
    <link rel="stylesheet" href="{{ asset( 'css/home/app.css') }}">

    @yield( 'home-styles')
@endsection

@section('content')
    <section id="main-container">
        <div class="sidenav">
            <ul>
                <a href="{{ url('hostinguser/create') }}"> 
                    <li>New User </li>
                </a>
                <a href="{{ url( '/hostinguser') }}"> 
                    <li>Show Users</li>
                </a>
                <a href=" {{url( '/bookeping' ) }}"> 
                    <li>Bookkeping</li>
                </a>
                <a href="{{ url( '/mailinfo' ) }}"> 
                    <li>Mail Info</li>
                </a>
                <a href="{{ url( '/information' ) }}"> 
                    <li>Information</li>
                </a>
            </ul>
        </div>
        <div class="container">
            <div class="home-content">
                @yield( 'home-content' )
            </div>
        </div>
    </section>
@endsection
