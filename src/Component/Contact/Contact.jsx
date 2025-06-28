import React from 'react'
import './Contact.css'
import image from '../assets/line.png'
import image1 from '../assets/up.png'
import image2 from '../assets/instagram.png'
import image3 from '../assets/linkedin.png'
import image4 from '../assets/email.png'
import image5 from '../assets/github.png'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div style={{ backgroundColor: "#e7e7e7", paddingTop: '50px' }}>
                <div className='contactmediv'>
                    Contact
                </div>
                <br />
                <p>Have a question or want to work together? Feel free to reach out — I'm always open to new opportunities.</p>
                <div style={{ display: "flex", justifyContent: 'center', marginTop: '20px' }}>
                    <img src={image} alt="" />
                </div>
                <form >
                    <div>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name*' />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder='Enter Your Email*' />
                    </div>
                    <div>
                        <input type='number' name="number" id="number" placeholder='Phone Number*' />
                    </div>
                    <div>
                        <textarea name="message" placeholder='Your Message*' id="message" cols="52" rows="6  "></textarea>
                    </div>
                    <button>Submuit</button>
                </form>
                <div style={{ backgroundColor: '#151111', color: 'white', paddingTop: '40px' }}>
                    <Link to='/' style={{textDecoration:"none", color:'white'}}>
                        <div className='backtoupdiv'>
                            <img src={image1} alt="" />
                            Back to Top
                        </div>
                    </Link>
                    <div className='linkshare'>
                        <div>
                            <a href="https://www.instagram.com/sachinsaxen27/" target='_blank'>
                                <img src={image2} alt="instagram" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/sachin-saxena-429487239/" target='_blank'>
                                <img src={image3} alt="LinkedIn" />
                            </a>
                        </div>
                        <div>
                            <a href="mailto:saxensachin186@gmail.com" target='_blank'>
                                <img src={image4} alt="Email" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Sachinsaxen27" target='_blank'>
                                <img src={image5} alt="Git" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: "10px" }}>@ 2023 Sachin Saxena All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
