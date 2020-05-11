import * as selector from './resources/_selectors';
import Modal from '../../classes/modal';

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

