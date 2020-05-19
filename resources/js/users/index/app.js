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

const UserAll =$('#show-user--table').DataTable(
    {
        "pageLength": 15

    }
);

const UserCompany =$('#show-company--table').DataTable(
    {
        "pageLength": 8

    }
);

const UserPrivate =$('#show-private--table').DataTable(
    {
        "pageLength":8

    }
);

$('#searchUser' ).keyup( () => {
   UserAll.search( $('#searchUser').val() ).draw();
   UserCompany.search( $('#searchUser').val() ).draw();
   UserPrivate.search( $('#searchUser').val() ).draw();
});