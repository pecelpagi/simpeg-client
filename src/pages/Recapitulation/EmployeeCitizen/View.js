import React, { useContext } from 'react'
import { DataGrid, GridColumn, Panel } from 'rc-easyui';
import Box from '../../../components/Box';
import BarChart from './BarChart';
import PageContext from './PageContext';

const View = () => {
    const { data } = useContext(PageContext);

    return (
        <Box
            css={{
                padding: 10,
                display: 'grid',
                gap: 10,
                background: '#F4F4F4',
                height: '100%',
                gridTemplateColumns: '1fr 2fr'
            }}
        >
            <DataGrid data={data} style={{ height: 'auto' }}>
                <GridColumn width={60} field="sequenceNumber" title="No."></GridColumn>
                <GridColumn field="name" title="Warga Negara"></GridColumn>
                <GridColumn width={120} field="total" title="Jumlah Karyawan"></GridColumn>
            </DataGrid>
            <Box>
                <Panel title="Statistik Warga Negara" collapsible={false} bodyStyle={{ padding: 20 }}>
                    <BarChart />
                </Panel>
            </Box>
        </Box>
    )
}

export default View