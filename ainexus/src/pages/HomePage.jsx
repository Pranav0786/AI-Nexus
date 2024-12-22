import React from 'react'
import  Navbar  from '../components/Navbar'
// import { HeroSection } from './HeroSection'
import EventDetails from './EventDetails'
// import { Registration } from './Registration'
import Header from '../components/Header'
// import { Sponsors } from './Sponsors'
// import { FAQ } from './FAQ'

export const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Header />
        {/* <HeroSection /> */}
        <EventDetails />
        {/* <Registration /> */}
        {/* <Sponsors/>
        <FAQ /> */}
    </div>
  )
}
