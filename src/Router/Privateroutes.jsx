import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(user){
        return children
    }
    else{
        return <Navigate state={location.pathname} to="/login"   ></Navigate>
    }
    
    return (
        <div>
            
        </div>
    );
};

export default Privateroutes;