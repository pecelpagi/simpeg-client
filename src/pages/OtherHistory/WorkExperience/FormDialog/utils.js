import moment from 'moment';
import { useRef } from 'react';

const createFormData = (data = null) => {
  return {
    "employeeId": {
      "value": data && data.employee ? data.employee.id : null,
      "rule": "required"
    },
    "companyName": {
      "value": data ? data.companyName : null,
      "rule": "required"
    },
    "type": {
      "value": data ? data.type : null,
      "rule": "required"
    },
    "location": {
      "value": data ? data.location : null,
      "rule": "required"
    },
    "department": {
      "value": data ? data.department : null,
      "rule": "required"
    },
    "employeePositionId": {
      "value": data && data.employeePosition ? data.employeePosition.id : null,
      "rule": "required"
    },
    "initialPeriod": {
      "value": data ? moment(data.initialPeriod, 'YYYY-MM-DD').toDate() : new Date(),
      "rule": "required"
    },
    "finalPeriod": {
      "value": data ? moment(data.finalPeriod, 'YYYY-MM-DD').toDate() : new Date(),
      "rule": "required"
    },
  }
}

export const createFormModel = (data = null) => {
  const formData = createFormData(data);
  let retval = {};

  Object.keys(formData).forEach((key) => {
    retval = {
      ...retval,
      [key]: formData[key].value
    }
  });

  return retval;
}

export const createFormRules = () => {
  const formData = createFormData();
  let retval = {};

  Object.keys(formData).forEach((key) => {
    retval = {
      ...retval,
      [key]: formData[key].rule
    }
  });

  return retval;
}

export const useRefCollections = () => {
  const form = useRef(null);
  const dialog = useRef(null);
  const employeeDialog = useRef(null);
  const employeePositionDialog = useRef(null);

  return {
    dialog,
    form,
    employeeDialog,
    employeePositionDialog,
  };
};

