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
                    <label for="inactive">Companies</label>
                    <input type="checkbox" id="showInactive">
                </div>
                <div class="heading-content">
                    <label for="inactive">Private Users</label>
                    <input type="checkbox" id="showInactive"
                    >
                </div>
            </div>
            
            <div class="heading-content">
               <i class="fas fa-search"></i>
                <input type="text" name="searchUser" id="searchUser">
            </div>
        </div>

        <div class="user-index__content">
            <table>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th></th>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
  </div>
@endsection