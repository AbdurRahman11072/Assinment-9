import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
  

const Gallary = () => {   
    return (
        <div>
 
    {/* <!--image card layout start--> */}
    <div className="container mx-auto">
      {/* <!--image row start--> */}
      <div class="row">
        {/* <!--image card start--> */}
        <div class="image">
          <img className='w-[400px] h-[250px]' src="/A1.jpg" alt=""/>
          <div class="details">
            <h2>Music  <span>Festivals</span></h2>
           
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
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div class="image">
          <img className='w-[400px] h-[250px]' src="/TheaterEvent.jpg" alt=""/>
          <div class="details">
            <h2>Performing  <span>Arts</span></h2>
            
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
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div class="image">
          <img className='w-[400px] h-[250px]' src="/SportEvent.jpg" alt=""/>
          <div class="details">
            <h2> Sports <span>Event</span></h2>
            
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
        {/* <!--image card end--> */}
      </div>
      {/* <!--image row end--> */}
      {/* <!--image row start--> */}
      <div class="row">
        {/* <!--image card start--> */}
        <div class="image">
          <img className='w-[400px] h-[250px]' src="/comedy.jpg" alt=""/>
          <div class="details">
            <h2>Comedy <span>Show</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div class="image">
          <img className='w-[400px] h-[250px]' src="/Filmscreen.jpg" alt=""/>
          <div class="details">
            <h2>Film <span>Premieres</span></h2>
            
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
        {/* <!--image card end--> */}
        {/* <!--image card start--> */}
        <div class="image">
          <img className='w-[400px] h-[250px]' src="/E-sports.webp" alt=""/>
          <div class="details">
            <h2>E-sports <span>Tournament</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
        {/* <!--image card end--> */}
      </div>
      {/* <!--image row end--> */}
    </div>
    {/* <!--image card layout end--> */}

            
        </div>
    );
};

export default Gallary;