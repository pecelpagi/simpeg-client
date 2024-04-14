import React, { useContext } from "react";
import { useRefCollections } from './utils';
import DialogContextProvider from './DialogContextProvider';
import ContentDialog from "./ContentDialog";
import PageContext from "../PageContext";

const FormDialog = React.forwardRef((props, ref) => {
    const refCollections = useRefCollections();
    const { onRefreshData } = useContext(PageContext);

    return (
        <DialogContextProvider
            ref={ref}
            {...{ refCollections, onRefreshData }}
        >
            <ContentDialog />
        </DialogContextProvider>
    )
});

export default FormDialog;