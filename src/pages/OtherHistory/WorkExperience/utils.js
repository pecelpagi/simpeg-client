import { useRef } from "react";
import { staticData } from "../../../utils";

export const useRefCollections = () => {
    const formDialog = useRef(null);

    return {
        formDialog,
    };
};