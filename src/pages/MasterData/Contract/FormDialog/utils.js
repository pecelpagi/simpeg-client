import moment from 'moment';
import { useRef } from 'react';

const createFormData = (data = null) => {
  return {
    "employeeId": {
      "value": data && data.employee ? data.employee.id : null,
      "rule": "required"
    },
    "contractStatus": {
      "value": data ? data.contractStatus : null,
      "rule": "required"
    },
    "startDate": {
      "value": data ? moment(data.startDate, 'YYYY-MM-DD').toDate() : new Date(),
      "rule": "required"
    },
    "contractLengthMonth": {
      "value": data ? data.contractLengthMonth : null,
      "rule": "required"
    },
    "attachment": {
      "value": data ? data.attachment : null,
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
  const fileUpload = useRef(null);

  return {
    dialog,
    form,
    fileUpload,
    employeeDialog,
  };
};

