import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../Assets/assettwo/avatar1.jpg"
import AVTR2 from "../../Assets/assettwo/avatar2.jpg"
import AVTR3 from "../../Assets/assettwo/avatar3.jpg"
import AVTR4 from "../../Assets/assettwo/avatar4.jpg"

import {  Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function Testmonials() {
  return (
    <section id='testmonials'>
      <h5> Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonials_container">

      {/* // install Swiper modules */}
      modules={[ Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
  
      pagination={{ clickable: true }}  
     

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar one" />
            </div>
            <h5 className='client_name'> Ernest Achiever</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores est dolores assumenda quidem ex doloribus, blanditiis labore, iure fuga ratione quo itaque dolorum hic eveniet?
            </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar one" />
            </div>
            <h5 className='client_name'> Ernest Achiever</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores est dolores assumenda quidem ex doloribus, blanditiis labore, iure fuga ratione quo itaque dolorum hic eveniet?
            </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar one" />
            </div>
            <h5 className='client_name'> Ernest Achiever</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores est dolores assumenda quidem ex doloribus, blanditiis labore, iure fuga ratione quo itaque dolorum hic eveniet?
            </small>          
        </SwiperSlide>

        
      </Swiper>
    </section>
  )
}

export default Testmonials