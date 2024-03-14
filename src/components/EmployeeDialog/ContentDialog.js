import React, { useContext } from 'react'
import { Dialog, DataGrid, GridColumn, LinkButton, SearchBox } from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../Box';

const ContentDialog = () => {
    const {
        refCollections, search, onSearchData,
        data, total, pageSize,
        onFetchData, onClearSearch, loading, onSetSelectedData,
        onApplyData,
    } = useContext(DialogContext);

    return (
        <Dialog
            title="Daftar Karyawan"
            style={{ width: '600px' }}
            draggable
            modal
            closable
            ref={refCollections.dialog}
        >
            <DataGrid
                selectionMode="single"
                style={{ height: '100%' }}
                border={false}
                filterable={false}
                pagination
                lazy
                toolbar={() => (
                    <Box css={{ padding: 8 }}>
                        <SearchBox
                            style={{ width: '100%' }}
                            placeholder="Cari ..."
                            value={search}
                            onSearch={onSearchData}
                            addonRight={search.length === 0 ? null : () => <span className="textbox-icon icon-clear" title="Clear value" onClick={onClearSearch}></span>
                            }
                        />
                    </Box>
                )}
                {...{
                    loading,
                    total,
                    pageSize,
                    data,
                    pagePosition: "bottom",
                    pageOptions: {
                        layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'refresh', 'sep', 'manual']
                    }
                }}
                onPageChange={onFetchData}
                onSelectionChange={(selection) => {
                    onSetSelectedData(selection);
                }}
            >
                <GridColumn field="idNumber" title="NIK"></GridColumn>
                <GridColumn field="name" title="Nama Karyawan"></GridColumn>
            </DataGrid>
            <div className="dialog-button" style={{ padding: '10px 15px' }}>
                <LinkButton iconCls="icon-ok" onClick={() => { onApplyData(); }} style={{ width: 80 }}>Pilih</LinkButton>
            </div>
        </Dialog>
    )
}

export default ContentDialog