import React from 'react';

const GallaryCard = ({Eventdatas}) => {
    console.log(Eventdatas)
    return (
        <div>
            {
                
                    Eventdatas?.map((EventDatas)=>(
                        <div class="image " key={EventDatas.id}>
                        <img src={EventDatas.img} alt="" />
                         <div class="details">
                           <h2>{EventData.title} <span>Event</span></h2>
                          
                           <div class="more">
                             <a href="#" class="read-more">Read <span>More</span></a>
                             <div class="icon-links">
                               <a href="#"><i class="fas fa-heart"></i></a>
                               <a href="#"><i class="fas fa-eye"></i></a>
                               <a href="#"><i class="fas fa-paperclip"></i></a>
                             </div>
                           </div>
                         </div>
                       </div>
                ))
            }
            
        </div>
    );
};

export default GallaryCard;