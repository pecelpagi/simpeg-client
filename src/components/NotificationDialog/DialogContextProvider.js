import React, { Component } from 'react';
import DialogContext from './DialogContext';
import AppContext from '../../AppContext';
import * as apiServiceUtility from './api-service.utils';

class DialogContextProvider extends Component {
    static contextType = AppContext

    constructor() {
        super();
        this.state = {
            total: 0,
            pageNumber: 0,
            pageSize: 0,
            data: [],
            loading: false,
            search: '',
            selectedData: null,
        }
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleDidMount();
    }

    handleDidMount = () => {
        const { refCollections } = this.props;

        this.setState({ pageSize: 10, pageNumber: 0 }, () => {
            refCollections.dialog.current.close();
            this.handleRefreshData();
        });
    }

    handleFetchData = ({ pageSize, pageNumber }) => {
        const { search } = this.state;

        const payload = {
            size: pageSize,
            page: pageNumber - 1,
            search,
        };

        apiServiceUtility.handleFetchData({ payload, onShowMessager: this.context.onShowMessager, setState: this.setState });
    }

    handleRefreshData = () => {
        const { pageSize, pageNumber } = this.state;

        this.handleFetchData({ pageSize, pageNumber: pageNumber + 1 });
    }

    handleSearchData = ({ value }) => {
        const { pageSize } = this.state;

        this.setState({ search: value, selectedData: null }, () => {
            this.handleFetchData({ pageSize, pageNumber: 1 });
        });
    }

    handleClearSearch = () => {
        this.handleSearchData({ value: '' });
    }

    handleShowDialog = () => {
        const { refCollections } = this.props;
        this.handleRefreshData();
        refCollections.dialog.current.open();
        setTimeout(() => {
            refCollections.dialog.current.center();
        }, 100);
        this.context.onReadNotification();
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onSearchData: this.handleSearchData,
        onFetchData: this.handleFetchData,
        onRefreshData: this.handleRefreshData,
        onClearSearch: this.handleClearSearch,
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