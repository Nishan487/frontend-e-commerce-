import React from 'react'
import './Homepage.css'
import homepage from './homepage.jpg';
import ServiceSection from './Services';


const Home = (props) => {
  return (
    <div>
    <div className='homepage' style={props.mode}>
      <div className='description' style={props.mode}>
      <p><h1><u>Welcome to Nishan e-shopping.</u></h1>
       <h4>Welcome to our e-commerce platform, where shopping meets convenience and variety is at your fingertips. We've created a seamless online experience designed to bring your favorite products directly to you, no matter where you are.</h4>
        </p>
        </div>
      <picture className='homepage-photo'>
       <img src={homepage} className='image'></img>
       </picture>
       </div>
       <div className='servicecontainer'>
     <ServiceSection/>
     </div>
    
    </div>
  )
}

export default Home;