import React from 'react'
import './Skills.css'
import image2 from '../assets/line.png'
import image3 from '../assets/bootstrap.png'
import image4 from '../assets/c.png'
import image5 from '../assets/css.png'
import image6 from '../assets/express.svg'
import image7 from '../assets/git.svg'
import image8 from '../assets/html.png'
import image9 from '../assets/javascript.png'
import image10 from '../assets/mongodb.png'
import image11 from '../assets/mysql.png'
import image12 from '../assets/node.png'
import image13 from '../assets/python.svg'
import image14 from '../assets/react-native.png'
import image15 from '../assets/react-js.png'
function Skill() {
    return (
        <>
            <div className='skillsBlock' >
                <div>
                    <img src={image2} alt="line" style={{ marginTop: "40px", width: '8rem' }} />
                </div>
                <div className='text-center divskills' >
                    SKILLS
                </div>
                <div className="skillsoptions" >
                    <h3>USING NOW:</h3>
                    <div className="divskilliuse ">
                        <div className="usingskills ">
                            <img src={image15} alt="" />
                            <p>REACT</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image12} alt="" />
                            <p>NODE</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image6} alt="" />
                            <p>EXPRESS</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image10} alt="" />
                            <p>MONGODB</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image8} alt="" />
                            <p>HTML5</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image5} alt="" />
                            <p>CSS3</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image9} alt="" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image7} alt="" />
                            <p>GIT</p>
                        </div>
                        <div className="usingskills ">
                            <img src={image3} alt="" />
                            <p>BOOTSTRAP</p>
                        </div>
                    </div>
                    </div>
                <div className='divskillilearn'>
                    <h3>LEARNING:</h3>
                    <div className="divlearningskills">
                        <div className="usingskills">
                            <img src={image11} alt="" />
                            <p>MYSQL</p>
                        </div>
                        <div className="usingskills">
                            <img src={image14} alt="" />
                            <p>REACT NATIVE</p>
                        </div>
                    </div>
                </div>
                <div className='divotherskill' >
                    <h3>OTHER SKILLS:</h3>
                    <div className=" divotherskillsknow">
                        <div className="usingskills">
                            <img src={image4} alt="" />
                            <p>C</p>
                        </div>
                        <div className="usingskills">
                            <img src={image13} alt="" />
                            <p>PYTHON</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
