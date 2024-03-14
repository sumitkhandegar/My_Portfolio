import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import PageHeading from '../components/pageHeading';
import ContactDesign from '../components/contactDesign';

const contact = () => {
  return (
    <>
      <Navbar />
      <PageHeading heading="MY CONTACT" text="Please fill out the form below to contact me." />
      <ContactDesign />
      <Footer />
    </>
  )
}
 
export default contact