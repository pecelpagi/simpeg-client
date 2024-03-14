import React from "react";
import { useRefCollections } from './utils';
import DialogContextProvider from './DialogContextProvider';
import ContentDialog from "./ContentDialog";

const DepartmentDialog = React.forwardRef((props, ref) => {
    const { onChoose } = props;
    const refCollections = useRefCollections();

    return (
        <DialogContextProvider
            ref={ref}
            {...{ refCollections, onChoose }}
        >
            <ContentDialog />
        </DialogContextProvider>
    )
});

export default DepartmentDialog;