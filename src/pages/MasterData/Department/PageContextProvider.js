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
        }
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.setState({ pageSize: 10, pageNumber: 0 });
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

    handleSearchData = ({ value }) => {
        const { pageSize } = this.state;

        this.setState({ search: value }, () => {
            this.handleFetchData({ pageSize, pageNumber: 1 });
        });
    }

    handleClearSearch = () => {
        this.handleSearchData({ value: '' });
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onSearchData: this.handleSearchData,
        onFetchData: this.handleFetchData,
        onClearSearch: this.handleClearSearch
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