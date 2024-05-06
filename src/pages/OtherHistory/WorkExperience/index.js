import React from 'react'
import PropTypes from 'prop-types';
import PageContextProvider from './PageContextProvider';
import View from './View';
import FormDialog from './FormDialog';
import { useRefCollections } from './utils';

const WorkExperience = ({ employeeId }) => {
  const refCollections = useRefCollections();

  return (
    <PageContextProvider {...{ refCollections, employeeId }}>
      <View />
      <FormDialog ref={refCollections.formDialog} />
    </PageContextProvider>
  )
}

WorkExperience.propTypes = {
  employeeId: PropTypes.number
};

WorkExperience.defaultProps = {
  employeeId: null
};

export default WorkExperience;