<div class="user-all show-user--table">
    <h3>
        <i class="fas fa-users"></i>
        
    </h3>
    <table class="table">
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
            <tr>
                <td>1</td>
                <td> Company</td>
                <td>test representative</td>
                <td>test Location</td>
                <td>test address</td>
                <td>mail@mail.com</td>
                <td>www.test.com</td>
                <td>LITE</td>
                <td>
                    @php $user_active = 0; @endphp

                    @if( $user_active == 1 )
                        <i class="fas fa-check-circle" style="color:green"></i>
                    @else
                        <i class="fas fa-times-circle" style="color:red"></i>
                    @endif
                </td> 
            </tr> 
        </tbody>
    </table>
</div>