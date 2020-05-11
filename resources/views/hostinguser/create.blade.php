@extends( 'home' )

@section( 'home-styles' )
    <link rel="stylesheet" href="{{ asset( 'css/home/users/create/app.css')}}">
@endsection

@section( 'home-content')
<div class="home-content--container">
    <div class="home-content--container__left">
        <div class="heading">
            <div class="heading__icon">
                <i class="fas fa-user-plus fa-2x"></i>
            </div>
            <div class="heading__title">
                <h1>CREATE NEW USER</h1>
            </div>
           
        </div>
    </div>
  
    @include( 'layouts.sidenav.right.index')
</div>

@section( 'home-scripts' )
    <script src="{{ asset( 'js/users/create/app.js') }}"></script>
@endsection

@endsection