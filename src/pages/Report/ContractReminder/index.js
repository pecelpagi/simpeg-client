import React from 'react'
import View from './View';
import PageContextProvider from './PageContextProvider';

const ContractReminder = () => {
    return (
        <PageContextProvider>
            <View />
        </PageContextProvider>
    )
}

export default ContractReminder;