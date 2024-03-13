import React, { Component } from 'react';
import DialogContext from './DialogContext';
import AppContext from '../../AppContext';
import * as apiServiceUtility from './api-service.utils';

class DialogContextProvider extends Component {
    static contextType = AppContext

    constructor() {
        super();
        this.state = {
            formModel: {
                username: "test",
                password: "test",
            },
            isSaving: false,
            rules: {},
        }
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.initRules();
        this.checkIsLoggedIn();
    }

    checkIsLoggedIn = () => {
        const { refCollections } = this.props;

        if (this.context.isLoggedIn) {
            refCollections.dialog.current.close();
        }
    }

    handleLogout = (onSuccessCallbackFn = () => { }) => {
        const { refCollections } = this.props;

        apiServiceUtility.handleLogout({ onShowMessager: this.context.onShowMessager, refCollections }, onSuccessCallbackFn);
    }

    initRules = () => {
        this.setState({
            rules: {
                username: "required",
                password: "required"
            },
        })
    }

    handleChange = (name, value) => {
        const { formModel } = this.state

        const newFormModel = {
            ...formModel,
            [name]: value,
        }

        this.setState({ formModel: newFormModel });
    }

    handleSubmit = () => {
        const { formModel } = this.state;
        const { refCollections } = this.props;

        refCollections.form.current.validate(errors => {
            if (errors) {
                console.log('DEBUG-ERRORS: ', errors);
            } else {
                apiServiceUtility.handleLogin({
                    onShowMessager: this.context.onShowMessager,
                    refCollections, formModel, setState: this.setState
                }, () => {
                    this.context.onSetLoggedIn(true);
                });
            }
        });
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit
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