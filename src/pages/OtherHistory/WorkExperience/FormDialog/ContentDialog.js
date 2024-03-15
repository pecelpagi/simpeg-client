import React, { useContext } from 'react'
import {
    Dialog, Form, FormField, TextBox, LinkButton,
    DateBox,
} from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../../../../components/Box';
import EmployeeDialog from '../../../../components/EmployeeDialog';
import EmployeePositionDialog from '../../../../components/EmployeePositionDialog';

const ContentDialog = () => {
    const {
        selectedEmployee, formModel, rules, refCollections, onSubmit,
        onChange, selectedId, onShowEmployeeDialog,
        isSaving, selectedEmployeePosition, onShowEmployeePositionDialog,
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
                            <FormField name="companyName" label="Nama Perusahaan :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.companyName} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="type" label="Jenis :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.type} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="location" label="Lokasi :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.location} disabled={isSaving}></TextBox>
                            </FormField>
                        </div>
                        <div style={{ padding: 15 }}>
                            <FormField name="department" label="Department :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.department} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="employeePositionId" label="Jabatan :" style={{ marginBottom: 10 }}>
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
                                        <TextBox style={{ opacity: 0 }} value={formModel.employeePositionId} disabled></TextBox>
                                        <Box css={{
                                                position: 'absolute', top: 0, left: 0, height: 30,
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontWeight: 'bold',
                                            }}>{selectedEmployeePosition ? selectedEmployeePosition.name : '-'}</Box>
                                    </Box>
                                    <LinkButton onClick={onShowEmployeePositionDialog} iconCls="icon-search" disabled={isSaving}>Cari</LinkButton>
                                </Box>
                            </FormField>
                            <FormField name="initialPeriod" label="Awal Bekerja :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.initialPeriod} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                            <FormField name="finalPeriod" label="Akhir Bekerja :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.finalPeriod} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                        </div>
                    </Box>
                    <div className="dialog-button" style={{ padding: '10px 15px' }}>
                        <LinkButton iconCls="icon-save" onClick={onSubmit} style={{ width: 80 }} disabled={isSaving}>Simpan</LinkButton>
                    </div>
                </Form>
            </Dialog>
            <EmployeeDialog ref={refCollections.employeeDialog} onChoose={(val) => { onChange("employeeId", val); }} />
            <EmployeePositionDialog ref={refCollections.employeePositionDialog} onChoose={(val) => { onChange("employeePositionId", val); }} />
        </React.Fragment>
    )
}

export default ContentDialog