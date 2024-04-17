import React from 'react'
import View from './View';
import PageContextProvider from './PageContextProvider';

const Dashboard = () => {
  return (
    <PageContextProvider>
      <View />
    </PageContextProvider>
  )
}

export default Dashboard;