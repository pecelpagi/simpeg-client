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
        isSaving, isUploading, onUploadFile
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
                            <FormField name="attachment" label="Dokumen :" style={{ marginBottom: 10 }}>
                                <Box
                                    css={{
                                        position: 'relative',
                                        display: 'grid',
                                        alignItems: 'center',
                                        gridTemplateColumns: '1fr auto auto',
                                        gap: 8
                                    }}
                                >
                                    <Box css={{
                                        fontWeight: 'bold',
                                    }}>{formModel.attachment ? <a href={`/api-file-uploader/uploads/${formModel.attachment}`} target="_blank" rel="noreferrer">Klik untuk preview</a> : <span>-</span>}</Box>
                                    <LinkButton onClick={() => { refCollections.fileUpload.current.click(); }} disabled={isUploading ? true : isSaving}>{isUploading ? 'Uploading...' : 'Upload .pdf'}</LinkButton>
                                    {formModel.attachment && <LinkButton onClick={() => { onChange("attachment", ""); }} iconCls="icon-cancel" disabled={isSaving}>Hapus</LinkButton>}
                                    <input style={{ opacity: 1, position: 'absolute', top: 0, left: 0, zIndex: -1 }} accept="application/pdf" type="file" ref={refCollections.fileUpload} onChange={(e) => onUploadFile(e.target.files)} />
                                </Box>
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