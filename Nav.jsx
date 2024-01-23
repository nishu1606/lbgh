import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <img src='horizon.png' className='image'>
        </img>
        <h3 className='logo'>L<span>B</span>YH-CBSE</h3>
        
        <ul>
                    <li><Link style={{textDecoration:'none', color: 'black', marginRight:20}} to={'/courses'}>Courses</Link></li>
                    <Link to={"/login"}><button>Login</button></Link> 
                </ul>
        </div>
      
  
  )
}

export default Nav
