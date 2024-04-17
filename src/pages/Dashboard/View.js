import React from 'react'
import { Panel } from 'rc-easyui';
import Box from '../../components/Box';
import PieChart from './PieChart';
import ContractReminder from './ContractReminder';
import BarChart from './BarChart';

const View = () => {
    return (
        <Box
            css={{
                padding: 10,
                display: 'grid',
                gap: 10,
                width: '100%',
                background: '#F4F4F4',
                height: 'max-content',
                gridTemplateColumns: '2fr 1fr'
            }}
        >
            <Box
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                }}
            >
                <Box>
                    <Panel title="Reminder Kontrak" collapsible={false} bodyStyle={{ padding: 20 }}>
                        <ContractReminder />
                    </Panel>
                </Box>
                <Box>
                    <Panel title="Statistik Unit" collapsible={false} bodyStyle={{ padding: 20 }}>
                        <BarChart />
                    </Panel>
                </Box>
            </Box>
            <Box>
                <Panel title="Persentase" collapsible={false} bodyStyle={{ padding: 20 }}>
                    <PieChart />
                </Panel>
            </Box>
        </Box>
    )
}

export default View