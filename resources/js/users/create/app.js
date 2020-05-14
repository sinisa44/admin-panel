import * as selector from './resources/_selectors';
import Modal from '../../classes/modal';
import Form from '../../classes/form';

const modal = new Modal();

modal.openModal( selector.btnNewHosting, selector.modalHosting );
modal.closeModal( selector.btnCloseHos, selector.modalHosting );
modal.closeModal( selector.btnCloseHModal, selector.modalHosting );
// modal.closeModal( window, selector.modalHosting );

modal.openModal( selector.btnNewDomain, selector.modalDomain );
modal.closeModal( selector.btnCloseDom, selector.modalDomain);
modal.closeModal( selector.btnCloseDModal, selector.modalDomain);

modal.openModal( selector.btnNewTechnic, selector.modalTechnic );
modal.closeModal( selector.btnCloseTech, selector.modalTechnic)
modal.closeModal( selector.btnCloseTModal, selector.modalTechnic );


selector.iconPrivate.addEventListener( 'click', () => {
    const form = new Form();
    form.displayForm( selector.userTypeHead, selector.formPrivate, selector.containerLeft );
});

selector.iconCompany.addEventListener( 'click', () =>{
    const form = new Form();
    form.displayForm( selector.userTypeHead, selector.formCompany, selector.containerLeft );
});

selector.privateBtnClose.addEventListener( 'click' , () => {
    const form = new Form();
    form.hideForm( selector.userTypeHead, selector.formPrivate );
})

selector.companyBtnClose.addEventListener( 'click', () => {
    const form = new Form();
    form.hideForm( selector.userTypeHead, selector.formCompany );
});
