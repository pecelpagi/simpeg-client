import { useRef } from "react";
import { staticData } from "../../utils";

export const useRefCollections = () => {
    const formDialog = useRef(null);

    return {
        formDialog,
    };
};

export const getRegardingObject = () => {
    let retval = {};

    staticData.regarding.forEach((x) => {
        retval = {
            ...retval,
            [x.value]: x.text
        }
    });

    return retval;
}