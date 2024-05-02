import React, { useContext } from 'react'
import { Dialog, DataGrid, GridColumn, SearchBox } from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../Box';

const ContentDialog = () => {
    const {
        refCollections, search, onSearchData,
        data, total, pageSize,
        onFetchData, onClearSearch, loading,
    } = useContext(DialogContext);

    return (
        <Dialog
            title="Notifikasi"
            style={{ width: '750px' }}
            draggable
            modal
            closable
            ref={refCollections.dialog}
        >
            <DataGrid
                selectionMode={null}
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
            >
                <GridColumn field="createdAt" width={150} title="Tanggal"></GridColumn>
                <GridColumn field="attachment" title="Informasi" render={({ value, row }) => {
                    return (<span>Hasil <b>{row.notificationType === 'EE' ? 'Export Data Karyawan' : 'Export Laporan Skorsing'}</b> sudah dapat di unduh: <a href={`${process.env.REACT_APP_EXPORT_FILE_SERVER}/export/${value}`}>{value}</a></span>);
                }}></GridColumn>
            </DataGrid>
        </Dialog>
    )
}

export default ContentDialog