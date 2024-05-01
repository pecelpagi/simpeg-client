import React, { useContext } from 'react'
import PageContext from './PageContext';
import Box from '../../components/Box';

const ContractReminder = () => {
    const { data: { contractReminder } } = useContext(PageContext);

    return (
        <Box
            css={{
                display: 'grid',
                gap: 10,
                gridTemplateColumns: '1fr 1fr 1fr'
            }}
        >
            {contractReminder.map((x) => (
                <Box
                    key={x.id}
                    css={{
                        border: '1px dashed #95b8e7',
                        background: '#e9f2ff',
                        padding: 10,
                    }}
                >
                    <Box>{x.id_number}</Box>
                    <Box><b>{x.name}</b></Box>
                    <Box>Kontrak Berakhir: <b style={{ color: '#E72929' }}>{x.end_date}</b></Box>
                </Box>
            ))}
        </Box>
    )
}

export default ContractReminder