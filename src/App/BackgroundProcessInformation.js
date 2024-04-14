import React, { useContext } from 'react'
import Box from '../components/Box';
import AppContext from '../AppContext';

const BackgroundProcessInformation = () => {
    const { isExportingEmployees } = useContext(AppContext);

    return (
        <Box
            css={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                paddingLeft: 20,
            }}
        >
            {isExportingEmployees && (
                <Box
                    css={{
                        marginRight: 15,
                        color: '#000',
                        position: 'relative',
                        width: 'fit-content',
                        height: 32,
                        padding: '0 15px 0 5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px',
                        background: '#FFF',
                    }}
                >
                    <img src="/loader.gif" alt="loader" height={32} />
                    <b style={{ marginLeft: 5 }}>Proses ekspor karyawan sedang berjalan.</b>
                </Box>
            )}
        </Box>
    )
}

export default BackgroundProcessInformation