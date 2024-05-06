import { useRef } from 'react';

export const useRefCollections = () => {
  const dialog = useRef(null);
  const tabElement = useRef(null);

  return {
    dialog,
    tabElement,
  };
};

