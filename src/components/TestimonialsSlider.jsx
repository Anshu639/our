import React, { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 3; // Number of cards visible at once

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-slider">
      <div className="testimonials-header">
        <h2>What Student's Say</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>

      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
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
        </div>
      </div>

      <div className="dots">
        {Array.from({
          length: testimonials.length - cardsToShow + 1,
        }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
