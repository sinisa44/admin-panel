{{-- @extends( 'layouts.app' ) --}}


@if( Auth::user() )
    <nav id="main-nav">
        <div class="admin-link">
            <a href="">{{ Auth::user()->name }}</a>
        </div>

        <ul class="nav-items">
            <a href="" class="nav-link">Add new Admin</a>
            <a href="" class="nav-link">Show all Admins</a>
            <a href="" class="nav-link">Send Email</a>
        </ul>

        <div class="admin-logout">
            <a class="dropdown-item" href="{{ route('logout') }}"
            onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
             <i class="fas fa-sign-out-alt fa-2x"></i>
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </div>
    </nav>
@endif