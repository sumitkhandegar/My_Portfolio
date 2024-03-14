import "../stylesheet/contactDesign.css"
import React from 'react'

const contactDesign = () => {
  return (
    <div className="form">
        <form>
            <label>Your Nmae</label>
            <input type="text" className="input" placeholder="Full Name"></input>

            <label>Email</label>
            <input type="email" className="input" placeholder="Your Email"></input>

            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here!"></textarea>

            <button className="btn" >Submit</button>
        </form>
    </div> 
  )
}

export default contactDesign