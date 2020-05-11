@extends( 'home' )

@section( 'home-styles' )
    <link rel="stylesheet" href="{{ asset( 'css/home/users/create/app.css')}}">
@endsection

@section( 'home-content')
<div class="home-content--container">
    
    <div class="home-content--container__left">
        @include( 'hostinguser.modal.domain.index')
        @include( 'hostinguser.modal.hosting.index')
        @include( 'hostinguser.modal.tech.index')

        <div class="user-type--heading">
            <h1>CHOOSE USER TYPE</h1>
            <div class="user-type--heading__icons">
                <div class="icon-container">
                    <i class="fas fa-user fa-7x"></i>
                    <span> Private Person</span>
                </div>
                <div class="icon-container">
                    <i class="fas fa-user-tie fa-7x"></i>
                    <span>Company</span>
                </div>

            </div>
        </div>

        <div class="user-type-private">

        </div>

        <div class="user-type-company">

        </div>
    </div>
  
    @include( 'layouts.sidenav.right.index')
</div>

@section( 'home-scripts' )
    <script src="{{ asset( 'js/users/create/app.js') }}"></script>
@endsection

@endsection