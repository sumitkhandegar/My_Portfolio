import React from 'react'
import { NavLink } from 'react-router-dom'
import "../stylesheet/projectCard.css"

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt='' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='details'>
            <p>{props.text}</p>
            <div className='project-btns'>
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
