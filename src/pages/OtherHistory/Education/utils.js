import { useRef } from "react";

export const useRefCollections = () => {
    const formDialog = useRef(null);

    return {
        formDialog,
    };
};
