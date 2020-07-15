import React from 'react'
import MainShow from './MainShow'
import ItemSection from './ItemSection'
import Seprater from './Seprater'
import Footer from './Footer'
export default function LandingPage() {
   
    return (
       <div>
           <MainShow />
            <Seprater  name={"Items"} ns={1} rs={6} />
           <ItemSection/>
           <Footer/>
       </div>
    )
}
