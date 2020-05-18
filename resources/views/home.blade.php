@extends('layouts.app')

@section('styles')
    <link rel="stylesheet" href="{{ asset( 'css/navigation/app.css') }}">
    <link rel="stylesheet" href="{{ asset( 'css/home/app.css') }}">

    @yield( 'home-styles')
@endsection

@section('content')
    <section id="main-container">
        @include( 'layouts.sidenav.left.index' )
        <div class="container">
            <div class="home-content">
                @yield( 'home-content' )
            </div>
        </div>
    </section>
@endsection

@section( 'scripts' )
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.21/datatables.min.js"></script>
    <script src="{{ asset('js/home/app.js') }}"></script>

    @yield( 'home-scripts' )
@endsection
