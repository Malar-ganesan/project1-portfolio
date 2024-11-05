import React from 'react'
import './about.css'
import theme from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="title">
                <h1>About me</h1>
                <img src={theme} alt="" />
            </div>
             <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am expeerienced Frontend developer with over a decade of professional expertie in the field. throughout m career, i have the previllege of collaborting with pretigious organizations, contributing  to their success and growth.</p>
                        <p>My passion for frontend developement is not only refected in m extencive experience but alson the enthusiam and he dedication i bring to each project.</p>
                    </div>
                    <div className="about-skills">
                         <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                         <div className="about-skill"><p>React js</p><hr style={{width:"70%"}}/></div>
                         <div className="about-skill"><p>java script</p><hr style={{width:"60%"}}/></div>
                         <div className="about-skill"><p>Next js</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>

                </div> 
            
             <div className="about-achievs">
                <div className="about-achiev">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>

                </div>
                <hr />
                <div className="about-achiev">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achiev">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
             </div>

        </div>
    )
}

export default About