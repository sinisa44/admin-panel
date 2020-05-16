export default class Table {
    static showTable( showTable, hideTable) {
        showTable.classList.remove( 'none' );

        hideTable.forEach(element => {
            element.classList.add( 'none' );
        });
    }
}