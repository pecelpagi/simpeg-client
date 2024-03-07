import React from 'react';
import { Messager } from 'rc-easyui';
import AppContext from './index';
import LoginDialog from './LoginDialog';
import { getToken } from '../utils';

class AppContextProvider extends React.Component {
    state = {
        activeMenuIds: ['DASHBOARD'],
        lastClickedMenu: 'DASHBOARD',
        isLoggedIn: !!getToken(),
    };

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
    })

    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <AppContext.Provider value={contextValue}>
                {children}
                <LoginDialog ref={c => this.loginDialog = c} />
                <Messager ref={c => this.messager = c}></Messager>
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;