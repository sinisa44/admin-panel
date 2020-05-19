<div class="user-private show-user--table none">
    <h3>
        <i class="fas fa-user"></i>
        Private Users
    </h3>
    <table class="table" id="show-private--table">
        <thead>
            <tr>
                <th><i class="fas fa-hashtag"></i></th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Location</th>
                <th>Email</th>
                <th>Domain</th>
                <th>Hosting Packet</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody>
            @foreach( $hosting_users as $h_user )
            @if(  $h_user->client_type == 1 )
                @continue
            @endif
                <tr>
                    @php
                        if( $h_user->active == 1 ) {
                            $active = 'active_check';
                        }else{
                            $active = 'check_inactive';
                        }
                     @endphp

                    <td data-filter="{{ $active }}"  data-order="{{ $h_user->id}}">{{ $h_user->id }}</td>
                    <td>{{ $h_user->first_name}}</td>
                    <td>{{ $h_user->last_name }}</td>
                    <td>{{ $h_user->address }}</td>
                    <td>{{ $h_user->location }}</td>
                    <td>{{ $h_user->email }}</td>
                    <td>www.test.com</td>
                    <td>LITE</td>
                    <td>
                        @if( $h_user->active == 1 )
                           
                            <i class="fas fa-check-circle " style="color:green"></i>
                        @else
                            <i class="fas fa-times-circle" style="color:red"></i>
                        @endif
                    </td> 
                </tr> 

            @endforeach
        </tbody>
    </table>
</div>