import React from 'react';
import { styled } from '@stitches/react';

const Box = styled('div', {});

const Footer = () => {
    return (
        <Box
            css={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                margin: '0 8px',
            }}
        >
            <Box css={{ flex: 1 }}>
                Sistem Informasi Manajemen Pegawai - SIMPEG v1.0.0 | Status: <span style={{ color: 'green' }}>Online</span>
            </Box>
            <Box>
                Kontak pengembang aplikasi: 085 731 762 554 (Galuh)
            </Box>
        </Box>
    );
}

export default Footer;