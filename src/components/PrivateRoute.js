import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }) {
    const token = useSelector(app => app.token);

    if (!token) {
        return <Navigate to="/login" />
    }

    return children;
}