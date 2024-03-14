import React, { useContext } from 'react'
import {
    Dialog, Form, FormField, TextBox, LinkButton,
    DateBox, NumberBox
} from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../../../../components/Box';
import EmployeeDialog from '../../../../components/EmployeeDialog';

const ContentDialog = () => {
    const {
        selectedEmployee, formModel, rules, refCollections, onSubmit,
        onChange, selectedId, onShowEmployeeDialog,
        isSaving,
    } = useContext(DialogContext);

    return (
        <React.Fragment>
            <Dialog
                draggable
                title={selectedId ? "Ubah Data" : "Tambah Data"}
                style={{ width: `700px` }}
                modal
                closable
                ref={refCollections.dialog}
            >
                <Form
                    ref={refCollections.form}
                    model={formModel}
                    rules={rules}
                    labelWidth={180}
                    labelAlign="left"
                    labelPosition="top"
                    onChange={onChange}
                >
                    <Box
                        css={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr'
                        }}
                    >
                        <div style={{ padding: 15 }}>
                            <FormField name="employeeId" label="Karyawan :" style={{ marginBottom: 10 }}>
                                <Box
                                    css={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr auto',
                                        gap: 8
                                    }}
                                >
                                    <Box
                                        css={{
                                            position: 'relative',
                                        }}
                                    >
                                        <TextBox style={{ opacity: 0 }} value={formModel.employeeId} disabled></TextBox>
                                        <Box css={{
                                            position: 'absolute', top: 0, left: 0, height: 30,
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontWeight: 'bold',
                                        }}>{selectedEmployee ? selectedEmployee.name : '-'}</Box>
                                    </Box>
                                    <LinkButton onClick={onShowEmployeeDialog} iconCls="icon-search" disabled={isSaving}>Cari</LinkButton>
                                </Box>
                            </FormField>
                            <FormField name="idNumber" label="NIK :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.idNumber} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="name" label="Nama Suami / Istri :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.name} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="birthplace" label="Tempat Lahir :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.birthplace} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="birthdate" label="Tanggal Lahir :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.birthdate} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                        </div>
                        <div style={{ padding: 15 }}>
                            <FormField name="dateOfMarriage" label="Tanggal Nikah :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.dateOfMarriage} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                            <FormField name="spouseSequence" label="Suami / Istri Ke :" style={{ marginBottom: 10 }}>
                                <NumberBox min={0} value={formModel.spouseSequence} disabled={isSaving}></NumberBox>
                            </FormField>
                            <FormField name="lastEducation" label="Pendidikan Akhir :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.lastEducation} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="occupation" label="Pekerjaan :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.occupation} disabled={isSaving}></TextBox>
                            </FormField>
                        </div>
                    </Box>
                    <div className="dialog-button" style={{ padding: '10px 15px' }}>
                        <LinkButton iconCls="icon-save" onClick={onSubmit} style={{ width: 80 }} disabled={isSaving}>Simpan</LinkButton>
                    </div>
                </Form>
            </Dialog>
            <EmployeeDialog ref={refCollections.employeeDialog} onChoose={(val) => { onChange("employeeId", val); }} />
        </React.Fragment>
    )
}

export default ContentDialog