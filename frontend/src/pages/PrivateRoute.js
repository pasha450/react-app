import React, {useState} from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

const PrivateRoute = ({  Component }) => {
    const navigate = useNavigate();
    const token = Cookies.get('authToken');
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);
    return (
        <div>
        {(token!== '' && token !== undefined)? <Component/> :''}
        </div>
    )
}
    
export default PrivateRoute;
