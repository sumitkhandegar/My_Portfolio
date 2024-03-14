import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import PageHeading from '../components/pageHeading';
import ProjectCardHelper from '../components/projectCardHelper';

const project = () => {
  return (
    <>
      <Navbar />
      <PageHeading heading="PROJECTS" text="This are my most recent projects." />
      <ProjectCardHelper />
      <Footer />
    </>
  )
}

export default project