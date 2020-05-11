import * as selector from './resources/_selectors';
import Sidenav from '../classes/sidenav';

selector.sideNavButton.addEventListener( 'click', (event) => {
    const sideNav = new Sidenav();

    if( event.target.classList.contains( 'fa-arrow-alt-circle-right')){
    sideNav.changeIcon( event.target, 'fa-arrow-alt-circle-right', 'fa-arrow-alt-circle-left');
   
    const sidenav = {
        name: selector.sideNavLeft,
        width: '8%'
    }

    const container = {
        name: selector.container,
        width: '92%'
    }
    sideNav.changeWidth( sidenav, container );

    const sideNavText = [
        {
            selector: selector.linkAddUser,
            text    : 'Add User'
        },
        {
            selector: selector.linkShowUser,
            text    : 'ShowUser'
        },
        {
            selector: selector.linkBookkeping,
            text    : 'Bookkeping'
        },
        {
            selector: selector.linkMailInfo,
            text    : 'Mail Info'
        },
        {
            selector: selector.linkInformation,
            text    : 'Information'
        },
    ]
    setTimeout(() => {
        sideNav.addText( sideNavText );
    }, 300 );


    } else if( event.target.classList.contains( 'fa-arrow-alt-circle-left' ) ) {
        sideNav.changeIcon( event.target, 'fa-arrow-alt-circle-left', 'fa-arrow-alt-circle-right' );

        const selectorTarget = [
            selector.linkAddUser,
            selector.linkShowUser,
            selector.linkBookkeping,
            selector.linkMailInfo,
            selector.linkInformation
        ]
        sideNav.removeText( selectorTarget );
        
        const sidenav = {
            name: selector.sideNavLeft,
            width: '3%'
        }

        const container = {
            name: selector.container,
            width: '97%'
        }

        sideNav.changeWidth( sidenav, container );
    }
});
