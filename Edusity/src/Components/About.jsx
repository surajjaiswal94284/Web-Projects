import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
            Welcome to Stanford University, a vibrant institution dedicated to fostering excellence in education, research, and community engagement. Nestled in the heart of Washington DC, our university stands as a beacon of knowledge, innovation, and diversity. With a rich history spanning 50 years, we pride ourselves on our commitment to academic rigor and holistic student development.
            </p>
            <p>
            At Stanford University, we believe in nurturing intellectual curiosity and preparing our students to become leaders in their chosen fields. Our distinguished faculty members are experts in their disciplines, dedicated to providing a transformative learning experience that combines theoretical knowledge with practical application. Through state-of-the-art facilities, cutting-edge research opportunities, and robust partnerships with industry leaders, we empower our students to tackle global challenges and make a meaningful impact on society.
            </p>
            <p>
            Join us at Stanford University and embark on a journey of discovery, collaboration, and achievement. Together, we will shape the future and inspire generations to come. Welcome to a place where knowledge meets opportunity, and dreams take flight.
            </p>
        </div>
    </div>
  )
}

export default About
