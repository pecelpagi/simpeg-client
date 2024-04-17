import React from 'react'
import View from './View';
import PageContextProvider from './PageContextProvider';

const Departments = () => {
  return (
    <PageContextProvider>
      <View />
    </PageContextProvider>
  )
}

export default Departments;