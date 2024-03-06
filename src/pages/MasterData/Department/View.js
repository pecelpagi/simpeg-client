import React from 'react'
import { DataGrid, GridColumn, LinkButton, SearchBox } from 'rc-easyui';
import Box from '../../../components/Box';
import { useContext } from 'react';
import PageContext from './PageContext';

const View = () => {
    const { search, onSearchData, data, total, pageSize, onFetchData, onClearSearch, loading } = useContext(PageContext);

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
                        <LinkButton iconCls="icon-add" plain onClick={() => { }}>Tambah</LinkButton>
                        <LinkButton iconCls="icon-edit" plain onClick={() => { }}>Ubah</LinkButton>
                        <LinkButton iconCls="icon-cancel" plain disabled={false} onClick={() => { }}>Hapus</LinkButton>
                    </Box>
                    <Box>
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
        >
            <GridColumn field="code" title="Kode"></GridColumn>
            <GridColumn field="name" title="Name"></GridColumn>
        </DataGrid>
    )
}

export default View