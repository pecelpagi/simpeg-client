import React, { useContext } from 'react';
import { styled } from '@stitches/react';
import Logo from '../images/icon-group-100.png';
import CurrentTime from './CurrentTime';
import AppContext from '../AppContext';
import Notification from './Notification';
import BackgroundProcessInformation from './BackgroundProcessInformation';

const Box = styled('div', {});

const StyledButton = styled('button', {});

const WelcomeInformation = React.memo(() => {
    return (
        <div style={{
            flex: 1,
        }}>
            <Box
                css={{
                    justifyItems: 'flex-end',
                    gap: '10px',
                    alignItems: 'center',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                }}
            >
                <strong>Halo, Administrator !</strong>
            </Box>
            Selamat Datang di Sistem Informasi Manajemen Pegawai.
        </div>
    )
});

const Header = () => {
    const { onLogout, isLoggedIn } = useContext(AppContext);

    return (
        <Box
            css={{
                alignItems: 'center',
                display: 'grid',
                gridTemplateColumns: 'auto auto 1fr auto auto',
                height: '100%',
                margin: '0 10px',
                gap: 12
            }}
        >
            <img style={{ height: 90 }} src="/company-logo.png" alt="logo" />
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
                <h1>PT. Sudiro Energy Indonesia</h1>
                <h5>Jl. Jend. Sudirman No. 295</h5>
                <h5>Jakarta Timur - Indonesia</h5>
                <h5>Telp. (021) 80871261, 80871262</h5>
            </Box>
            <BackgroundProcessInformation />
            <Notification />
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
                <Box
                    css={{
                        display: 'grid',
                        gridTemplateColumns: isLoggedIn ? 'auto auto' : 'auto',
                        width: 'fit-content',
                        alignSelf: 'flex-end',
                        gap: '10px'
                    }}
                >
                    <CurrentTime />
                    {isLoggedIn && <StyledButton
                        onClick={onLogout}
                        css={{
                            background: 'transparent',
                            border: '0',
                            color: '#FFF',
                            marginTop: '1px',
                            padding: '0px',
                            '&:hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }
                        }}
                        type="button"
                    >[ Logout ]</StyledButton>}
                </Box>
            </Box>
        </Box>
    );
}

export default Header;