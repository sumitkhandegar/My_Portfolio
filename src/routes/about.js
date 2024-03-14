import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import PageHeading from '../components/pageHeading';
import AboutDesign from '../components/aboutDesign';

const about = () => {
  return (
    <>
      <Navbar />
      <PageHeading heading="ABOUT ME" text="This are my most recent projects." />
      <AboutDesign />
      <Footer />
    </>
  )
}

export default about