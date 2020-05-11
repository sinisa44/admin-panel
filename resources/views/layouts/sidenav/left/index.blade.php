<div class="sidenav-left sidenav">
    <div class="sidenav-left__shrink">
        <i class="fas fa-arrow-alt-circle-right fa-2x"></i>
    </div>
    <ul id="sidenav__ul">
        <a href="{{ url('hostinguser/create') }}"> 
            <li id="li-newUser">
                <i class="fas fa-user-plus"></i>
            </li>
          
        </a>
        <a href="{{ url( '/hostinguser') }}"> 
            <li id="li-showUser">
                <i class="fas fa-users"></i>
            </li>
        </a>
        <a href=" {{url( '/bookeping' ) }}"> 
            <li id="li-bookkeping">
                <i class="fas fa-book"></i>
            </li>
        </a>
        <a href="{{ url( '/mailinfo' ) }}"> 
            <li id="li-mailInfo">
                <i class="fas fa-envelope"></i>
            </li>
        </a>
        <a href="{{ url( '/information' ) }}"> 
            <li id="li-information">
                <i class="fas fa-info"></i>
            </li>
        </a>
    </ul>
</div>