import React from 'react';

const About = () => {
    return (
       <div id="about" className='container mx-auto my-32'>    
           
           <p className='text-center text-6xl font-extrabold '>About Us</p>
                        <div className='w-64 h-2 bg-red-500 mx-auto my-3 border-b-2 shadow-lg  '>           
                        </div>
            
         <div className='flex md:flex-row mt-24 '>
                    <div className='flex flex-wrap w-[650px] h-[400px] align-middle gap-4 '>
                   
                   <img className='w-[300px]' src="/SportEvent.jpg" alt="" />
                   <img className='w-[300px]' src="/A1.jpg" alt="" />
                   <img className='w-[300px]' src="/Filmscreen.jpg" alt="" />
                   <img className='w-[300px]' src="/TheaterEvent.jpg" alt="" />
                   <img className='w-[300px]'  src="/comedy.jpg" alt="" />
                   <img className='w-[300px]'  src="/concert.webp" alt="" />
                   <img className='w-[300px]' src="/Filmscreen.jpg" alt="" />
                   <img className='w-[300px]' src="/SportEvent.jpg" alt="" />
                   
                    </div>
                        
                    <div className='flex-1'>
                       
                        <p>
                        Welcome to the heart of our event website. Here, you'll discover everything you need to know about this exciting gathering. <br />

Our event is a dynamic and immersive experience designed to inspire, educate, and entertain. Learn about its history, its core objectives, and how it has grown to become a must-attend occasion for professionals, enthusiasts, and anyone seeking a memorable time. <br /> <br />

<span className="text-xl font-bold text-red-500 ">What to Expect:</span> <br /> <br></br>

Get ready for an unforgettable journey! This section provides a glimpse into the event's offerings. From inspiring speakers and thought-provoking workshops to fun-filled activities and networking opportunities, we've curated a diverse program to cater to your interests and goals. <br /> <br></br>

<span className="text-xl font-bold text-red-500 ">Highlights:</span> <br /> <br></br>

Find out what sets our event apart from the rest. Discover standout sessions, remarkable guest speakers, and unique elements that make this event a standout in its field. <br /> <br></br>

<span className="text-xl font-bold text-red-500 ">Schedule:</span> <br /> <br></br>

Plan your visit with ease using our detailed event schedule. We've laid out the day-to-day agenda, making it simple for you to customize your experience. <br /> <br></br>

<span className="text-xl font-bold text-red-500 ">Register Now </span><br /> <br></br>

Ready to join us? This section guides you through the registration process, offering options for individuals and groups. Secure your spot today and get ready for an unforgettable event! <br /> <br></br>






                        </p>
                    </div>
        </div>
            
        
       </div>
    );
};

export default About;