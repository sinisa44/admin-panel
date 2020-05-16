import * as selector from './resources/_selectors';
import Table from '../../classes/table';

selector.btnShowCompany.addEventListener( 'click', () => {
    Table.showTable( selector.tableUserCompany, 
        [
            selector.tableUserAll,
            selector.tableUserPrivate
        ]
    );
})

selector.btnShowPrivate.addEventListener( 'click', () => {
    Table.showTable( selector.tableUserPrivate, 
        [
            selector.tableUserAll,
            selector.tableUserCompany
        ]
    );
});

selector.btnShowAll.addEventListener( 'click', () => {
    Table.showTable( selector.tableUserAll, 
        [
            selector.tableUserCompany,
            selector.tableUserPrivate
        ]
    )
});