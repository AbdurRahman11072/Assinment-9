import React from 'react';

const AddEvents = () => {
    return (
        <div className='my-10'>
            <h1 className=' text-3xl md:text-5xl font-extrabold text-center'>Request To Add Event</h1>
            <div className='w-[250] md:w-[550px] h-2 bg-red-500 mx-auto my-5'></div>
            <div className='w-[80%] md:[50%] lg:w-[40%] bg-gray-100 p-5 mx-auto border-2 shadow-xl rounded-xl'>
                <form className="flex flex-col gap-4">
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg' type="text" placeholder='Enter UserName' />
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg' type="text" placeholder='Enter Email Address' />
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg' type="text" placeholder='Enter Organizer Compeny Name' />
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg' type="text" placeholder='Enter Event Img Url' />
                    <div className='flex flex-col gap-3 md:flex-row '>
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg flex-1' type="text" placeholder='Enter Location' />
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg' type="text" placeholder='Enter time' />
                    </div>
                    <div className='flex flex-col gap-3 md:flex-row '>
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg flex-1' type="text" placeholder='Enter Data' />
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg' type="text" placeholder='Enter Total Ticket' />
                    </div>
                    <div className='flex flex-col gap-3 md:flex-row '>
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg flex-1' type="text" placeholder='Enter price' />    
                    <input className='h-12 rounded-lg p-2 border-1 shadow-lg' type="text" placeholder='Enter Event Duration' />
                    </div>
                    <textarea placeholder="Bio" className="textarea textarea-bordered h-24 w-full font-semibold border-2 shadow-xl" ></textarea>
                    <button className=' p-2 w-32 h-12 mx-auto rounded-lg border-3 shadow-xl text-white font-semibold bg-red-500' type='submit'>Sent Request</button>
                    

                </form>
            </div>
        </div>
    );
};

export default AddEvents;