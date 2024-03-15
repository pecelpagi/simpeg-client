import moment from 'moment';
import { useRef } from 'react';

const createFormData = (data = null) => {
  return {
    "employeeId": {
      "value": data && data.employee ? data.employee.id : null,
      "rule": "required"
    },
    "idNumber": {
      "value": data ? data.idNumber : null,
      "rule": "required"
    },
    "name": {
      "value": data ? data.name : null,
      "rule": "required"
    },
    "birthplace": {
      "value": data ? data.birthplace : null,
      "rule": "required"
    },
    "birthdate": {
      "value": data ? moment(data.birthdate, 'YYYY-MM-DD').toDate() : new Date(),
      "rule": "required"
    },
    "gender": {
      "value": data ? data.gender : null,
      "rule": "required"
    },
    "childSequence": {
      "value": data ? data.childSequence : null,
      "rule": "required"
    },
    "lastEducation": {
      "value": data ? data.lastEducation : null,
      "rule": "required"
    },
    "occupation": {
      "value": data ? data.occupation : null,
      "rule": "required"
    },
    "childStatus": {
      "value": data ? data.childStatus : null,
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

