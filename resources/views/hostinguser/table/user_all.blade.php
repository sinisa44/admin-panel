<div class="user-all show-user--table" >
    {{-- <h3>
        <i class="fas fa-users"></i>
        
    </h3> --}}
    <table class="table" id="show-user--table">
        <thead>
            <tr>
                <th><i class="fas fa-hashtag"></i></th>
                <th>Client type</th>
                <th>Customer or Represntative</th>
                <th>Location</th>
                <th>Address</th>
                <th>Email</th>
                <th>Domain</th>
                <th>Hosting Packet</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($hosting_users as $h_user)    
                <tr>
                    <td>{{ $h_user->id }}</td>

                    @if( $h_user->client_type == 1 )
                        <td>Company</td>
                    @else
                        <td>Private</td>
                    @endif

                <td>{{ $h_user->first_name }} {{ $h_user->last_name}}</td>
                    <td>{{ $h_user->location }}</td>
                    <td>{{ $h_user->address }}</td>
                    <td>{{ $h_user->email }}</td>
                    <td>www.test.com</td>
                    <td>LITE</td>
                    <td>
                        

                        @if( $h_user->active == 1 )
                            <i class="fas fa-check-circle" style="color:green"></i>
                        @else
                            <i class="fas fa-times-circle" style="color:red"></i>
                        @endif
                    </td> 
                </tr>
            @endforeach
        </tbody>
    </table>
</div>