import { useRef } from 'react';

export const useRefCollections = () => {
    const form = useRef(null);
    const dialog = useRef(null);

    return {
        dialog,
        form
    };
};