<div class=" modal add-hosting-modal none">
    <div class="modal__heading">
         <h1>Create Hosting</h1>
         <span>
             <i class="fas fa-times close-hosting-mod"></i>
         </span>
    </div>
    <div class="service-form">
        <form action="">
            <div class="service-group">
                <label for="hosting_package" class="service-group__label">Hosting Package</label>
                <select name="domain_package" class="service-group__select">

                    @php  $packages = ['Lite','Base','Full','Max']; @endphp

                    @foreach( $packages as $package )
                        <option value={{ $package }}>{{ $package }}</option>
                    @endforeach

                </select>
            </div>
            <div class="service-group">
                <label for="hosting_payment" class="service-group__label">Hosting Payment</label>
                <select name="hosting_payment" class="service-group__select">
                    @php $payments = ['Annual', 'Monthly']; @endphp

                    @foreach( $payments as $payment )
                        <option value={{ $payment }}>{{ $payment}}</option>
                    @endforeach

                </select>
            </div>

            <div class="service-group">
                <input type="submit" class="service-group__submit" value="CREATE">
            </div>
        </form>
    </div>
    <div class="modal__footer">
        <button class="modal-h-close--btn">Close</button>
    </div>
</div>