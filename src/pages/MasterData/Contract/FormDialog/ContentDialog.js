import React, { useContext } from 'react'
import {
    Dialog, Form, FormField, TextBox, LinkButton,
    ComboBox, DateBox, NumberBox
} from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../../../../components/Box';
import EmployeeDialog from '../../../../components/EmployeeDialog';
import { staticData } from '../../../../utils';

const ContentDialog = () => {
    const {
        selectedEmployee, formModel, rules, refCollections, onSubmit,
        onChange, selectedId, onShowEmployeeDialog,
        isSaving, onUploadFile, isUploading,
    } = useContext(DialogContext);

    return (
        <React.Fragment>
            <Dialog
                draggable
                title={selectedId ? "Ubah Data" : "Tambah Data"}
                style={{ width: `400px` }}
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
                        <FormField name="contractStatus" label="Status :" style={{ marginBottom: 10 }}>
                            <ComboBox value={formModel.contractStatus} data={staticData.contracts} disabled={isSaving}></ComboBox>
                        </FormField>
                        <FormField name="startDate" label="Tanggal Mulai :" style={{ marginBottom: 10 }}>
                            <DateBox value={formModel.startDate} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                        </FormField>
                        <FormField name="contractLengthMonth" label="Lama Kontrak (Bulan) :" style={{ marginBottom: 10 }}>
                            <NumberBox min={0} value={formModel.contractLengthMonth} disabled={isSaving ? isSaving : formModel.contractStatus === 'P'}></NumberBox>
                        </FormField>
                        <FormField name="attachment" label="Dokumen Kontrak :" style={{ marginBottom: 10 }}>
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
                                }}>{formModel.attachment ? <a href={`/api-file-uploader/uploads/${formModel.attachment}`} target="_blank" rel="noreferrer">Klik untuk preview dokumen</a> : <span>-</span>}</Box>
                                <LinkButton onClick={() => { refCollections.fileUpload.current.click(); }} disabled={isUploading ? true : isSaving}>{isUploading ? 'Uploading...' : 'Upload .pdf'}</LinkButton>
                                {formModel.attachment && <LinkButton onClick={() => { onChange("attachment", ""); }} iconCls="icon-cancel" disabled={isSaving}>Hapus</LinkButton>}
                                <input style={{ opacity: 1, position: 'absolute', top: 0, left: 0, zIndex: -1 }} accept="application/pdf" type="file" ref={refCollections.fileUpload} onChange={(e) => onUploadFile(e.target.files)} />
                            </Box>
                        </FormField>
                    </div>
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