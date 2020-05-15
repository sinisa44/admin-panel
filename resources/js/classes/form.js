export default class Form {
   displayForm( header, form, container ) {
        header.style.display = 'none';
        form.style.display = 'block';
        container.classList.add( 'pushTop' );
    }

    hideForm( header, form ) {
        header.style.display = 'block';
        form.style.display = 'none';
    }
}