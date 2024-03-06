import { useRef } from 'react';

export const useRefCollections = () => {
    const form = useRef(null);

    return {
        form
    };
};