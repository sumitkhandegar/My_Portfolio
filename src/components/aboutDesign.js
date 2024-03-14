import { Link } from "react-router-dom"
import "../stylesheet/aboutDesign.css"
import myimg from "../assets/my_img.jpg"

import React from 'react'

const aboutDesign = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who I am?</h1>
            <p>Hey there! I'm Sumit Khandegar, a student of Electronics and Instrumentation Engineering at SGSITS, Indore, with a strong interest in technology and innovation. I'm a problem solver at heart, specializing in Data Structures and Algorithms with C++. I enjoy competitive programming on platforms like LeetCode and CodeChef. Web development is where my passion truly lies. Proficient in HTML, CSS, JavaScript, React and Figma, I create responsive and secure websites for clients. You can explore my coding projects and programming skills on:</p>
            <ul>
              <li><Link to="https://www.codechef.com/users/sumitkhandegar">CodeChef</Link></li>
              <li><Link to="https://leetcode.com/Sumit_Khandegar/">LeetCode</Link></li>
              <li><Link to="https://github.com/sumitkhandegar">GitHub</Link></li>
            </ul>
            <div className="buttons">
              <Link to="/contact" className='btn'>Contact</Link>
              <Link to="https://drive.google.com/file/d/1Vjixrb-WS_DONnqhh25EcSwttez2W5iQ/view?usp=sharing" className='btn btn-light'>Resume</Link>
            </div>
        </div>
        <div className="right">
            <div className="img-container">
                <img className="my-img" src={myimg} alt="" />    
            </div>
        </div>
    </div>
  )
}

export default aboutDesign