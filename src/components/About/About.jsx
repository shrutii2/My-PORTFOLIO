import React from 'react'
import './About.css'
import ME from '../../assets/avatar1.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt='About Image'/>
        </div>
      </div>

      <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Competitive Exams</h5>
            <small>Gate</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed projects</small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nam id et commodi omnis fugiat qui ad! Amet non voluptate blanditiis voluptatum ratione hic, quod laudantium autem dolores accusamus.</p>
          <a href='#contacts' className='btn btn-primary'>Let's talk</a>
      </div>
    </div>

    </section>
  )
}

export default About
