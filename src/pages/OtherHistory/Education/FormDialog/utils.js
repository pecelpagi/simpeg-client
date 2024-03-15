import { useRef } from 'react';

const createFormData = (data = null) => {
  return {
    "employeeId": {
      "value": data && data.employee ? data.employee.id : null,
      "rule": "required"
    },
    "educationLevel": {
      "value": data ? data.educationLevel : null,
      "rule": "required"
    },
    "major": {
      "value": data ? data.major : null,
      "rule": "required"
    },
    "name": {
      "value": data ? data.name : null,
      "rule": "required"
    },
    "location": {
      "value": data ? data.location : null,
      "rule": "required"
    },
    "graduationYear": {
      "value": data ? data.graduationYear : null,
      "rule": "required"
    },
    "certificateNumber": {
      "value": data ? data.certificateNumber : null,
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

  return {
    dialog,
    form,
    employeeDialog,
  };
};

