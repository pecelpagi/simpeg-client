import React, { lazy } from 'react';

const pageSelector = {
    'DASHBOARD': {
        title: 'Dashboard',
        Component: lazy(() => import('../pages/Dashboard'))
    },
    '1.1': {
        title: 'Unit / Department',
        Component: lazy(() => import('../pages/MasterData/Department'))
    },
    '1.2': {
        title: 'Karyawan',
        Component: lazy(() => import('../pages/MasterData/Employee'))
    },
    '1.3': {
        title: 'Kontrak',
        Component: lazy(() => import('../pages/MasterData/Contract'))
    },
    '2.1': {
        title: 'Suami / Istri',
        Component: lazy(() => import('../pages/FamilyHistory/MarriedCouple'))
    },
    '2.2': {
        title: 'Anak',
        Component: lazy(() => import('../pages/FamilyHistory/Children'))
    },
    '2.3': {
        title: 'Orang Tua',
        Component: lazy(() => import('../pages/FamilyHistory/Parent'))
    },
    '3.1': {
        title: 'Pendidikan',
        Component: lazy(() => import('../pages/OtherHistory/Education'))
    },
    '3.2': {
        title: 'Pengalaman Kerja',
        Component: lazy(() => import('../pages/OtherHistory/WorkExperience'))
    },
    '4.1': {
        title: 'Teguran / Peringatan',
        Component: lazy(() => import('../pages/WarningLetter'))
    },
    '5.1': {
        title: 'Rekapitulasi Jabatan',
        Component: lazy(() => import('../pages/Recapitulation/EmployeePositions'))
    },
    '5.2': {
        title: 'Rekapitulasi Pendidikan',
        Component: lazy(() => import('../pages/Recapitulation/Educations'))
    },
    '5.3': {
        title: 'Rekapitulasi Warga Negara',
        Component: lazy(() => import('../pages/Recapitulation/EmployeeCitizen'))
    },
    '5.4': {
        title: 'Rekapitulasi Agama',
        Component: lazy(() => import('../pages/Recapitulation/EmployeeReligion'))
    },
    '5.5': {
        title: 'Rekapitulasi Unit',
        Component: lazy(() => import('../pages/Recapitulation/Departments'))
    },
    '6.1': {
        title: 'Kontrak Reminder',
        Component: lazy(() => import('../pages/Report/ContractReminder'))
    },
}

export default pageSelector