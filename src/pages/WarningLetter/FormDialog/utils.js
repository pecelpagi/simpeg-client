import moment from 'moment';
import { useRef } from 'react';

const createFormData = (data = null) => {
  return {
    "employeeId": {
      "value": data && data.employee ? data.employee.id : null,
      "rule": "required"
    },
    "dateFacingHrd": {
      "value": data ? moment(data.dateFacingHrd, 'YYYY-MM-DD').toDate() : new Date(),
      "rule": "required"
    },
    "regarding": {
      "value": data ? data.regarding : null,
      "rule": "required"
    },
    "violationDate": {
      "value": data ? moment(data.violationDate, 'YYYY-MM-DD').toDate() : new Date(),
      "rule": "required"
    },
    "suspensionPeriod": {
      "value": data && data.suspensionPeriod ? moment(data.suspensionPeriod, 'YYYY-MM-DD').toDate() : null,
    },
    "violation1": {
      "value": data ? data.violation1 : null,
    },
    "violation2": {
      "value": data ? data.violation2 : null,
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
    employeeDialog,
    fileUpload,
  };
};

