import React, { useContext } from 'react'
import {
    Tabs, TabPanel
} from 'rc-easyui';
import DialogContext from './DialogContext';
import TabParent from '../../../../pages/FamilyHistory/Parent';
import TabMarriedCouple from '../../../../pages/FamilyHistory/MarriedCouple';
import TabChildren from '../../../../pages/FamilyHistory/Children';
import TabEducation from '../../../../pages/OtherHistory/Education';
import TabWorkExperience from '../../../../pages/OtherHistory/WorkExperience';
import TabContract from '../../../../pages/MasterData/Contract';
import TabWarningLetter from '../../../../pages/WarningLetter';
import TabProfile from './TabProfile';

const TabContent = () => {
    const {
        refCollections, selectedEmployee
    } = useContext(DialogContext);

    if (!selectedEmployee) return null;

    return (
        <Tabs ref={refCollections.tabElement} style={{ height: '100%' }} border={false} scrollable>
            <TabPanel title="Profile">
                <TabProfile />
            </TabPanel>
            <TabPanel title="Suami / Istri">
                <TabMarriedCouple employeeId={selectedEmployee.id} />
            </TabPanel>
            <TabPanel title="Anak">
                <TabChildren employeeId={selectedEmployee.id} />
            </TabPanel>
            <TabPanel title="Orang Tua">
                <TabParent employeeId={selectedEmployee.id} />
            </TabPanel>
            <TabPanel title="Pendidikan">
                <TabEducation employeeId={selectedEmployee.id} />
            </TabPanel>
            <TabPanel title="Pengalaman">
                <TabWorkExperience employeeId={selectedEmployee.id} />
            </TabPanel>
            <TabPanel title="Kontrak">
                <TabContract employeeId={selectedEmployee.id} />
            </TabPanel>
            <TabPanel title="Teguran / Peringatan">
                <TabWarningLetter employeeId={selectedEmployee.id} />
            </TabPanel>
        </Tabs>
    )
}

export default TabContent