@extends( 'home' )

@section( 'home-styles' )
    <link rel="stylesheet" href="{{ asset( 'css/home/users/create/app.css')}}">
@endsection

@section( 'home-content')
<div class="home-content--container">
    
    <div class="home-content--container__left pushTop">
        @include( 'hostinguser.modal.domain.index')
        @include( 'hostinguser.modal.hosting.index')
        @include( 'hostinguser.modal.tech.index')

        <div class="user-type--heading">
            <div>
                <h1>CHOOSE USER TYPE</h1>
            </div>
            <div class="user-type--heading__icons">
                <div class="icon-container">
                    <i class="fas fa-user fa-7x" id="icon-private"></i>
                    <span> Private Person</span>
                </div>
                <div class="icon-container">
                    <i class="fas fa-user-tie fa-7x" id="icon-company"></i>
                    <span>Company</span>
                </div>

            </div>
        </div>

        <div class="user-type-private user-create--container none">
            <div class="user-create--close">
                <i class="fas fa-window-close fa-2x private-btn--close"></i>
            </div>
           <div class="user-create--form">
                <form action="" class="form">
                   <div class="user-create--form__ns  form-group">
                       <div class="form-group__input">
                            <label for="name">Name</label>
                            <input type="text" name="name">
                       </div>
                       <div class="form-group__input">
                           <label for="lastname">Last Name</label>
                           <input type="text" name="lastname">
                       </div>
                       <div class="form-group__input">
                            <label for="jmbg">JMBG</label>
                            <input type="text" name="jmbg">
                       </div>
                   </div>

                   <div class="user-create--form__ns  form-group">
                    <div class="form-group__input">
                         <label for="address">Address</label>
                         <input type="text" name="address">
                    </div>
                    <div class="form-group__input">
                        <label for="zip">Location</label>
                        <input type="text" name="Location">
                    </div>
                    <div class="form-group__input">
                     <label for="zip">Zip Code</label>
                     <input type="text" name="zip">
                 </div>
                </div>

                <div class="user-create--form__ns  form-group">
                    <div class="form-group__input">
                         <label for="phone">Phone Number</label>
                         <input type="text" name="phone">
                    </div>
                    <div class="form-group__input">
                        <label for="mobile">Mobile Number</label>
                        <input type="text" name="mobile">
                    </div>
                    <div class="form-group__input">
                     <label for="email">Email</label>
                     <input type="text" name="email">
                 </div>
                </div>

                <div class="form-group">
                    <input class="btn-0form" type="submit"   value="CREATE">
                </div>
                </form>
           </div>
        </div>

        <div class="user-type-company user-create--container none">
            <div class="user-create--close company-btn--close">
                <i class="fas fa-window-close fa-2x company-btn--close"></i>
            </div>
            <div class="user-create--form">
                <form action="" class="form">
                <div class="user-create--form__ns  form-group">
                    <div class="form-group__input">
                        <label for="customer">Customer</label>
                        <input type="text" name="name">
                    </div>
                    <div class="form-group__input">
                        <label for="principal_name"> First Name</label>
                        <input type="text" name="principal_name">
                    </div>
                    <div class="form-group__input">
                        <label for="principal_surname"> Lastname Name</label>
                        <input type="text" name="principal_surname">
                    </div>
                </div>
                <div class="user-create--form__ns  form-group">
                        <div class="form-group__input">
                            <label for="Location">Location</label>
                            <input type="text" name="location">
                        </div>
                        <div class="form-group__input">
                            <label for="address">Address</label>
                            <input type="text" name="address">
                        </div>
                        <div class="form-group__input">
                            <label for="zip">Zip</label>
                            <input type="text" name="zip">
                        </div>
                    </div>
                    <div class="user-create--form__ns  form-group">
                        <div class="form-group__input">
                            <label for="phone">Phone Number</label>
                            <input type="text" name="phone">
                        </div>
                        <div class="form-group__input">
                            <label for="mobile">Mobile</label>
                            <input type="text" name="mobile_number">
                        </div>
                        <div class="form-group__input">
                            <label for="email">Email</label>
                            <input type="text" name="email">
                        </div>
                    </div>

                <div class="user-create--form__ns  form-group">
                    <div class="form-group__input">
                        <label for="tax_id">Tax ID</label>
                        <input type="text" name="tax_id">
                    </div>
                    <div class="form-group__input">
                        <label for="pib">Pib</label>
                        <input type="text" name="pib">
                    </div>
                </div>

                <div class="form-group">
                    <input class="btn-0form" type="submit" value="CREATE">
                </div>
            </form>
       </div>
    </div>
    </div>
        @include( 'layouts.sidenav.right.index')
</div>
  
   
</div>

@section( 'home-scripts' )
    <script src="{{ asset( 'js/users/create/app.js') }}"></script>
@endsection

@endsection