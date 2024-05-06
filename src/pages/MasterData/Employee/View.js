import React from 'react'
import { DataGrid, GridColumn, LinkButton, SearchBox } from 'rc-easyui';
import Box from '../../../components/Box';
import { useContext } from 'react';
import PageContext from './PageContext';
import AppContext from '../../../AppContext';

const View = () => {
    const {
        search, onSearchData, data, total, pageSize,
        onFetchData, onClearSearch, loading, onSetSelectedData,
        onShowFormDialog, selectedData, onDeleteData, onExportEmployee, exporting, onShowDetailDialog,
    } = useContext(PageContext);
    const { isExportingEmployees } = useContext(AppContext);

    return (
        <DataGrid
            selectionMode="single"
            style={{ height: '100%' }}
            border={false}
            filterable={false}
            pagination
            lazy
            toolbar={() => (
                <Box css={{
                    padding: 4,
                    display: 'grid',
                    gridTemplateColumns: '1fr auto'
                }}>
                    <Box>
                        <LinkButton iconCls="icon-add" plain onClick={() => { onShowFormDialog(); }}>Tambah</LinkButton>
                        <LinkButton iconCls="icon-edit" plain disabled={!selectedData} onClick={() => { onShowFormDialog(selectedData); }}>Ubah</LinkButton>
                        <LinkButton iconCls="icon-cancel" plain disabled={!selectedData} onClick={() => { onDeleteData() }}>Hapus</LinkButton>
                        <LinkButton iconCls="icon-man" plain disabled={!selectedData} onClick={() => { onShowDetailDialog(selectedData); }}>Preview</LinkButton>
                    </Box>
                    <Box
                        css={{
                            display: 'flex',
                            gap: 8,
                        }}
                    >
                        <LinkButton iconCls="icon-print" plain disabled={exporting ? exporting : isExportingEmployees} onClick={() => { onExportEmployee() }}>Export</LinkButton>
                        <SearchBox
                            style={{ width: 300 }}
                            placeholder="Cari ..."
                            value={search}
                            onSearch={onSearchData}
                            addonRight={search.length === 0 ? null : () => <span className="textbox-icon icon-clear" title="Clear value" onClick={onClearSearch}></span>
                            }
                        />
                    </Box>
                </Box>
            )}
            {...{
                loading,
                total,
                pageSize,
                data,
                pagePosition: "bottom",
                pageOptions: {
                    layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'refresh', 'sep', 'manual', 'info']
                }
            }}
            onPageChange={onFetchData}
            onSelectionChange={(selection) => {
                onSetSelectedData(selection);
            }}
        >
            <GridColumn field="idNumber" title="NIK"></GridColumn>
            <GridColumn field="name" title="Nama"></GridColumn>
            <GridColumn field="employeePositionName" title="Jabatan"></GridColumn>
            <GridColumn field="birthdateAndPlace" title="Tempat Tanggal Lahir"></GridColumn>
            <GridColumn field="departmentName" title="Unit / Department"></GridColumn>
        </DataGrid>
    )
}

export default View