import React from 'react';
import AppContext from './index';

class AppContextProvider extends React.Component {
    state = {
        activeMenuIds: ['DASHBOARD'],
        lastClickedMenu: 'DASHBOARD',
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

    createContextValue = () => ({
        ...this.state,
        onSelectMenu: this.handleSetLastClickedMenu,
        onDeactivateMenu: this.handleDeactivateMenu,
    })

    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;