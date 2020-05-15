<div class="add-tech-modal modal none">
    <div class="modal__heading">
         <h1>Add technical support</h1>
         <span>
             <i class="fas fa-times close-tech-mod"></i>
         </span>
    </div>
    <div class="modal__body">
        {{-- name,surname,address,location,zip,phone,mobile,email --}}
        <div class="tech-form">
            <form action="">
                <div class="service-group">
                    <div class="input">
                        <label for="tech_name">Name</label>
                        <input type="text" name="tech_name">
                    </div>
                    <div class="input">
                        <label for="tech_last">Last Name</label>
                        <input type="text" name="tech_last">
                    </div>
                </div>
                <div class="service-group">
                    <div class="input">
                        <label for="tech_address">Address</label>
                        <input type="text" name="tech_adress">
                    </div>
                    <div class="input">
                        <label for="tech_location">Location</label>
                        <input type="text" name="tech_location">
                    </div>
                    <div class="input">
                        <label for="tech_zip">Zip</label>
                        <input type="text" name="tech_zip">
                    </div>
                </div>
                <div class="service-group">
                    <div class="input">
                        <label for="tech_phone">Phone</label>
                        <input type="number" name="tech_phone">
                    </div>
                    <div class="input">
                        <label for="tech_mobile">Mobile</label>
                        <input type="number" name="tech_mobile">
                    </div>
                    <div class="input">
                        <label for="tech_email">Email</label>
                        <input type="text" name="tech_email">
                    </div>
                </div>

                <div class="service-group">
                  <input type="submit" value="create">
                </div>
            </form>
        </div>
    </div>
    <div class="modal__footer">
        <button class="modal-t-close--btn">Close</button>
    </div>
</div>