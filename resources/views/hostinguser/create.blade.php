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
    </div>
  
    @include( 'layouts.sidenav.right.index')
</div>

@section( 'home-scripts' )
    <script src="{{ asset( 'js/users/create/app.js') }}"></script>
@endsection

@endsection