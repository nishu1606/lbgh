import React from 'react'
import './About.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dta } from './data';


const About = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div className='about'>
       
       <h1 className='main'>ABOUT US</h1>
       <p>Welcome to Learning Beyond Your Horizon CBSE, founded in 2022 by Kanishk Gupta and Aditya Kumar Srivastava. With expertise in consulting, education, and technology, we aim to revolutionize online learning.</p>
       <h2>Our Missions</h2>
       <h3>Fostering a playful & engaging learning </h3>

       <Slider {...settings}>
       {dta.map(item=>{
        return(<div className='card'>
        <div className="card-top">
        <img src={item.image}></img>
        <h1>{item.title}</h1>
        </div>
        <div className="card-bottom">
            <div>{item.description}</div>
            <button className='btnn'>{item.btn}</button>
        </div>
        
       </div>
      

       )})}
       </Slider>
      
       
          
      
       
       </div>
       
   
    
    </>
    
  )
}

export default About
