import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='services'>
          <div className='services__head'>
            <h3>UI/UX design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='services'>
          <div className='services__head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li><li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* End of web development */}
        <article className='services'>
          <div className='services__head'>
            <h3>APP DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem,ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
