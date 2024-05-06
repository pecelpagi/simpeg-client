import React, { useContext } from 'react'
import {
    Dialog
} from 'rc-easyui';
import DialogContext from './DialogContext';
import TabContent from './TabContent';

const ContentDialog = () => {
    const {
        refCollections, selectedEmployee
    } = useContext(DialogContext);

    return (
        <React.Fragment>
            <Dialog
                draggable
                title={selectedEmployee ? selectedEmployee.name : 'Detail Karyawan'}
                style={{ width: `${window.innerWidth - 200}px` }}
                modal
                closable
                ref={refCollections.dialog}
            >
                <TabContent />
            </Dialog>
        </React.Fragment>
    )
}

export default ContentDialog