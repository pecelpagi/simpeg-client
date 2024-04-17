import React from 'react'
import View from './View';
import PageContextProvider from './PageContextProvider';

const EmployeePositions = () => {
  return (
    <PageContextProvider>
      <View />
    </PageContextProvider>
  )
}

export default EmployeePositions;