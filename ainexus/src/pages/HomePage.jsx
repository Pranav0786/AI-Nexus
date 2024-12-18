import React from 'react'
import  Navbar  from '../components/Navbar'
// import { HeroSection } from './HeroSection'
// import { EventDetails } from './EventDetails'
import { Registration } from './Registration'
// import { Sponsors } from './Sponsors'
// import { FAQ } from './FAQ'

export const HomePage = () => {
  return (
    <div>
        <Navbar />
        {/* <HeroSection />
        <EventDetails /> */}
        <Registration />
        {/* <Sponsors/>
        <FAQ /> */}
    </div>
  )
}
