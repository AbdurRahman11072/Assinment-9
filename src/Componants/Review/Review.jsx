import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = () => {
    return (
        <div className='my-20 mx-5'>
            <h1 className='text-7xl text-center font-extrabold mb-10' data-aos="zoom-in-left"
            >Review</h1>
            <div className='w-60 h-2 bg-red-500 mx-auto my-3 border-b-2 shadow-lg mb-20' data-aos="zoom-in-right"
            ></div>
            <div >
            <div
             className="hero  bg-base-300 rounded-lg  mx-auto mb-20 lg:w-2/4 md:w-3/4"
             data-aos="fade-down-right"
  data-aso-duration="4000">
  <div className="hero-content flex-col lg:flex-row-reverse" 
  >
    <img src="./Review1.jpg" className="  lg:max-w-sm rounded-lg shadow-2xl" />
    <div className='flex flex-row'>
      <div className='w-3 h-40 bg-red-500 mx-8'></div>
      <div>
            <div>
                <div className='w-52 h-[5px] bg-red-500 mb-5 '></div>
            <h1 className="text-5xl font-bold">Mehadi Hassan</h1>
            <p className="py-6">Thank you guys beacause of you I didn't need to go to ticket counter of the chenama hol . And I really enjoyed the show very well.</p>
            <div className='text-red-500'>
                <h1 className='text-xl font-semibold'>Rating:</h1>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
            </div>
            </div>
      </div>
      
    </div>
  </div>
            </div>

            <div className="hero  bg-base-300 rounded-lg mx-auto mb-20 lg:w-2/4 md:w-3/4" data-aos="flip-right"
           >
  <div className="hero-content flex-col lg:flex-row" >
    <img src="./Review1.jpeg" className="ml-0 lg:max-w-sm lg:-ml-32 h-[400px] rounded-lg shadow-2xl" />
    <div className='flex flex-row'>
      <div className='w-3 h-40 bg-red-500 mx-8'></div>
      <div>
            <div>
                <div className='w-52 h-[5px] bg-red-500 mb-5 '></div>
            <h1 className="text-5xl font-bold">Sagor Haloder</h1>
            <p className="py-6">Hi guy's I really appreciate your help with your help I enjoyed  the E-Sports Tournament. And the Exprience was very good.</p>
            <div className='text-red-500'>
                <h1 className='text-xl font-semibold'>Rating:</h1>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
            </div>
            </div>
      </div>
      
    </div>
  </div>
            </div>

            <div className="hero  bg-base-300 rounded-lg mx-auto mb-20 lg:w-2/4 md:w-3/4" data-aos="flip-left"
             data-aos-duration="3000">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="./Review4.jpeg" className="lg:max-w-sm   rounded-lg shadow-2xl" />
    <div className='flex flex-row'>
      <div className='w-3 h-40 bg-red-500 mx-8'></div>
      <div>
            <div>
                <div className='w-52 h-[5px] bg-red-500 mb-5 '></div>
            <h1 className="text-5xl font-bold">Alamin Shikder</h1>
            <p className="py-6">Thank you guys for giving us opportunity to such a beautiful music concerts.And the concert was really awesome.</p>
            <div className='text-red-500'>
                <h1 className='text-xl font-semibold'>Rating:</h1>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{fontSize:"20px"}}></FontAwesomeIcon>
            </div>
            </div>
      </div>
      
    </div>
  </div>
            </div>

            </div>
            
        </div>
    );
};

export default Review;