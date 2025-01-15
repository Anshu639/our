import React from "react";
import "./css/HomePage.css";
import Tracks from "./Tracks";
import TestimonialsSlider from "./TestimonialsSlider";
import TeamSection from "./TeamSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Book Store</div>
        <div className="nav-container">
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Our Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero">
        <div className="text-content">
          <h1 className="hero-heading">
            The <span className="hero-span">Smart</span><br></br> 
            Choice For <span className="hero-span">Future</span>
          </h1>
          <p className="hero-paragraph">
            Exam is a global training provider based across the UK that specializes in accredited and bespoke training courses. We crush the ...
          </p>
          <div className="search-bar">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for a location..."
              className="search-input"
            />
          </div>
          <button className="search-button">Continue</button>
        </div>
        </div>
        <div className="illustration">
          <img src="images/hero-section.png" alt="Illustration" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <div className="feature-icon">
            <img src="images/online-test 1.png" alt="Skill Icon" />
          </div>
          <div className="feature-text">
            <h3>Learn The Latest Skills</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It
              has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src="images/exam 1.png" alt="Career Icon" />
          </div>
          <div className="feature-text">
            <h3>Get Ready For a Career</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It
              has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src="images/certification 1.png" alt="Certificate Icon" />
          </div>
          <div className="feature-text">
            <h3>Earn a Certificate</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It
              has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </section>




      {/* Tracks Section */}
      <section>
        <Tracks />
      </section>

      {/* Learning Experience Section */}
      <section className="learning-experience">
        <div className="learning-content">
          <img
            src="images/learnig-section.png" // Replace with the illustration URL
            alt="Learning Illustration"
            className="learning-illustration"
          />
        </div>
        <div className="learning-text">
          <h2>
            Premium <span>Learning</span> Experience
          </h2>
          <div className="learning-features">
            <div className="learning-feature-item">
              <div className="learning-feature-icon">
                <img
                  src="images/hearts 1.png" // Replace with the "heart" icon URL
                  alt="Easily Accessible"
                />
              </div>
              <div>
                <h3>Easily Accessible</h3>
                <p>Learning Will Feel Very Comfortable With Courslab.</p>
              </div>
            </div>
            <div className="learning-feature-item">
              <div className="learning-feature-icon">
                <img
                  src="images/jigsaw 1.png" // Replace with the "puzzle" icon URL
                  alt="Fun Learning"
                />
              </div>
              <div>
                <h3>Fun Learning</h3>
                <p>Learning Will Feel Very Comfortable With Courslab.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <TestimonialsSlider/>
      </section>

      {/* Team Section */}
      <section>
        <TeamSection/>
      </section>

      {/* Footer Section */}
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default HomePage;
