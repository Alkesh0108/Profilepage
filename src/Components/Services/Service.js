import React from 'react'
import "./Service.css"
import {BiCheck} from "react-icons/bi"

function Service() {
  return (
    <section id='services'>
      <h5>Training Program And</h5>
      <h2>Services</h2>
      <div className='services_container'>
        <article className="service">
          <div className="service_head">
            <h3>Web Technologies</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className='service_list-icon'/><p>UI/UX Design</p></li>
            <li><BiCheck className='service_list-icon'/><p>FrontEnd Web Development knowledge.</p></li>
            <li><BiCheck className='service_list-icon'/><p>BackEnd Web Development knowledge.</p></li>
            <li><BiCheck className='service_list-icon'/><p>Content Creator.</p></li>
            <li><BiCheck className='service_list-icon'/><p>Photo Editing.</p></li>
            <li><BiCheck className='service_list-icon'/><p>Video Editing.</p></li>
                   {/* End of UI/UX */}
          </ul>
        </article>
        
        <article className="service">
          <div className="service_head">
            <h3>Courses/Certification</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className='service_list-icon'/><p>FullStack Web Development.</p></li>
            <li><BiCheck className='service_list-icon'/><p>Iata/Uftaa. </p></li>
            <li><BiCheck className='service_list-icon'/><p>MSC-IT.</p></li>
            <li><BiCheck className='service_list-icon'/><p>Amadeus Training Program.</p></li>
            <li><BiCheck className='service_list-icon'/><p>Tally 9.0</p></li>
            <li><BiCheck className='service_list-icon'/><p>Advance Excel and PPT training.</p></li>
        
            {/* End of Content  Creation */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service