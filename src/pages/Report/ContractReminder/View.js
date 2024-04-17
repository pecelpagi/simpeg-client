import React, { useContext } from 'react'
import { DataGrid, GridColumn } from 'rc-easyui';
import PageContext from './PageContext';
import Box from '../../../components/Box';

const View = () => {
    const { data } = useContext(PageContext);

    return (
        <Box css={{
            padding: 10,
            background: '#F4F4F4',
            height: '100%'
        }}>
            <DataGrid data={data} style={{ height: '100%' }}>
                <GridColumn width={60} field="sequenceNumber" title="No."></GridColumn>
                <GridColumn field="name" title="Nama"></GridColumn>
                <GridColumn field="start_date" title="Mulai Kontrak"></GridColumn>
                <GridColumn field="contractLengthMonthText" title="Lama (Bulan)"></GridColumn>
                <GridColumn field="end_date" title="Kontrak Selesai"></GridColumn>
            </DataGrid>
        </Box>
    )
}

export default View