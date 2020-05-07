import * as selector from './resources/selectors';

selector.button.addEventListener( 'click', (event) => {
    displayIcon( selector.liNewUser, 'fas fa-user-plus ' );
    displayIcon( selector.liShowUser, 'fas fa-users ' );
    displayIcon( selector.liBookkeping, 'fas fa-book ' );
    displayIcon( selector.liMailInfo, 'fas fa-envelope ' );
    displayIcon( selector.liInformation, 'fas fa-info ' );    

    selector.button.classList.add('none');
    selector.buttonRight.classList.remove( 'none' );
    animateSidebar( '5%');
});

selector.buttonRight.addEventListener( 'click', ( event ) => {
    animateSidebar( '10%' );

    selector.button.classList.remove( 'none' );
    selector.buttonRight.classList.add( 'none' );

    setTimeout(() => {
        removeIcon( selector.liNewUser, 'New User' );
        removeIcon( selector.liShowUser, 'Show Users' );
        removeIcon( selector.liBookkeping, 'Bookkeping' );
        removeIcon( selector.liMailInfo, 'Mail Info' );
        removeIcon( selector.liInformation, 'Information' );
    }, 500);
   
});


const displayIcon = ( selector, icon ) => {
    selector.textContent = '';
    // selector.style.paddingRight = "1rem";
    const faIcon = document.createElement( 'i' );
    faIcon.className =  `${ icon }`;
    selector.appendChild( faIcon );
}

const removeIcon = ( selector, text ) => {
    selector.removeChild( selector.firstChild );
    selector.textContent = text;
}

const animateSidebar = ( flexBasis ) => {
    selector.sideNavUl.style.textAlign = "center";
    // selector.sideNavUl.style.paddingRight = ".5rem";
    selector.sideNav.style.flexBasis = flexBasis;
}


