import React from 'react';
import { Navigate } from "react-router-dom";

function RequireAuth({element,redirectTo}) {
    return localStorage.getItem('token')
        ? element 
        : <Navigate to={redirectTo} />
}

export default RequireAuth