import React from 'react';
import PropTypes from 'prop-types';
import PageContextProvider from './PageContextProvider';
import View from './View';
import FormDialog from './FormDialog';
import { useRefCollections } from './utils';

const Parent = ({ employeeId }) => {
  const refCollections = useRefCollections();

  return (
    <PageContextProvider {...{ refCollections, employeeId }}>
      <View />
      <FormDialog ref={refCollections.formDialog} />
    </PageContextProvider>
  );
}

Parent.propTypes = {
  employeeId: PropTypes.number
};

Parent.defaultProps = {
  employeeId: null
};

export default Parent;