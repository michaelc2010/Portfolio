import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> us!</h1>
          <p>                      
              Founded in <b>1995</b>, the Raleigh Academy of Chinese Language (RACL) is a nonprofit, non-political, 501(c)(3) educational institution. 
              Its objectives include promoting Chinese language, teaching Chinese and Oriental history and culture, 
              and enhancing the understanding and friendship among various background people in our community in the Triangle 
              area of North Carolina. RACL strives to reach its goal by conducting school year-long Saturday classes, 
              sponsoring Chinese culture oriented activities, and playing an active and contributing role in our community.           
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      {/* <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div> */}
    </>
  )
}

export default About