import { faCalculator, faClock, faLocationArrow, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Facebook, InstagramIcon, Linkedin, Twitter } from 'lucide-react';


const Details = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [EData, setEdata] = useState({});
  
    useEffect(()=>{
        const MatchData = data.find((Data) => Data.id ==id);
        setEdata(MatchData)
        console.log(MatchData)
    },[id,data])

   console.log(EData)

    return (
        <div className='container mx-auto my-10 flex flex-row gap-10'>
           <div className='w-[67%]  '>

            <p className='text-2xl font-extrabold mb-2'>{EData.title}</p>

            <img className="w-full" src={EData.Eventimg} alt="" />

            <div className='grid grid-cols-3  gap-6'>
                <div className='flex flex-row gap-4 bg-gray-100 mt-4 p-6 shadow-lg border-2 text-red-500'>
                    <FontAwesomeIcon icon={faCalculator} style={{fontSize:"28px",fontWeight:"bold",marginTop:"8px",}} ></FontAwesomeIcon>
                    <div>
                        <p className='text-lg font-semibold text-red-500'>Event Date:</p>
                        <p className='text-base font-medium'>{EData.date}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 bg-gray-100 mt-4 p-6  shadow-lg border-2 text-red-500 '>
                    <FontAwesomeIcon icon={faClock} style={{fontSize:"28px",fontWeight:"bold",marginTop:"8px",}} ></FontAwesomeIcon>
                    <div>
                        <p className='text-lg font-semibold text-red-500'>Event Time:</p>
                        <p className='text-base font-medium'>{EData.time}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 bg-gray-100 mt-4 p-6  shadow-lg border-2 text-red-500'>
                    <FontAwesomeIcon icon={faLocationCrosshairs} style={{fontSize:"28px",fontWeight:"bold",marginTop:"8px",}} ></FontAwesomeIcon>
                    <div>
                        <p className='text-lg font-semibold text-red-500'>Event Location:</p>
                        <p className='text-base font-medium'>{EData.location}</p>
                    </div>
                </div>
                
            </div>

            <p className='mt-10'><span className='text-xl font-extrabold text-red-500'>Discription : </span>{EData.discription}</p>
           </div>

           <div className="border-2 shadow-lg flex-1 mt-10">
            <div className='bg-gray-100 border-2 mx-4 mt-5'>
            <p className="text-2xl text-center  font-extrabold mt-5">Remaning Ticket  </p>
            <div className="w-52 mx-auto mt-2 h-1 bg-red-500"></div>
               <p className="text-3xl font-bold text-center my-5 "> {EData.remainigticket}/{EData.totalticket}</p>
            </div>
            <div className='text-center  bg-gray-100 mt-4 mx-4 p-4  border-2 '>
                <p className='text-2xl font-bold my-2'>Ticket Price:{EData.price}Tk</p>
                <div className="w-52 mx-auto myt-3 mb-5 h-1 bg-red-500"></div>
            <button className= 'mx-auto bg-red-500 w-36 rounded-lg h-12 text-white text-xl font-bold'>Buy Now</button>
            </div>
            <div className="bg-gray-100 border-2 mx-4 mt-5 py-5 ">
                <p className="text-2xl text-center  font-extrabold mt-5">Share of Social Medial</p>
                <div className="w-52 mx-auto mt-3 h-1 bg-red-500"></div>
                <div className='flex flex-row gap-10 justify-center my-5 text-2xl text-red-400'>
                <Facebook size={40}></Facebook>
                <Twitter size={40}></Twitter>
                <InstagramIcon size={40}></InstagramIcon>
                <Linkedin size={40}></Linkedin>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Details;