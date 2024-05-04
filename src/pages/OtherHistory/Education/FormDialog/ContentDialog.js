import React, { useContext } from 'react'
import {
    Dialog, Form, FormField, TextBox, LinkButton,
} from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../../../../components/Box';
import EmployeeDialog from '../../../../components/EmployeeDialog';

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
                    labelWidth={210}
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
                            <FormField name="educationLevel" label="Tingkat :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.educationLevel} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="major" label="Jurusan :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.major} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="name" label="Nama Sekolah / Perguruan Tinggi :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.name} disabled={isSaving}></TextBox>
                            </FormField>
                        </div>
                        <div style={{ padding: 15 }}>
                            <FormField name="location" label="Lokasi :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.location} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="graduationYear" label="Tahun Lulus :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.graduationYear} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="certificateNumber" label="No. Ijazah :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.certificateNumber} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="attachment" label="Dokumen Ijazah :" style={{ marginBottom: 10 }}>
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