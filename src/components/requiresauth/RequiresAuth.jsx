import React from 'react';
import { useNavigate } from "react-router-dom";

const RequiresAuth = ({children, isLoggedIn}) => {
    const navigate = useNavigate();

    return (
    <div>
        {isLoggedIn ? children : navigate('/login')}
    </div>
  )
}

export default RequiresAuth