import React from 'react'
import "../stylesheet/footer.css"
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { FaPhone } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'

 const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight: "30px"}} />
                    <div>
                        <p>SGSITS, Indore</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "30px"}} />
                    <div>
                        <p>+91 73893-52145</p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "30px"}} />
                    <div>
                        <p>sumitkhandegar2@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className='right'>
                <h4>My Commitment</h4>
                <p>Crafting user-centric digital experiences, one line of code at a time. Empowering businesses with tailored solutions for digital success. From intuitive interfaces to performance optimization, I aim to leave a lasting impression.</p>
            </div>
            <div className='social'>
                <a href="https://www.facebook.com/sumit.khandegar.5">
                    <FaFacebook size={20} style={{color:"#fff", marginRight: "30px"}} />
                </a>

                <a href="https://www.instagram.com/_sumit_khandegar?igsh=MWRlNDh1N2JsazloYg==">
                    <FaInstagram size={20} style={{color:"#fff", marginRight: "30px"}} />
                </a>

                <a href="https://twitter.com/khandegar_sumit">
                    <FaTwitter size={20} style={{color:"#fff", marginRight: "30px"}} />
                </a>

                <a href="https://www.linkedin.com/in/sumit-khandegar-563a1a249/">
                    <FaLinkedin size={20} style={{color:"#fff", marginRight: "30px"}} />
                </a>
                
                <a href="https://github.com/sumitkhandegar">
                    <FaGithub size={20} style={{color:"#fff", marginRight: "30px"}} />
                </a>
            </div>

        </div>
    </div>
  )
}

export default footer