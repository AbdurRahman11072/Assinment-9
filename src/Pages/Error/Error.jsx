import React from 'react';
import Navbar from '../../Componants/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <video controls="" className='mx-auto' src="./404.mp4"  autoPlay loop muted></video>
           
           
            
        </div>
    );
};

export default Error;