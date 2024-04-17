import React, { Component } from 'react'
import * as apiServiceUtility from './api-service.utils';
import AppContext from '../../../AppContext';
import PageContext from './PageContext';

class PageContextProvider extends Component {
    static contextType = AppContext

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
        }
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleFetchData();
    }

    handleFetchData = () => {
        apiServiceUtility.handleFetchData({ onShowMessager: this.context.onShowMessager, setState: this.setState });
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onFetchData: this.handleFetchData
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