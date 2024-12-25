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
        <div className='bg-[rgb(132,153,165)] rounded-t-xl'>
          <Registration />
          <Sponsors/>
        </div>
        <FAQ />
        <Footer />
    </div>
  )
}
