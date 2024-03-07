import React, { useContext } from 'react'
import { Dialog, Form, FormField, TextBox, LinkButton } from 'rc-easyui';
import DialogContext from './DialogContext';

const ContentDialog = () => {
    const { formModel, rules, refCollections, onSubmit, onChange, selectedId } = useContext(DialogContext);

    return (
        <Dialog
            title={selectedId ? "Ubah Data" : "Tambah Data"}
            style={{ width: '400px' }}
            modal
            closable
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
                    <FormField name="code" label="Code :">
                        <TextBox value={formModel.code}></TextBox>
                    </FormField>
                    <FormField name="name" label="Name :" style={{ marginBottom: 10 }}>
                        <TextBox value={formModel.name}></TextBox>
                    </FormField>
                </div>
                <div className="dialog-button" style={{ padding: '10px 15px' }}>
                    <LinkButton iconCls="icon-save" onClick={onSubmit} style={{ width: 80 }}>Simpan</LinkButton>
                </div>
            </Form>
        </Dialog>
    )
}

export default ContentDialog