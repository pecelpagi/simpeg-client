import React, { Component } from 'react';
import DialogContext from './DialogContext';
import AppContext from '../../../../AppContext';

class DialogContextProvider extends Component {
    static contextType = AppContext

    constructor() {
        super();
        this.state = {
            selectedEmployee: null,
            employeeDetail: null,
            selectedParent: null,
        }
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        const { refCollections } = this.props;

        refCollections.dialog.current.close();
    }

    handleShowDialog = (data = null) => {
        const { refCollections } = this.props;

        this.setState({
            selectedEmployee: data,
        }, () => {
            refCollections.dialog.current.open();
            setTimeout(() => {
                refCollections.tabElement.current.select(0);
                setTimeout(() => {
                    refCollections.dialog.current.center();
                }, 100);
            }, 100);
        });
    }

    handleSetSelectedParent = (val) => {
        this.setState({ selectedParent: val });
    }

    createContextValue = () => ({
        ...this.state,
        ...this.props,
        onSetSelectedParent: this.handleSetSelectedParent,
    });

    render() {
        const { children } = this.props;
        const contextValue = this.createContextValue();

        return (
            <DialogContext.Provider value={contextValue}>
                {children}
            </DialogContext.Provider>
        )
    }
}

export default DialogContextProvider