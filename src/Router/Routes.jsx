import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';

import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Signup/SignUp';
import Details from '../Pages/Details/details';
import Privateroutes from './Privateroutes';
import AddEvents from '../Pages/Event/AddEvent';
import Gallary from '../Pages/gallary/gallary';


const Routes =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader : () => fetch('/Eventdata.json'),
            },
                      
            {
                path:"/add-event",
                element:<Privateroutes><AddEvents></AddEvents></Privateroutes>
            },
            {
                path:"/gallary",
                element:<Privateroutes><Gallary></Gallary></Privateroutes>,
                loader : () => fetch('/Eventdata.json')
            },
            
            {
                path:"/details/:id",
                element:<Privateroutes><Details></Details></Privateroutes>,
                loader : () => fetch('/Eventdata.json')
                
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }
            
        ]
    }
])

export default Routes;