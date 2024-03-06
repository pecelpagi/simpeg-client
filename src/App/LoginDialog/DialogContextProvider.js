import React, { Component } from 'react';
import DialogContext from './DialogContext';

class DialogContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            formModel: {
                username: "test",
                password: "test",
            },
            rules: {},
        }
    }

    componentDidMount = () => {
        this.initRules();
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
                console.log('DEBUG-FORM: ', formModel);
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