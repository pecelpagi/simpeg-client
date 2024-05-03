import React, { useContext } from 'react'
import {
    Dialog, Form, FormField, TextBox, LinkButton,
    ComboBox, DateBox
} from 'rc-easyui';
import DialogContext from './DialogContext';
import Box from '../../../../components/Box';
import DepartmentDialog from '../../../../components/DepartmentDialog';
import { staticData } from '../../../../utils';
import EmployeePositionDialog from '../../../../components/EmployeePositionDialog';

const ContentDialog = () => {
    const {
        selectedEmployeePosition, selectedDepartment, formModel, rules, refCollections, onSubmit,
        onChange, selectedId, onShowDepartmentDialog, onShowEmployeePositionDialog,
        isSaving, onUploadFile, isUploading
    } = useContext(DialogContext);

    return (
        <React.Fragment>
            <Dialog
                draggable
                title={selectedId ? "Ubah Data" : "Tambah Data"}
                style={{ width: `${window.innerWidth - 100}px` }}
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
                            gridTemplateColumns: '1fr 1fr 1fr 1fr'
                        }}
                    >
                        <div style={{ padding: 15 }}>
                            <FormField name="idNumber" label="NIK :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.idNumber} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="name" label="Nama Karyawan :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.name} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="gender" label="Jenis Kelamin :" style={{ marginBottom: 10 }}>
                                <ComboBox value={formModel.gender} data={staticData.genders} disabled={isSaving}></ComboBox>
                            </FormField>
                            <FormField name="departmentId" label="Unit / Department :" style={{ marginBottom: 10 }}>
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
                                        <TextBox style={{ opacity: 0 }} value={formModel.departmentId} disabled></TextBox>
                                        <Box css={{
                                            position: 'absolute', top: 0, left: 0, height: 30,
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontWeight: 'bold',
                                        }}>{selectedDepartment ? selectedDepartment.name : '-'}</Box>
                                    </Box>
                                    <LinkButton onClick={onShowDepartmentDialog} iconCls="icon-search" disabled={isSaving}>Cari</LinkButton>
                                </Box>
                            </FormField>
                            <FormField name="entryDate" label="Tanggal Masuk :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.entryDate} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                        </div>
                        <div style={{ padding: 15 }}>
                            <FormField name="address" label="Alamat :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.address} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="city" label="Kota :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.city} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="originCity" label="Asal Kota :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.originCity} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="birthplace" label="Tempat Lahir :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.birthplace} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="birthdate" label="Tanggal Lahir :" style={{ marginBottom: 10 }}>
                                <DateBox value={formModel.birthdate} format="yyyy-MM-dd" disabled={isSaving}></DateBox>
                            </FormField>
                        </div>
                        <div style={{ padding: 15 }}>
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
                            <FormField name="religion" label="Agama :" style={{ marginBottom: 10 }}>
                                <ComboBox value={formModel.religion} data={staticData.religions} disabled={isSaving}></ComboBox>
                            </FormField>
                            <FormField name="citizen" label="Warga Negara :" style={{ marginBottom: 10 }}>
                                <ComboBox value={formModel.citizen} data={staticData.citizen} disabled={isSaving}></ComboBox>
                            </FormField>
                            <FormField name="maritalStatus" label="Status Perkawinan :" style={{ marginBottom: 10 }}>
                                <ComboBox value={formModel.maritalStatus} data={staticData.maritalStatus} disabled={isSaving}></ComboBox>
                            </FormField>
                            <FormField name="incomeTaxStatus" label="Status Pph :" style={{ marginBottom: 10 }}>
                                <ComboBox value={formModel.incomeTaxStatus} data={staticData.incomeTaxStatus} disabled={isSaving}></ComboBox>
                            </FormField>
                        </div>
                        <div style={{ padding: 15 }}>
                            <FormField name="bloodType" label="Golongan Darah :" style={{ marginBottom: 10 }}>
                                <ComboBox value={formModel.bloodType} data={staticData.bloodTypes} disabled={isSaving}></ComboBox>
                            </FormField>
                            <FormField name="bpjsHealth" label="No. BPJS Kesehatan :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.bpjsHealth} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="bpjsEmployment" label="No. BPJS Ketenagakerjaan :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.bpjsEmployment} disabled={isSaving}></TextBox>
                            </FormField>
                            <FormField name="bpjsRetirement" label="No. BPJS Pensiun :" style={{ marginBottom: 10 }}>
                                <TextBox value={formModel.bpjsRetirement} disabled={isSaving}></TextBox>
                            </FormField>
                            <Box
                                css={{
                                    marginTop: 15,
                                    display: 'grid',
                                    gap: 10,
                                    gridTemplateColumns: '1fr 180px'
                                }}
                            >
                                <img style={{ width: '100%' }} src={formModel.profilePicture ? `/api-file-uploader/uploads/${formModel.profilePicture}` : "/photo_placeholder.jpg"} alt="Profile" />
                                <Box
                                    css={{
                                        flex: '1 1 auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 10
                                    }}
                                >
                                    <Box
                                        css={{
                                            display: 'flex',
                                            width: '100%',
                                            gap: 5,
                                            borderRadius: 0,
                                            background: '#edf4ff',
                                            padding: '8px 10px',
                                            border: '1px dashed #95b8e7',
                                            color: '#0E2D5F',
                                            fontSize: 12,
                                            '& .l-btn-icon': {
                                                top: 0,
                                                position: 'relative',
                                                marginTop: 0,
                                            }
                                        }}
                                    ><i className='l-btn-icon icon-tip' /><span>Ukuran file maksimal <b>2MB</b></span></Box>
                                    <LinkButton style={{ width: '100%' }} onClick={() => { refCollections.fileUpload.current.click(); }} disabled={isUploading ? true : isSaving}>{isUploading ? 'Uploading...' : 'Upload Foto'}</LinkButton>
                                    {formModel.profilePicture && <LinkButton iconCls="icon-cancel" style={{ width: '100%' }} onClick={() => { onChange("profilePicture", ""); }}>Hapus Foto</LinkButton>}
                                    <input style={{ opacity: 0 }} accept="image/png,image/jpeg,image/jpg,image/webp" type="file" ref={refCollections.fileUpload} onChange={(e) => onUploadFile(e.target.files)} />
                                </Box>
                            </Box>
                        </div>
                    </Box>
                    <div className="dialog-button" style={{ padding: '10px 15px' }}>
                        <LinkButton iconCls="icon-save" onClick={onSubmit} style={{ width: 80 }} disabled={isSaving}>Simpan</LinkButton>
                    </div>
                </Form>
            </Dialog>
            <DepartmentDialog ref={refCollections.departmentDialog} onChoose={(val) => { onChange("departmentId", val); }} />
            <EmployeePositionDialog ref={refCollections.employeePositionDialog} onChoose={(val) => { onChange("employeePositionId", val); }} />
        </React.Fragment>
    )
}

export default ContentDialog