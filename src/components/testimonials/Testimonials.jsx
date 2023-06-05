import React from 'react';
import "./testimonials.css"
import AVTR from '../../assets/avatar.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR,
    name: "Matheus Kuasne",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores quaerat, impedit tempore doloremque optio est odio sapiente tempora consectetur pariatur nemo, voluptate fugiat doloribus nobis ducimus possimus itaque. Accusamus."
  },
  {
    id: 2,
    avatar: AVTR,
    name: "Matheus Kuasne",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores quaerat, impedit tempore doloremque optio est odio sapiente tempora consectetur pariatur nemo, voluptate fugiat doloribus nobis ducimus possimus itaque. Accusamus."
  },
  {
    id: 3,
    avatar: AVTR,
    name: "Matheus Kuasne",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores quaerat, impedit tempore doloremque optio est odio sapiente tempora consectetur pariatur nemo, voluptate fugiat doloribus nobis ducimus possimus itaque. Accusamus."
  },
  {
    id: 4,
    avatar: AVTR,
    name: "Matheus Kuasne",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores quaerat, impedit tempore doloremque optio est odio sapiente tempora consectetur pariatur nemo, voluptate fugiat doloribus nobis ducimus possimus itaque. Accusamus."
  },
  {
    id: 5,
    avatar: AVTR,
    name: "Matheus Kuasne",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores quaerat, impedit tempore doloremque optio est odio sapiente tempora consectetur pariatur nemo, voluptate fugiat doloribus nobis ducimus possimus itaque. Accusamus."
  }
];




const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, avatar, name, review})=>{
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review"> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial