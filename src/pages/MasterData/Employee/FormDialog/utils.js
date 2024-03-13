import { useRef } from 'react';

const createFormData = (data = null) => {
    return {
        code: {
            value: data ? data.code : null,
            rule: "required"
        },
        name: {
            value: data ? data.name : null,
            rule: "required"
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

    return {
        dialog,
        form
    };
};