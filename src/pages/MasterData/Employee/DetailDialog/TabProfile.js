import React, { useContext } from 'react'
import DialogContext from './DialogContext';
import Box from '../../../../components/Box';
import moment from 'moment';

const TabProfile = () => {
    const {
        selectedEmployee
    } = useContext(DialogContext);

    console.log('DEBUG-DETAIL: ', selectedEmployee);

    return (
        <Box
            css={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                padding: 20,
            }}
        >
            <Box
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 15
                }}
            >
                <img style={{ width: '80%', border: '1px solid #003666' }} src={selectedEmployee.profilePicture ? `/api-file-uploader/uploads/${selectedEmployee.profilePicture}` : "/photo_placeholder.jpg"} alt="Profile" />
                <Box>
                    <Box>NIK :</Box>
                    <b>{selectedEmployee.idNumber}</b>
                </Box>
                <Box>
                    <Box>Nama Karyawan :</Box>
                    <b>{selectedEmployee.name}</b>
                </Box>
                <Box>
                    <Box>Umur :</Box>
                    <b>{moment().diff(selectedEmployee.birthdate, 'years')} Tahun</b>
                </Box>
            </Box>
            <Box
                css={{
                    display: 'grid',
                    gap: 30,
                    gridTemplateColumns: '1fr 1fr'
                }}
            >
                <Box
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 15
                    }}
                >
                    <Box>
                        <Box>Jenis Kelamin :</Box>
                        <b>{selectedEmployee.gender}</b>
                    </Box>
                    <Box>
                        <Box>Unit / Department :</Box>
                        <b>{selectedEmployee.department.name}</b>
                    </Box>
                    <Box>
                        <Box>Tanggal Masuk :</Box>
                        <b>{selectedEmployee.entryDate}</b>
                    </Box>
                    <Box>
                        <Box>Alamat :</Box>
                        <b>{selectedEmployee.address}</b>
                    </Box>
                    <Box>
                        <Box>Kota :</Box>
                        <b>{selectedEmployee.city}</b>
                    </Box>
                    <Box>
                        <Box>Asal Kota :</Box>
                        <b>{selectedEmployee.originCity}</b>
                    </Box>
                    <Box>
                        <Box>Tempat Lahir :</Box>
                        <b>{selectedEmployee.birthplace}</b>
                    </Box>
                    <Box>
                        <Box>Tanggal Lahir :</Box>
                        <b>{selectedEmployee.birthdate}</b>
                    </Box>
                    <Box>
                        <Box>Jabatan :</Box>
                        <b>{selectedEmployee.employeePosition.name}</b>
                    </Box>
                </Box>
                <Box
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 15
                    }}
                >
                    <Box>
                        <Box>Agama :</Box>
                        <b>{selectedEmployee.religion}</b>
                    </Box>
                    <Box>
                        <Box>Warga Negara :</Box>
                        <b>{selectedEmployee.citizen}</b>
                    </Box>
                    <Box>
                        <Box>Status Perkawinan :</Box>
                        <b>{selectedEmployee.maritalStatus}</b>
                    </Box>
                    <Box>
                        <Box>Status Pph :</Box>
                        <b>{selectedEmployee.incomeTaxStatus}</b>
                    </Box>
                    <Box>
                        <Box>Golongan Darah :</Box>
                        <b>{selectedEmployee.bloodType}</b>
                    </Box>
                    <Box>
                        <Box>No. BPJS Kesehatan :</Box>
                        <b>{selectedEmployee.bpjsHealth}</b>
                    </Box>
                    <Box>
                        <Box>No. BPJS Ketenagakerjaan :</Box>
                        <b>{selectedEmployee.bpjsEmployment}</b>
                    </Box>
                    <Box>
                        <Box>No. BPJS Pensiun :</Box>
                        <b>{selectedEmployee.bpjsRetirement}</b>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TabProfile