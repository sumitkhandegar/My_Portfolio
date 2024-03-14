import React from 'react'
import "../stylesheet/homeDesign.css"
import bg_image from "../assets/home_page_bg.jpg"
import { Link } from 'react-router-dom'

const homeDesign = () => {
  return (
    <div className='bg'>
        <div className='mask'>
            <img className='bg_img' src={bg_image} alt=' ' />
        </div>
        <div class="content">
          <p>My name is</p>
          <h1>Sumit Khandegar</h1>
          <hr />
          <p>React Developer | DSA (C++)</p>
          <div className='buttons'>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default homeDesign;