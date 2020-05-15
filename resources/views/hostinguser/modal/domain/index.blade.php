<div class="add-domain-modal modal none">
    <div class="modal__heading">
        <h1>Create DOmain</h1>
        <span>
            <i class="fas fa-times close-domain-mod"></i>
        </span>
    </div>
    <div class="service-form">
        <form action="">
            <div class="service-group">
                <label for="domain_name" class="service-group__label">Domain Name</label>
                <input type="text" name="domain_name" class="service-group__input">
            </div>
            <div class="service-group">
                <label for="domain_period" class="service-group__label">Domain Period</label>
                <select name="domain_period" class="service-group__select">
                    @for( $i = 1; $i < 11; $i ++ )
                        <option value={{ $i }}>{{ $i }}</option>
                    @endfor
                </select>
            </div>

            <div class="service-group">
                <input type="submit" class="service-group__submit" value="CREATE">
            </div>
        </form>
    </div>
    <div class="modal__footer">
        <button class="modal-d-close--btn">Close</button>
    </div>
</div>