import React, { useContext } from 'react'
import { Dialog, Form, FormField, TextBox, LinkButton } from 'rc-easyui';
import DialogContext from './DialogContext';

const ContentDialog = () => {
    const { formModel, rules, refCollections, onSubmit, onChange, selectedId, isSaving } = useContext(DialogContext);

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
                labelWidth={200}
                labelAlign="left"
                labelPosition="top"
                onChange={onChange}
            >
                <div style={{ padding: 15 }}>
                    <FormField name="code" label="Kode :" style={{ marginBottom: 10 }}>
                        <TextBox value={formModel.code} disabled={isSaving}></TextBox>
                    </FormField>
                    <FormField name="name" label="Nama Unit / Department :" style={{ marginBottom: 10 }}>
                        <TextBox value={formModel.name} disabled={isSaving}></TextBox>
                    </FormField>
                </div>
                <div className="dialog-button" style={{ padding: '10px 15px' }}>
                    <LinkButton iconCls="icon-save" onClick={onSubmit} style={{ width: 80 }} disabled={isSaving}>Simpan</LinkButton>
                </div>
            </Form>
        </Dialog>
    )
}

export default ContentDialog