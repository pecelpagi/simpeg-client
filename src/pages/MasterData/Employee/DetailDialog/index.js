import React from "react";
import { useRefCollections } from './utils';
import DialogContextProvider from './DialogContextProvider';
import ContentDialog from "./ContentDialog";

const DetailDialog = React.forwardRef((props, ref) => {
    const refCollections = useRefCollections();

    return (
        <DialogContextProvider
            ref={ref}
            {...{ refCollections }}
        >
            <ContentDialog />
        </DialogContextProvider>
    )
});

export default DetailDialog;