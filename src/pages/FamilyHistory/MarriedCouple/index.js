import React from 'react';
import PropTypes from 'prop-types';
import PageContextProvider from './PageContextProvider';
import View from './View';
import FormDialog from './FormDialog';
import { useRefCollections } from './utils';

const MarriedCouple = ({ employeeId }) => {
  const refCollections = useRefCollections();

  return (
    <PageContextProvider {...{ refCollections, employeeId }}>
      <View />
      <FormDialog ref={refCollections.formDialog} />
    </PageContextProvider>
  )
}

MarriedCouple.propTypes = {
  employeeId: PropTypes.number
};

MarriedCouple.defaultProps = {
  employeeId: null
};

export default MarriedCouple;