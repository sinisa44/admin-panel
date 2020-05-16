@extends( 'home' )

@section( 'home-styles' )
    <link rel="stylesheet" href="{{ asset( 'css/home/users/index/app.css')}}">
@endsection

@section( 'home-content' )
  <div class="user-index">
        <div class="user-index__heading">
            <div class="heading-radio">
                <div class="heading-content">
                    <label for="active">Ative Users</label>
                    <input type="checkbox" id="showActive">
                </div>
                <div class="heading-content">
                    <label for="inactive">Inactive Users</label>
                    <input type="checkbox" id="showInactive">
                </div>
                <div class="heading-content">
                    <button id="show-companies-btn">Companies</button>
                </div>
                <div class="heading-content">
                    <button id="show-private-btn">Private Users</button>
                </div>
                <div class="heading-content">
                    <button id="show-all-btn">All Users</button>
                </div>
            </div>
            
            <div class="heading-content">
               <i class="fas fa-search"></i>
                <input type="text" name="searchUser" id="searchUser">
            </div>
        </div>

        @include( 'hostinguser.table.user_all' )
        @include( 'hostinguser.table.user_private' )
        @include( 'hostinguser.table.user_company' )
      

    </div>

@section( 'home-scripts' )
    <script src="{{ asset( 'js/users/index/app.js') }}"></script>
@endsection
@endsection