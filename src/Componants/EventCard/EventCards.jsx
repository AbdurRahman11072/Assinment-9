import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faEnvelope, faMapLocation, faMapLocationDot, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const EventCards = ({data}) => {
    const [Eventdata,SetEventdata] = useState();
    useEffect(()=>{
        SetEventdata(data)
       
    },[])
    console.log(Eventdata)
  
    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 md:pr-5 xl:grid-cols-3 gap-10 my-10'>
            {
                Eventdata?.map((EventData)=>(
                    <Link to={`./details/${EventData.id}`} key={EventData.id}>
                        <div  className="card h-[450px] card-compact bg-base-100 shadow-2xl ">
                                <figure ><div className='w-full h-64'><img className=' w-full h-full lg:h-[300px] xl:h-full'  src={EventData.Eventimg} alt="Shoes" /></div></figure>
                            <div className='flex flex-row'>
                                <div className='ml-6 mt-5 w-[6px] h-16 bg-red-500'></div>
                                <div className="card-body -ml-2">
                                    <h2 className="card-title text-xl md:text-lg lg:text-xl">{EventData.title}</h2>
                                    <p className='text-red-500 font-semibold text-base'>Price : ${EventData.price}</p>
                                    <div className="card-actions justify-end mb-2 p-2">
                                    <p><FontAwesomeIcon icon={faSitemap} style={{color: "#e64528", marginRight:"6px", fontSize:"15px",}} />Organized By : {EventData.organizer}</p>
                                    <p><FontAwesomeIcon icon={faMapLocationDot} style={{color: "#e64528", marginRight:"6px", fontSize:"15px",}}  />Location : {EventData.location}</p>
                                    
                                    <p><FontAwesomeIcon icon={faCalendarDays} style={{color: "#e64528", marginRight:"6px", fontSize:"15px",}}></FontAwesomeIcon>Date : {EventData.date}</p>
                                    
                                
                                    <p><FontAwesomeIcon icon={faClock} style={{color: "#e64528", marginRight:"6px", fontSize:"15px",}}></FontAwesomeIcon> Time : {EventData.time}</p>

                                    
                                    
                                    </div>
                                </div>
                            </div>
                         </div>
                    </Link>
                ))
            }
            
        </div>
    );
};

export default EventCards;