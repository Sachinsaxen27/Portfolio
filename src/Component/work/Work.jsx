import React from 'react'
import './work.css'
import image from '../assets/Screenshot1.png'
import image1 from '../assets/Screenshot2.png'
import image2 from '../assets/Screenshot3.png'
import image3 from '../assets/screen.jpeg'
function Work() {
    const projectarray = [
        {
            name: 'Ticket Management',
            discription: 'Developed a full-stack ticket booking/support system where users can raise queries, and each ticket is tracked through its lifecycle',
            live: 'https://effulgent-kheer-5773e8.netlify.app/',
            image: image
        },
        {
            name: 'Personal Notes',
            discription: 'Developed a notes management app using React.js to create and organize notes under specific sections or groups',
            live: 'https://personalnotes001.netlify.app/',
            image: image2
        },
        {
            name: 'Rock,Paper & Scissor',
            discription: "A simple interactive game built using HTML, CSS, and JavaScript that lets users play Rock-Paper-Scissors against the computer with real-time score tracking and game logic.",
            live: 'https://sachinsaxen27.github.io/Stone_Paper_Scissors_game/',
            image: image1
        },
        {
            name: 'Attendance Management',
            discription: "Implemented QR code technology to track student attendance accurately, recording timestamps upon entry to the college premises",
            live: '/',
            image: image3
        },

    ]
    return (
        <>
            <div style={{backgroundColor:'black',paddingTop:'50px'}}>
                <div className='portfoliodivheading'>
                    PORTFOLIO
                </div>
                <div>
                    <div>
                        <div>
                            {projectarray?.map((value, index) => {
                                return <div className='projectdetials'>
                                    <div className='detailsdiv'>
                                    <h6>Project {index + 1}</h6>
                                        <h2 className='text-light'>{value.name}</h2>
                                        <p className='text-light'>
                                            {value.discription}
                                        </p>
                                        <a href={value.live}>Live</a>
                                    </div>
                                    <div>
                                        <img src={value.image} alt="" style={{ width: '400px' ,borderRadius:"40px"}} />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
