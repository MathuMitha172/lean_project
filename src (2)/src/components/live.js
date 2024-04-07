import React from 'react'
import './live.css'
import { Link } from "react-router-dom";
export default function Live() {
  return (
    <div>
        <div className='navbar'>
          <p className='tit'>THE <span className='pro'>PRODUCT</span> PLATFORM</p>
        </div>
        <div className='boxm'>
            <p className='line7'>We are Live Now!</p>
            <p className='line8'>Our new feature is now <span className='lr'>Live and ready</span> for you to explore.</p>
            <p className='line9'> Go ahead and give it a try</p>
            <Link to='/content'><button className='btn3'>Get Started</button></Link>
        </div>
    </div>
  )
}
