import React from 'react';
import PropTypes from 'prop-types';
import PageContextProvider from './PageContextProvider';
import View from './View';
import FormDialog from './FormDialog';
import { useRefCollections } from './utils';

const Education = ({ employeeId }) => {
  const refCollections = useRefCollections();

  return (
    <PageContextProvider {...{ refCollections, employeeId }}>
      <View />
      <FormDialog ref={refCollections.formDialog} />
    </PageContextProvider>
  )
}

Education.propTypes = {
  employeeId: PropTypes.number
};

Education.defaultProps = {
  employeeId: null
};

export default Education;