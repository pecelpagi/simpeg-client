import React from "react";
import { useRefCollections } from './utils';
import DialogContextProvider from './DialogContextProvider';
import ContentDialog from "./ContentDialog";

const LoginDialog = () => {
    const refCollections = useRefCollections();

    return (
        <DialogContextProvider
            {...{ refCollections }}
        >
            <ContentDialog />
        </DialogContextProvider>
    )
}

export default LoginDialog;