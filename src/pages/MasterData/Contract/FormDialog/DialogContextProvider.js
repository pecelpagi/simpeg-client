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
            isSaving: false,
            isUploading: false,
        }
    }

    setState = this.setState.bind(this);

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
        }, () => {
            refCollections.dialog.current.open();
            setTimeout(() => {
                refCollections.dialog.current.center();
            }, 100);
        });
    }

    handleChange = (name, value) => {
        const { refCollections } = this.props;
        const { formModel } = this.state

        let newValue = value;
        let newState = {};

        if (name === 'employeeId' && value && typeof value === 'object') {
            newValue = value.id;
            newState = {
                selectedEmployee: value,
            }
        }

        let newFormModel = {
            ...formModel,
            [name]: newValue,
        }

        if (name === 'contractStatus' && value === 'P') {
            newFormModel = {
                ...newFormModel,
                contractLengthMonth: 0
            }
        }

        this.setState({ formModel: newFormModel, ...newState }, () => {
            if (name === 'attachment') {
                refCollections.fileUpload.current.value = null;
            }
        });
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
            birthdate: moment(formModel.birthdate).format('YYYY-MM-DD'),
            entryDate: moment(formModel.entryDate).format('YYYY-MM-DD')
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

    handleUploadFile = (files) => {
        apiServiceUtility.handleUploadFile({ messager: this.context.messager, files, onChange: this.handleChange, setState: this.setState });
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        onShowEmployeeDialog: this.handleShowEmployeeDialog,
        onUploadFile: this.handleUploadFile,
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