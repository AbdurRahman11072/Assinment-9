import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Componants/Navbar/Navbar';
import FooterCard from '../Componants/Footer/Footer';



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterCard></FooterCard>
          
        </div>
    );
};

export default MainLayout;