import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    
    <div className='home'>
     <div className='hero-image'>
              <img src='hero.png' className='hero'></img>
            </div> 
    <div className='content1'>
    
    <h1><span>Education</span> - Unlocking doors to the unknown</h1>
            <p className='paraa'>Access premium <span>study materials</span>, reinforce concepts, and ace <span>sample papers.</span></p>
            <button class="btn">Buy Study Material</button>
            <div className='session'>
            <img src='Speak.png'></img>
            <h4>Online Session</h4>
            <img src='idea.png'></img>
            <h4>One-to-One session</h4>
            </div>
    </div>
    </div>
  )
}

export default Hero
