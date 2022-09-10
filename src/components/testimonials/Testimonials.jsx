import React from 'react';
import "./testimonials.css";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:Avatar1,
    Name:"Tin Snow",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis dolor voluptatibus consequatur. Nam aliquam quam excepturi odit quos iste numquam est amet iusto quidem voluptatum non fugiat, perspiciatis modi."
  },
  {
    avatar:Avatar2,
    Name:"John Snow",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis dolor voluptatibus consequatur. Nam aliquam quam excepturi odit quos iste numquam est amet iusto quidem voluptatum non fugiat, perspiciatis modi."
  },
  {
    avatar:Avatar3,
    Name:"Popey",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis dolor voluptatibus consequatur. Nam aliquam quam excepturi odit quos iste numquam est amet iusto quidem voluptatum non fugiat, perspiciatis modi."
  },
  {
    avatar:Avatar4,
    Name:"Bruce Wayne",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis dolor voluptatibus consequatur. Nam aliquam quam excepturi odit quos iste numquam est amet iusto quidem voluptatum non fugiat, perspiciatis modi."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
            // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,Name,review},index)=>{
            return(
          <SwiperSlide key={index} className='testimonials'>
          <div className='client_avatar'>
            <img src={avatar} alt=""></img>
          </div>
          <h5 className='client_name'>{Name}</h5>
          <small className='client_review'>{review}</small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;