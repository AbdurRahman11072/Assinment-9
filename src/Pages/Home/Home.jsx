import React, { useEffect } from 'react';
import Slider from '../../Componants/Slider/Slider';
import EventCards from '../../Componants/EventCard/EventCards';
import { useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Review from '../../Componants/Review/Review';
import About from '../../Componants/About/About';


const Home = () => {
    useEffect(() =>{
        Aos.init();
    },[])
    const data = useLoaderData();
    return (
        <div className='container mx-auto '>
            <div className='my-10 mx-auto' data-aos="zoom-in-up"><Slider></Slider></div>
            <section className='p-5 mt-12 justify-center lg:ml-5' >
                <div className='mb-12'>
                <p className='text-center text-6xl font-extrabold '>Service</p>
                <div className='w-60 h-2 bg-red-500 mx-auto my-3 border-b-2 shadow-lg '></div>
                </div>
                <EventCards data={data}></EventCards>
            </section>    
            
            <Review></Review> 
            <div>
            <About></About>      
                </div>  
            
        </div>
    );
};

export default Home;