import React from 'react';
import { Messager } from 'rc-easyui';
import AppContext from './index';
import LoginDialog from './LoginDialog';
import NotificationDialog from '../components/NotificationDialog';
import { getToken } from '../utils';
import * as apiServiceUtility from './api-service.utils';
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000');

class AppContextProvider extends React.Component {
    state = {
        activeMenuIds: ['DASHBOARD'],
        lastClickedMenu: 'DASHBOARD',
        isLoggedIn: !!getToken(),
        isExportingEmployees: false,
        unreadNotificationCount: 0,
    };

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.initSocketConnection();
        this.handleFetchExportStatus();
        this.handleFetchUnreadNotificationCount();
    }

    handleFetchExportStatus = () => {
        const { isLoggedIn } = this.state;
        
        if (isLoggedIn) apiServiceUtility.handleFetchExportEmployeeStatus({ onShowMessager: this.handleShowMessager, setState: this.setState });
    }

    handleFetchUnreadNotificationCount = () => {
        const { isLoggedIn } = this.state;

        if (isLoggedIn) apiServiceUtility.handleFetchUnreadNotificationCount({ onShowMessager: this.handleShowMessager, setState: this.setState });
    }

    handleReadNotification = () => {
        apiServiceUtility.handleReadNotification({ onShowMessager: this.handleShowMessager, setState: this.setState });
    }

    initSocketConnection = () => {
        console.log('AAA');
        socket.on("connect", () => {
            console.log(`Connected with ID: ${socket.id}`)
            socket.on("SUBSCRIBE", (message) => {
                console.log('DEBUG-RECEIVER: ', message);
                this.handleFetchExportStatus();
                this.handleFetchUnreadNotificationCount();
            }); 
        });
    }

    handleSetLastClickedMenu = (selection, lastClickedOnly = false) => {
        this.setState({
            lastClickedMenu: selection.id
        }, () => {
            if (!lastClickedOnly) this.handleSelectMenu(selection)
        });
    }

    handleSelectMenu = (selection) => {
        const isHasChildren = selection.hasOwnProperty('children');

        if (isHasChildren) return false;

        const { activeMenuIds } = this.state;
        const found = activeMenuIds.includes(selection.id);

        if (found) return false;

        this.setState({
            activeMenuIds: [...activeMenuIds, selection.id],
        })

        return true;
    }

    handleDeactivateMenu = (id) => {
        const { activeMenuIds } = this.state;

        const newState = activeMenuIds.filter(x => x !== id);

        this.setState({
            activeMenuIds: newState,
        })
    }

    handleShowMessager = (data) => {
        this.messager.alert(data);
    }

    createContextValue = () => ({
        ...this.state,
        messager: this.messager,
        onSelectMenu: this.handleSetLastClickedMenu,
        onDeactivateMenu: this.handleDeactivateMenu,
        onShowMessager: this.handleShowMessager,
        onSetLoggedIn: (isLoggedIn) => { this.setState({ isLoggedIn }) },
        onLogout: () => {
            this.loginDialog.handleLogout(() => {
                this.setState({ isLoggedIn: false });
            });
        },
        onShowNotification: () => {
            this.notificationDialog.handleShowDialog();
        },
        onReadNotification: () => {
            this.handleReadNotification();
        }
    })

    render() {
        const { isLoggedIn } = this.state;
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <AppContext.Provider value={contextValue}>
                {children}
                {isLoggedIn && <NotificationDialog ref={c => this.notificationDialog = c} />}
                <LoginDialog ref={c => this.loginDialog = c} />
                <Messager ref={c => this.messager = c}></Messager>
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;