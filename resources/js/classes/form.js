export default class Form {
    displayForm( header, form, container ) {
        header.style.display = 'none';
        form.style.display = 'block';
        container.classList.add( 'pushTop' );
    }
}