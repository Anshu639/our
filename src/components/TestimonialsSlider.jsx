import React from "react";
import Slider from "react-slick";
import "./css/TestimonialsSlider.css";

const testimonials = [
  {
    text: "Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself!",
    name: "Finlay Kirk",
    role: "Web Developer",
    image: "images/Ellipse 34.png",
  },
  {
    text: "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    name: "Dannette P. Cervantes",
    role: "Web Designer",
    image: "images/Ellipse 34.png",
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Designer",
    image: "images/Ellipse 34.png",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "John Doe",
    role: "Product Manager",
    image: "images/Ellipse 34.png",
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    name: "Jane Smith",
    role: "Graphic Designer",
    image: "images/Ellipse 34.png",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through items
    speed: 500, // Slide transition speed
    slidesToShow: 3, // Number of cards visible
    slidesToScroll: 1, // Number of cards to scroll per action
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-slider">
      <div className="testimonials-header">
        <h2>What Student's Say</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-info">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSlider;
