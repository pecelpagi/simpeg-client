import React, { useContext } from 'react';
import { Tree } from 'rc-easyui';
import AppContext from '../AppContext';

const menuData = [
    {
        id: '1',
        text: "Master Data",
        children: [
            { id: '1.1', text: "Unit / Department" },
            { id: '1.2', text: "Karyawan" },
            { id: '1.3', text: "Kontrak" },
        ],
    },
    {
        id: '2', 
        text: "Riwayat Keluarga",
        state: "closed",
        children: [
            { id: '2.1', text: "Suami / Istri" },
            { id: '2.2', text: "Anak" },
            { id: '2.3', text: "Orang Tua" }
        ]
    },
    {
        id: '3', 
        text: "Riwayat Lain",
        state: "closed",
        children: [
            { id: '3.1', text: "Pendidikan" },
            { id: '3.2', text: "Pengalaman Kerja" }
        ]
    },
    {
        id: '4', 
        text: "Sanksi /  Pembinaan",
        state: "closed",
        children: [
            { id: '4.1', text: "Teguran / Peringatan" }
        ]
    },
    {
        id: '5', 
        text: "Rekapitulasi",
        state: "closed",
        children: [
            { id: '5.1', text: "Jabatan" },
            { id: '5.2', text: "Pendidikan" },
            { id: '5.3', text: "WN" },
            { id: '5.4', text: "Agama" },
            { id: '5.5', text: "Unit" },
        ]
    },
    {
        id: '6', 
        text: "Laporan",
        state: "closed",
        children: [
            { id: '6.1', text: "ST / SP / Skorsing" },
            { id: '6.2', text: "Kontrak Reminder" },
        ]
    },
    {
        id: '7', 
        text: "Pengaturan",
        state: "closed",
        children: [
            { id: '7.1', text: "Instansi / Perusahaan" },
            { id: '7.2', text: "User" },
        ]
    },
];

const Menu = () => {
    const { onSelectMenu } = useContext(AppContext);

    return (
        <Tree data={menuData} onSelectionChange={onSelectMenu}></Tree>
    )
}

export default Menu;