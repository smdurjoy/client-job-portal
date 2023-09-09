import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../app/hooks";

export default function PrivateRoute({children}) {
    const {token} = useAppSelector((state) => state.app);

    if (!token) {
        return <Navigate to="/login"/>
    }

    return children;
}