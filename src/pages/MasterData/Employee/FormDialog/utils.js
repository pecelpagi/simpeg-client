import moment from 'moment';
import { useRef } from 'react';

const createFormData = (data = null) => {
  return {
    "idNumber": {
      "value": data ? data.idNumber : null,
      "rule": "required"
    },
    "name": {
      "value": data ? data.name : null,
      "rule": "required"
    },
    "gender": {
      "value": data ? data.gender : null,
      "rule": "required"
    },
    "departmentId": {
      "value": data && data.department ? data.department.id : null,
      "rule": "required"
    },
    "entryDate": {
      "value": data ? moment(data.entryDate, 'YYYY-MM-DD').toDate() : new Date(),
      "rule": "required"
    },
    "address": {
      "value": data ? data.address : null,
      "rule": "required"
    },
    "city": {
      "value": data ? data.city : null,
      "rule": "required"
    },
    "originCity": {
      "value": data ? data.originCity : null,
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
    "employeePositionId": {
      "value": data && data.employeePosition ? data.employeePosition.id : null,
      "rule": "required"
    },
    "religion": {
      "value": data ? data.religion : null,
      "rule": "required"
    },
    "citizen": {
      "value": data ? data.citizen : null,
      "rule": "required"
    },
    "maritalStatus": {
      "value": data ? data.maritalStatus : null,
      "rule": "required"
    },
    "incomeTaxStatus": {
      "value": data ? data.incomeTaxStatus : null,
      "rule": "required"
    },
    "bloodType": {
      "value": data ? data.bloodType : null,
    },
    "bpjsHealth": {
      "value": data ? data.bpjsHealth : null
    },
    "bpjsEmployment": {
      "value": data ? data.bpjsEmployment : null
    },
    "bpjsRetirement": {
      "value": data ? data.bpjsRetirement : null
    },
    "profilePicture": {
      "value": data ? data.profilePicture : null
    }
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
  const departmentDialog = useRef(null);
  const employeePositionDialog = useRef(null);

  return {
    dialog,
    form,
    departmentDialog,
    employeePositionDialog,
  };
};

