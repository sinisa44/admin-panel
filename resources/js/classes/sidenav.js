export default class Sidenav {
    changeIcon( target, oldName, newName) {
       target.classList.remove( oldName );
       target.classList.add( newName );
    }

    changeWidth( sidenav, container ) {
        sidenav.name.style.flexBasis  = sidenav.width;
        
        container.name.style.flexBasis = container.width;
    }

    addText( text ){
        text.forEach( element => {
             const childSpan = document.createElement( 'span' );
             childSpan.textContent = element.text;
             element.selector.appendChild( childSpan );
            
        } );
    }

    removeText( target ) {
        target.forEach(element => {
            element.removeChild(element.lastChild);
        });
 
    }
}