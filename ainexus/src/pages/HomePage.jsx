import React from 'react'
import  Navbar  from '../components/Navbar'
import EventDetails from './EventDetails'
import { Registration } from './Registration2'
import Header from '../components/Header'
import Sponsors from './Sponsors'
import  FAQ  from './FAQ'
import Footer from '../components/Footer'
import { R2 } from './Registration'

export const HomePage = () => {
  return (
    <div id='home'>
        {/* <Navbar /> */}
        {/* <Header /> */}
        {/* <EventDetails /> */}
        <div className='bg-[rgb(132,153,165)] rounded-t-xl'>
          {/* <Registration /> */}
          <R2 />
          <Sponsors/>
        </div>
        <FAQ />
        <Footer />
    </div>
  )
}
