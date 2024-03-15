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
    }
}

export default pageSelector