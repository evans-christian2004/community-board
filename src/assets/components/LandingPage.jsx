import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <>
        <div className="hero-text">
            <h1>Visit <span class="logo-emphasis">Miami</span></h1>
            <h2>
                Thrive and relish in the vibrant, bustling city that is Miami, Florida.
            </h2>
            <Link to='/Locations'><button className='cta'>Check it Out!</button></Link>
            
        </div>
        <section className="hero-section">
            <div className="hero-img"></div>
        </section>
    </>
    
  )
}
