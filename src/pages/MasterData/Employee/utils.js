import { useRef } from "react";
import { staticData } from "../../../utils";

export const useRefCollections = () => {
    const formDialog = useRef(null);
    const detailDialog = useRef(null);

    return {
        formDialog,
        detailDialog,
    };
};

export const getParentStatusObject = () => {
    let retval = {};

    staticData.parentStatus.forEach((x) => {
        retval = {
            ...retval,
            [x.value]: x.text
        }
    });

    return retval;
}