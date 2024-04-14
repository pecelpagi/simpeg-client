import React, { useContext } from 'react'
import Box from '../components/Box';
import AppContext from '../AppContext';

const Notification = () => {
    const { onShowNotification, unreadNotificationCount } = useContext(AppContext);

    return (
        <Box
            onClick={() => {
                onShowNotification();
            }}
            css={{
                marginRight: 15,
                color: '#000',
                cursor: 'pointer',
                position: 'relative',
                width: 'auto',
                height: 32,
                padding: '0 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                background: '#FFF',
                '&:hover': {
                    background: '#e5e5e5',
                },
                'img': {
                    height: 22,
                }
            }}
        >
            <img src="/icon-notification.png" alt="notification" />
            <b style={{ marginLeft: 5 }}>Notifikasi</b>
            {unreadNotificationCount > 0 && (
                <Box
                    css={{
                        textAlign: 'center',
                        color: '#FFF',
                        fontSize: 12,
                        minWidth: 18,
                        padding: '2px 4px',
                        position: 'absolute',
                        right: 0,
                        bottom: 25,
                        background: '#f41d1d',
                        borderRadius: 5,
                    }}
                >
                    {unreadNotificationCount > 9 ? `${unreadNotificationCount}+` : unreadNotificationCount}
                </Box>
            )}
        </Box>
    )
}

export default Notification