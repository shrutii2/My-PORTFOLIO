import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar5.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar6.jpeg'


// import Swiper core and required modules
// import {Navigation, Pagination, Scrollbar, Ally} from 'swiper';
import { Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import'swiper/css/navigation';  bcoz we are not using this now 
import 'swiper/css/pagination';
// import'swiper/css/scrollbar';


const data=[
{
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
},
{
    avatar: AVTR2,
    name:'Shatta Wale',
    review:'Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
},
{
    avatar: AVTR3,
    name:'Kwame Despite',
    review:'Modi alias animi dolorem aliquam ea eum beatae maiores,consectetur praesentium quibusdam,commodi velit porro blanditiis consequatur qui molestiae.Dolorem,perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
}
]
//swiperjs.com/react => for swiper/carousel

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
          <h2>Testimonials</h2>
    <Swiper className="container testimonials__container"
    // install Swiper modules
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{clickable:true}}>
    {
      data.map(({avatar, name, review}, index) => {
        return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
          </SwiperSlide>
        )
      })
    }
</Swiper>
</section>
)
}

export default Testimonials



      {/* <article className="testimonial">
      <div className="client__avatar">
        <img src={AVTR1} alt="Avtar1" />
        <h5 className='client__name'>Ernest Achiever</h5>
        <small className='client__review'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quod nam impedit soluta odio possimus!Quas sint dignissimos distinctio alias rerum laborum aperiam minus pariatur,totam dicta,repellendusavoluptatibus!
      </small>
      </div>
    </article>
    <article className="testimonial">
      <div className="client__avatar">
        <img src={AVTR1} alt="Avtar2" />
        <h5 className='client__name'>Achiever</h5>
        <small className='client__review'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quod nam impedit soluta odio possimus!Quas sint dignissimos distinctio alias rerum laborum aperiam minus pariatur,totam dicta,repellendusavoluptatibus!
      </small>
      </div>
    </article>
    <article className="testimonial">
      <div className="client__avatar">
        <img src={AVTR1} alt="Avtar3" />
        <h5 className='client__name'>Erne</h5>
        <small className='client__review'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto quod nam impedit soluta odio possimus!Quas sint dignissimos distinctio alias rerum laborum aperiam minus pariatur,totam dicta,repellendusavoluptatibus!
      </small>
      </div>
    </article> */}
 
