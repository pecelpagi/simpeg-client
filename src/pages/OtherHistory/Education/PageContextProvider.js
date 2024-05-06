import React, { Component } from 'react'
import * as apiServiceUtility from './api-service.utils';
import AppContext from '../../../AppContext';
import PageContext from './PageContext';

class PageContextProvider extends Component {
    static contextType = AppContext

    constructor(props) {
        super(props);

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
        this.setState({ pageSize: 10, pageNumber: 0 });
    }

    handleFetchData = ({ pageSize, pageNumber }) => {
        const { employeeId } = this.props;
        const { search } = this.state;

        const payload = {
            size: pageSize,
            page: pageNumber - 1,
            search,
            ...employeeId ? { employeeId } : {}
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

    handleShowFormDialog = (data = null) => {
        const { refCollections } = this.props;

        refCollections.formDialog.current.handleShowDialog(data);
    }

    handleSetSelectedData = (val) => {
        this.setState({ selectedData: val });
    }

    handleDeleteData = () => {
        const { refCollections } = this.props;
        const { selectedData } = this.state;
        const { id } = selectedData;

        this.context.messager.confirm({
            title: "Konfirmasi",
            msg: `Apakah Anda yakin ingin menghapus "${selectedData.employee.name}" ?`,
            result: r => {
              if (r) {
                apiServiceUtility.handleDeleteData({
                    messager: this.context.messager, refCollections,
                    selectedId: id, onRefreshData: this.handleRefreshData,
                    setState: this.setState,
                });
              }
            }
          });
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onSearchData: this.handleSearchData,
        onFetchData: this.handleFetchData,
        onRefreshData: this.handleRefreshData,
        onClearSearch: this.handleClearSearch,
        onSetSelectedData: this.handleSetSelectedData,
        onShowFormDialog: this.handleShowFormDialog,
        onDeleteData: this.handleDeleteData,
    });

    render() {
        const { children } = this.props;
        const contextValue = this.createContextValue();

        return (
            <PageContext.Provider
                value={contextValue}
            >
                {children}
            </PageContext.Provider>
        )
    }
}

export default PageContextProvider