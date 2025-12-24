import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Abouthero from '../components/About/Abouthero'
import Aboutprofile from '../components/About/Aboutprofile'
import Aboutdetails from '../components/About/Aboutdetails'
import Aboutdetailstwo from '../components/About/Aboutdetailstwo'
import Footerhero from '../components/Home/Footerhero'

const Aboutpage = () => {
    return (
        <div>
        <Navbar/>
        <Abouthero/>
        <Aboutprofile/>
       
        <Aboutdetails/>
        <Footerhero/>




        <Footer/>

        </div>
    )
}

export default Aboutpage