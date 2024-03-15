import { useRef } from "react";
import { staticData } from "../../../utils";

export const useRefCollections = () => {
    const formDialog = useRef(null);

    return {
        formDialog,
    };
};

export const getChildStatusObject = () => {
    let retval = {};

    staticData.childStatus.forEach((x) => {
        retval = {
            ...retval,
            [x.value]: x.text
        }
    });

    return retval;
}