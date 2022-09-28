import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skill i Have</h5>
      <h2>My Experience</h2>
      <div className="container_experience-container">
       
        <div className="web_development">
        <h2><small>Full Stack Web Development</small></h2>
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className="experience_detail">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Mastered</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Mastered</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Java Script</h4>
              <small className='text-light'>Learning</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>BootStrap</h4>
              <small className='text-light'>Mastered</small>
             </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Reactjs</h4>
              <small className='text-light'>Learning</small>
            </div>
            </article>

          </div><br />

        
</div>
<div className="backend">
        <div className="experience_content">
          <h3 className='backend_note'>Backend Development </h3><br />  

<article className="experience_detail">
  <BsPatchCheckFill className='experience_details-icon'/>
 <div>
   <h4>NodeJs</h4>
  <small className='text-light'>Learning</small>
  </div>
</article>

<article className="experience_detail">
  <BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>Python</h4>
  <small className='text-light'>Learning</small>
</div>
</article>


        </div>
        </div>
        </div>


        



 {/* End of front end */}

 
        <div className="backend">
        <div className="experience_content">
          <h3 className='work_container'> Work Experience And Skills </h3><br />  

<article className="experience_detail">
  <BsPatchCheckFill className='experience_details-icon'/>
 <div>
   <h4>Travel management</h4>
  <small className='text-light'>Experienced</small>
  </div>
</article>

<article className="experience_detail">
  <BsPatchCheckFill className='experience_details-icon'/>
<div>
<h4>Air-Ticket,Visa,Hotel and forex Arrangement.</h4>
  <small className='text-light'>Experienced</small>
</div>
</article>

<article className="experience_detail">
  <BsPatchCheckFill className='experience_details-icon'/>
 <div>
 <h4>GDS-Amadeus,Galileo,Sabre.</h4>
  <small className='text-light'>Experienced</small>
 </div>
</article><br /><br />

<article className="experience_detail">
  <BsPatchCheckFill className='experience_details-icon'/>
 <div>
 <h4>CSS</h4>
  <small className='text-light'>Experienced</small>
 </div>
</article>

<article className="experience_detail">
  <BsPatchCheckFill className='experience_details-icon'/>
 <div>
 <h4>CSS</h4>
  <small className='text-light'>Experienced</small>
 </div>
</article>

</div>


        </div>
      </div>

    </section>
  )
}

export default Experience