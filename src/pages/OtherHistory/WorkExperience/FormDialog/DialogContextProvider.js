import React, { Component } from 'react';
import DialogContext from './DialogContext';
import * as apiServiceUtility from '../api-service.utils';
import { createFormModel, createFormRules } from './utils';
import AppContext from '../../../../AppContext';
import moment from 'moment';

class DialogContextProvider extends Component {
    static contextType = AppContext

    constructor() {
        super();
        this.state = {
            selectedId: '',
            formModel: createFormModel(),
            rules: {},
            selectedEmployee: null,
            selectedEmployeePosition: null,
            isSaving: false,
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
            formModel: createFormModel(data),
            selectedEmployee: data && data.employee ? data.employee : null,
            selectedEmployeePosition: data && data.employeePosition ? data.employeePosition : null
        }, () => {
            refCollections.dialog.current.open();
            setTimeout(() => {
                refCollections.dialog.current.center();
            }, 100);
        });
    }

    handleChange = (name, value) => {
        const { formModel } = this.state

        let newValue = value;
        let newState = {};

        if (name === 'employeeId' && value && typeof value === 'object') {
            newValue = value.id;
            newState = {
                selectedEmployee: value,
            }
        } else if (name === 'employeePositionId' && value && typeof value === 'object') {
            newValue = value.id;
            newState = {
                selectedEmployeePosition: value,
            }
        }

        let newFormModel = {
            ...formModel,
            [name]: newValue,
        }

        this.setState({ formModel: newFormModel, ...newState });
    }

    handleSubmit = () => {
        const { formModel, selectedId } = this.state;
        const { refCollections, onRefreshData } = this.props;

        refCollections.form.current.validate(errors => {
            if (errors) {
                console.log('DEBUG-ERRORS: ', errors);
            } else {
                this.processingSubmitData({ formModel, selectedId, refCollections, onRefreshData });
            }
        });
    }

    processingSubmitData = async ({ formModel, selectedId, refCollections, onRefreshData }) => {
        const reformatFormModel = {
            ...formModel,
            initialPeriod: moment(formModel.initialPeriod).format('YYYY-MM-DD'),
            finalPeriod: moment(formModel.finalPeriod).format('YYYY-MM-DD'),
        }

        this.setState({ isSaving: true });

        if (!selectedId) {
            await apiServiceUtility.handleCreateData({ onShowMessager: this.context.onShowMessager, refCollections, formModel: reformatFormModel, onRefreshData });
        } else {
            await apiServiceUtility.handleUpdateData({ onShowMessager: this.context.onShowMessager, refCollections, formModel: reformatFormModel, selectedId, onRefreshData });
        }

        this.setState({ isSaving: false });
    }

    handleShowEmployeeDialog = () => {
        const { refCollections } = this.props;

        refCollections.employeeDialog.current.handleShowDialog();
    }

    handleShowEmployeePositionDialog = () => {
        const { refCollections } = this.props;

        refCollections.employeePositionDialog.current.handleShowDialog();
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        onShowEmployeeDialog: this.handleShowEmployeeDialog,
        onShowEmployeePositionDialog: this.handleShowEmployeePositionDialog

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