import React from 'react'
import PageContextProvider from './PageContextProvider';
import View from './View';

const Department = () => {
  return (
    <PageContextProvider>
        <View />
    </PageContextProvider>
  )
}

export default Department;