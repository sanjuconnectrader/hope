import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/Hero'
import Homedetails from '../components/Home/Homedetails'
import Homehero from '../components/Home/Homehero'
import Homeservice from '../components/Home/Homeservice'
import Process from '../components/Home/Process'
import Homeabout from '../components/Home/Homeabout'
import Footerhero from '../components/Home/Footerhero'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
    return (
        <div>
        <Navbar/>
        <Hero/>
        <Homeabout/>
        <Homedetails/>
        <Homehero/>
        <Homeservice/>
        <Process/>
        <Footerhero/>
        <Footer/>


        

        </div>
    )
}

export default Homepage