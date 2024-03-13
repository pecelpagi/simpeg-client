import React, { Component } from 'react';
import DialogContext from './DialogContext';
import * as apiServiceUtility from '../api-service.utils';
import { createFormModel, createFormRules } from './utils';
import AppContext from '../../../../AppContext';

class DialogContextProvider extends Component {
    static contextType = AppContext

    constructor() {
        super();
        this.state = {
            selectedId: '',
            formModel: createFormModel(),
            rules: {},
        }
    }

    componentDidMount = () => {
        this.initRules();
    }

    initRules = () => {
        const { refCollections } = this.props;

        refCollections.dialog.current.close();
        this.setState({
            rules: createFormRules(),
        });
    }

    handleShowDialog = (data = null) => {
        const { refCollections } = this.props;

        this.setState({
           selectedId: data ? data.id : null,
           formModel: createFormModel(data) 
        }, () => {
            refCollections.dialog.current.open();
        });
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
        const { formModel, selectedId } = this.state;
        const { refCollections, onRefreshData } = this.props;

        refCollections.form.current.validate(errors => {
            if (errors) {
                console.log('DEBUG-ERRORS: ', errors);
            } else {
                if (!selectedId) {
                    apiServiceUtility.handleCreateData({ onShowMessager: this.context.onShowMessager, refCollections, formModel, onRefreshData });
                } else {
                    apiServiceUtility.handleUpdateData({ onShowMessager: this.context.onShowMessager, refCollections, formModel, selectedId, onRefreshData });
                }
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