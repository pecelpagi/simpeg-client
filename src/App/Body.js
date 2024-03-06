import React, { useContext, useEffect, useRef, Suspense } from 'react';
import { Tabs, TabPanel } from 'rc-easyui';
import AppContext from '../AppContext';
import pageSelector from './pageSelector';

const Body = () => {
    const tabElement = useRef();
    const { activeMenuIds, lastClickedMenu, onDeactivateMenu, onSelectMenu } = useContext(AppContext);

    const handleTabClose = ({ props }) => {
        onDeactivateMenu(props.id);
    }

    const handleTabSelect = ({ props }) => {
        onSelectMenu(props.id, true);
    }

    useEffect(() => {
        setTimeout(() => {
            const index = activeMenuIds.findIndex(x => x === lastClickedMenu);
            if (index > -1) tabElement.current.select(index);
        }, 100)
    }, [activeMenuIds, lastClickedMenu]);

    return (
        <Tabs ref={tabElement} style={{ height: '100%' }} border={false} scrollable onTabSelect={handleTabSelect} onTabClose={handleTabClose}>
            {activeMenuIds.map((menuId, i) => {
                if (!pageSelector[menuId]) {
                    return (
                        <TabPanel key={menuId} id={menuId} title="Not Found" closable>
                            <h1>Not Found</h1>
                        </TabPanel>
                    )
                }

                const { title, Component: PageComponent } = pageSelector[menuId];

                return (
                    <TabPanel key={menuId} id={menuId} title={title} closable={menuId !== 'DASHBOARD'}>
                        <Suspense fallback={<div>Loading ...</div>}>
                            <PageComponent />
                        </Suspense>
                    </TabPanel>
                );
            })}
        </Tabs>
    )
}

export default Body;
