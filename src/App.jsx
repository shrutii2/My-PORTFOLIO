import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/About'
import Experience from './components/Experience/experience'
import Services from './components/Services/services'
import Testimonials from './components/Testimonials/testimonials'
import Contacts from './components/Contacts/contacts'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Testimonials />
        <Contacts />
        <Footer />
    </>
  )
}

export default App
