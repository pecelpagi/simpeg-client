import React, { useContext } from 'react'
import { Dialog, Form, FormField, TextBox, PasswordBox, LinkButton } from 'rc-easyui';
import DialogContext from './DialogContext';

const ContentDialog = () => {
    const { formModel, rules, refCollections, onSubmit, onChange } = useContext(DialogContext);

    return (
        <Dialog
            title="SIMPEG v1.0.0"
            style={{ width: '400px' }}
            modal
            closable={false}
        >
            <Form
                ref={refCollections.form}
                style={{ maxWidth: 500 }}
                model={formModel}
                rules={rules}
                labelWidth={120}
                labelAlign="left"
                onChange={onChange}
            >
                <div style={{ padding: 15 }}>
                    <FormField name="username" label="Username :">
                        <TextBox value={formModel.username}></TextBox>
                    </FormField>
                    <FormField name="password" label="Password :" style={{ marginBottom: 10 }}>
                        <PasswordBox value={formModel.password}></PasswordBox>
                    </FormField>
                </div>
                <div className="dialog-button" style={{ padding: '10px 15px' }}>
                    <LinkButton iconCls="icon-lock" onClick={onSubmit} style={{ width: 80 }}>Login</LinkButton>
                </div>
            </Form>
        </Dialog>
    )
}

export default ContentDialog