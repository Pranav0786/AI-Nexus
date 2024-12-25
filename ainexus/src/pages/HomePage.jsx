import React from 'react'
import  Navbar  from '../components/Navbar'
import EventDetails from './EventDetails'
import { Registration } from './Registration'
import Header from '../components/Header'
import Sponsors from './Sponsors'
import  FAQ  from './FAQ'
import Footer from '../components/Footer'

export const HomePage = () => {
  return (
    <div id='home'>
        <Navbar />
        <Header />
        <EventDetails />
        <Registration />
        <Sponsors/>
        <FAQ />
        <Footer />
    </div>
  )
}
