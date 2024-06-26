import React, { Component, useContext } from 'react';
import DialogContext from './DialogContext';
import * as apiServiceUtility from '../api-service.utils';
import { createFormModel, createFormRules } from './utils';
import AppContext from '../../../../AppContext';
import moment from 'moment';
import PageContext from '../PageContext';

class ClassComponent extends Component {
    static contextType = AppContext

    constructor() {
        super();
        this.state = {
            selectedId: '',
            formModel: createFormModel(),
            rules: {},
            selectedEmployee: null,
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
        const { employeeId } = this.props;
        const reformatFormModel = {
            ...formModel,
            birthdate: moment(formModel.birthdate).format('YYYY-MM-DD'),
            ...employeeId ? { employeeId } : {},
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

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        onShowEmployeeDialog: this.handleShowEmployeeDialog,
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

const DialogContextProvider = React.forwardRef((props, ref) => {
    const { children, ...restProps } = props;
    const { employeeId } = useContext(PageContext);

    return (
        <ClassComponent ref={ref} {...restProps} {...{ employeeId }}>
            {children}
        </ClassComponent>
    )
});

export default DialogContextProvider