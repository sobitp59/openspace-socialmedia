import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const RequiresAuth = ({children, isLoggedIn}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn){
            navigate('/login')
        }
    }, [navigate, isLoggedIn])

    return (
    <div>
        {isLoggedIn && children}
    </div>
  )
}

export default RequiresAuth