import React from 'react'
import "../stylesheet/projectCard.css"
import ProjectCard from './projectCard'
import projectCardData from './projectCardData'

const projectCardHelper = () => {
  return (
    <div className='project-container'>
            <h1 className='project-heading'>Project</h1>
            <div className='container'>
                {projectCardData.map((val, ind) =>{
                  return (
                    <ProjectCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                  )
                })}
            </div>
        </div>
  )
}

export default projectCardHelper