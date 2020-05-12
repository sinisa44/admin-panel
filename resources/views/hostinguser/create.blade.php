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

        <div class="user-type-private user-create--container">
           {{-- name,surname,jmbg,address,location,address,zip,phone,mobile,email, --}}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium alias vel obcaecati, quisquam dolores repudiandae? Ex labore voluptates repudiandae nisi quaerat sint ipsa exercitationem ipsam quam quas, accusamus nobis totam nulla provident, quidem dolor, iure odio accusantium ipsum? Dolore aut veritatis nesciunt maxime repellat quod. Consequatur pariatur amet reprehenderit itaque tenetur suscipit magnam, modi ad consectetur aperiam voluptate corrupti esse, consequuntur dignissimos! Fugiat ipsum saepe animi non culpa accusantium explicabo totam eveniet cumque recusandae ad odio quasi praesentium facilis porro eos, sint tempore? Impedit aspernatur numquam nam ratione cumque, mollitia eaque sed consequatur enim, recusandae obcaecati facere quibusdam eveniet beatae amet blanditiis minima labore iste reprehenderit eligendi suscipit cum repudiandae! Eum eveniet tenetur aliquam nemo aut, quibusdam hic provident sint, excepturi voluptatem rerum cumque voluptas odio sapiente vitae mollitia impedit fugiat repudiandae. Corporis obcaecati nisi quidem quasi est molestias voluptate corrupti culpa ducimus voluptas reiciendis amet voluptates magnam, minima distinctio harum alias recusandae ea vitae at! Nisi optio ipsum inventore quidem quasi perspiciatis facilis voluptatum sequi nesciunt illo. Dolorem vitae esse aliquid sapiente, fuga alias id voluptas recusandae nesciunt at illum, cupiditate officiis commodi quam laudantium earum quae atque obcaecati doloribus quaerat assumenda nulla. Sit alias harum voluptatum reiciendis!
        </div>
    </div>
  
    @include( 'layouts.sidenav.right.index')
</div>

@section( 'home-scripts' )
    <script src="{{ asset( 'js/users/create/app.js') }}"></script>
@endsection

@endsection