import { tableUserAll } from "../users/index/resources/_selectors";

export default class Table {
    static showTable( showTable, hideTable) {
        showTable.classList.remove( 'none' );

        hideTable.forEach(element => {
            element.classList.add( 'none' );
        });
    }

    static changeTable( dataTable, targetRadio, searchText ) {
        if( targetRadio ) {
            const check = searchText;

            dataTable.search( check ).draw();
        }
    }

    static changeBtnColor( target, btn2, btn3 ) {
        target.classList.add( 'active' );

        if( btn2.classList.contains( 'active') ) {
            btn2.classList.remove( 'active' );
        }

        if( btn3.classList.contains( 'active' ) ) {
            btn3.classList.remove( 'active' );
        }
    }
}