import React, { useContext } from 'react'
import { Dialog, Form, FormField, TextBox, PasswordBox, LinkButton } from 'rc-easyui';
import DialogContext from './DialogContext';

const ContentDialog = () => {
    const { isSaving, formModel, rules, refCollections, onSubmit, onChange } = useContext(DialogContext);

    return (
        <Dialog
            draggable
            title="SIMPEG v1.0.0"
            style={{ width: '400px' }}
            modal
            closable={false}
            ref={refCollections.dialog}
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
                        <TextBox value={formModel.username} disabled={isSaving}></TextBox>
                    </FormField>
                    <FormField name="password" label="Password :" style={{ marginBottom: 10 }}>
                        <PasswordBox value={formModel.password} disabled={isSaving}></PasswordBox>
                    </FormField>
                </div>
                <div className="dialog-button" style={{ padding: '10px 15px' }}>
                    <LinkButton iconCls="icon-lock" onClick={onSubmit} style={{ width: 'auto' }} disabled={isSaving}>{!isSaving ? 'Login' : 'Processing ...'}</LinkButton>
                </div>
            </Form>
        </Dialog>
    )
}

export default ContentDialog