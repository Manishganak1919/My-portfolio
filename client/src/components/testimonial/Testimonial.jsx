import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.jpeg";
import AVTR3 from "../../assets/avatar3.jpeg";
import AVTR4 from "../../assets/avatar4.jpeg";

//import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Aman Kumar",
    review:
      "Thanks Manish, For creating web apps successfully, and our website is successfully running and growing",
  },
  {
    avatar: AVTR2,
    name: "Ashutosh Kumar",
    review:
      "Thanks Manish, For creating web apps successfully, and our website is successfully running and growing",
  },
  {
    avatar: AVTR3,
    name: "Krishna Kumar",
    review:
      "Thanks Manish, For creating web apps successfully, and our website is successfully running and growing",
  },
  {
    avatar: AVTR4,
    name: "Anu Singh",
    review:
      "Thanks Manish, For creating web apps successfully, and our website is successfully running and growing",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials_conatiner"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={`${name}'s Avatar`} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
