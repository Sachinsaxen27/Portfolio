import React from 'react'
import './About.css';
import image1 from '../assets/line.png'
// import image2 from '../assets/desing.png'
// import image3 from '../assets/development.png'
// import image4 from '../assets/maintenance.png'
function About() {
    return (
        <>
            <div className='aboutDiv'>
                <div className='divabout text-center'>
                    About Me
                </div>
                <div className='aboutdiscription text-center'>
                    Aspiring full-stack developer with a strong foundation in MERN stack. Eager to contribute to impactful <br /> web applications  and continue learning in a fast-paced development environment.
                </div>
                <div className='divexplore'>
                    Explore
                </div>
                <div className='divlines'>
                    <img src={image1} alt="line" />
                </div>
                <div className='divsectionfordetails'>
                    <div className='divaboutskills' >
                        <div className='divdesign'>
                            <h1>DESIGN</h1>
                            <p>
                                I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                            </p>
                        </div>
                        <div className='divdevelopment'>
                            <h1>DEVELOPMENT</h1>
                            <p>
                                I build fast, responsive, and scalable websites using modern technologies like  React, Node.js, and MongoDB.From interactive UIs to secure backend systems, I turn designs into fully functional web applications
                            </p>
                        </div>
                    </div>
                    <div className='divmaintenance'>
                        <h1>MAINENANCE</h1>
                        <p>
                            I offer ongoing support to keep your website running smoothly—whether it's fixing bugs, updating features, optimizing performance, or adapting your site to new needs as they arise
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
