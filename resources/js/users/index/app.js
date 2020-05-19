import * as selector from './resources/_selectors';
import Table from '../../classes/table';



selector.btnShowCompany.addEventListener( 'click', (event) => {

    Table.changeBtnColor( event.target, selector.btnShowAll, selector.btnShowPrivate )

    Table.showTable( selector.tableUserCompany, 
        [
            selector.tableUserAll,
            selector.tableUserPrivate
        ]
    );
})

selector.btnShowPrivate.addEventListener( 'click', ( event ) => {

    Table.changeBtnColor( event.target, selector.btnShowAll, selector.btnShowCompany )

    Table.showTable( selector.tableUserPrivate, 
        [
            selector.tableUserAll,
            selector.tableUserCompany
        ]
    );
});

selector.btnShowAll.addEventListener( 'click', ( event ) => {

    Table.changeBtnColor( event.target, selector.btnShowPrivate, selector.btnShowCompany )

    Table.showTable( selector.tableUserAll, 
        [
            selector.tableUserCompany,
            selector.tableUserPrivate
        ]
    )
});

const UserAll =$('#show-user--table').DataTable(
    {
        "pageLength": 19
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

selector.radioBtnActive.addEventListener( 'change', event => {
    Table.changeTable( UserAll, event.target.checked, 'active_check' );
    Table.changeTable( UserCompany, event.target.checked, 'active_check' );
    Table.changeTable( UserPrivate, event.target.checked, 'active_check' );
});

selector.radioBtnInactive.addEventListener( 'change', event => {
    Table.changeTable( UserAll, event.target.checked, 'check_inactive' );
    Table.changeTable( UserCompany, event.target.checked, 'check_inactive' );
    Table.changeTable( UserPrivate, event.target.checked, 'check_inactive' );
});

selector.radioBtnAll.addEventListener( 'change', event => {
    Table.changeTable( UserAll, event.target.checked, '' );
    Table.changeTable( UserCompany, event.target.checked, '' );
    Table.changeTable( UserPrivate, event.target.checked, '' );
});