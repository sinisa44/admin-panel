export default class Modal{
    openModal( button, modal ) {
        button.addEventListener( 'click', () => {
            modal.style.display = "block";
        });
    }

    closeModal( button, modal ) {
        button.addEventListener( 'click', () => {
            modal.style.display = 'none';
        });
    }
}