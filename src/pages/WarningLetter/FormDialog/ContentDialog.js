import React, { useContext } from 'react'
import {
    Dialog, Form, FormField, TextBox, LinkButton,
    DateBox, ComboBox
} from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../../../components/Box';
import EmployeeDialog from '../../../components/EmployeeDialog';
import { staticData } from '../../../utils';

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
                            <FormField name="dateFacingHrd" label="Tanggal Menghadap HRD :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.dateFacingHrd} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                            <FormField name="regarding" label="Perihal :" style={{ marginBottom: 10 }}>
                                <ComboBox value={formModel.regarding} data={staticData.regarding} disabled={isSaving}></ComboBox>
                            </FormField>
                            <FormField name="violationDate" label="Tanggal Pelanggaran :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.violationDate} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                        </div>
                        <div style={{ padding: 15 }}>
                            <FormField name="violation1" label="Pelanggaran 1 :" style={{ marginBottom: 10 }}>
                                <TextBox multiline style={{ width: '100%', height: 40 }} value={formModel.violation1} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="violation2" label="Pelanggaran 2 :" style={{ marginBottom: 10 }}>
                                <TextBox multiline style={{ width: '100%', height: 40 }} value={formModel.violation2} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="suspensionPeriod" label="Masa Berlaku Skorsing :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.suspensionPeriod} format="yyyy-MM-dd" disabled={formModel.regarding !== 'S' ? true : isSaving}></DateBox>
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