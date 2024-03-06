import React from 'react';
import { styled } from '@stitches/react';
import Logo from '../images/icon-group-100.png';
import CurrentTime from './CurrentTime';

const Box = styled('div', {});

const WelcomeInformation = React.memo(() => {
    return (
        <div style={{
            flex: 1
        }}>
            <strong>Halo, Administrator !</strong>
            <br />
            Selamat Datang di Sistem Informasi Pengolahan Data Karyawan.
        </div>
    )
});

const Header = () => {
    return (
        <Box
            css={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                margin: '0 10px',
                gap: 12
            }}
        >
            <img style={{ height: 90 }} src={Logo} alt="logo" />
            <Box
                css={{
                    color: '#FFFFFF',
                    '& h1, & h5': {
                        fontSize: '0.875rem',
                        margin: 0,
                        fontWeight: 'normal'
                    },
                    '& h1': {
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }
                }}
            >
                <h1>PT. Example Company Name</h1>
                <h5>Jl. Jend. Sudirman No. 295</h5>
                <h5>Jakarta Timur - Indonesia</h5>
                <h5>Telp. (021) 80871261, 80871262</h5>
            </Box>
            <Box
                css={{
                    flex: 1,
                    textAlign: 'right',
                    padding: '15px 0',
                    paddingRight: 4,
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                }}
            >
                <WelcomeInformation />
                <div>
                    <CurrentTime />
                </div>
            </Box>
        </Box>
    );
}

export default Header;