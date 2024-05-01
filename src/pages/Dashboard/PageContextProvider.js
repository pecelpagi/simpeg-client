import React, { Component, useContext } from 'react'
import * as apiServiceUtility from './api-service.utils';
import AppContext from '../../AppContext';
import PageContext from './PageContext';

class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: {
                contractReminder: [],
                departmentRecap: [],
            },
        }
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleFetchData();
    }

    componentDidUpdate = (prevProps) => {
        const { isLoggedIn } = this.props;

        if (isLoggedIn !== prevProps.isLoggedIn) {
            this.handleFetchData();
        }
    }

    handleFetchData = () => {
        const { onShowMessager, isLoggedIn } = this.props;

        if (isLoggedIn) apiServiceUtility.handleFetchData({ onShowMessager, setState: this.setState });
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

const PageContextProvider = (props) => {
    const { children, ...restProps } = props;
    const appContext = useContext(AppContext);

    return (
        <ClassComponent {...restProps} {...appContext}>
            {children}
        </ClassComponent>
    )
}

export default PageContextProvider