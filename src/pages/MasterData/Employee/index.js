import React from 'react'
import PageContextProvider from './PageContextProvider';
import View from './View';
import FormDialog from './FormDialog';
import { useRefCollections } from './utils';

const Employee = () => {
  const refCollections = useRefCollections();

  return (
    <PageContextProvider {...{ refCollections }}>
      <View />
      <FormDialog ref={refCollections.formDialog} />
    </PageContextProvider>
  )
}

export default Employee;