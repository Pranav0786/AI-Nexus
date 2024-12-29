import React from 'react'
import  Navbar  from '../components/Navbar'
import EventDetails from './EventDetails'
import Header from '../components/Header'
import Sponsors from './Sponsors'
import  FAQ  from './FAQ'
import Footer from '../components/Footer'
import { Registration } from './Registration'

export const HomePage = () => {
  return (
    <div id='home' className='overflow-hidden '>
        <Navbar />
        <Header />
        <EventDetails />
        <div className='bg-[rgb(132,153,165)] rounded-t-xl'>
          <Registration />
          <Sponsors/>
        </div>
        <FAQ />
        <Footer />
    </div>
  )
}
