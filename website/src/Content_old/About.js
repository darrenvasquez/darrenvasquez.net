
import React, { Component } from 'react'

import './About.css';

class About extends Component {

    render() {
        return (

            <div className='about'>
                My name is Darren Vasquez. <br/><br/><br/>
                <div className='about-body'>
                    I was born in Phoenix, Arizona in 1997 and lived there for most of my life. I have always been interested in how technology works, whether that be through taking apart broken electronics as a kid or programming plugins for my now defunct <a id='link' href='https://darcraft.net'>Minecraft Server</a>. <br/><br/>

                    I am currently attending Arizona State University pursuing a bachelors degree in Computer Science. I plan to graduate in May 2020.<br/><br/>

                    I currently live in Austin, Texas with my family while spending the school years in Tempe, Arizona attending university.<br/><br/>

                    I am always looking to grow my knowledge in the computer science field, and am eager to enter the industry as soon as possible.
                </div>
            </div>

        );
    }

}

export default About;