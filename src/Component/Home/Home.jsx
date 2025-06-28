import React from 'react'
import image from '../assets/happy.png'
import './HomePage.css'
import About from '../About/About'
import Skill from '../Skill/Skill'
import Work from '../work/Work'
import Contact from '../Contact/Contact'
function Home() {
    return (
        <>
            <div className='introdiv'>

                <div className='introfirst'>
                    <div>

                        <h1 style={{ fontSize: '50px',marginBottom:"20px"}}>
                            Hi, I am
                        </h1>
                        <h3 style={{ fontSize: "40px",marginBottom:"10px"}}>
                            Sachin Saxena
                        </h3>
                        <p style={{ fontSize: '14px', opacity: '0.5' }}>
                            MERN Stack Developer / Web Developer
                        </p>
                    </div>
                </div>
                <div className='introsecond'>
                    <img src={image} alt="user" />
                </div>
            </div>
            <About/>
            <Skill/>
            <Work/>
            <Contact/>
        </>
    )
}

export default Home
