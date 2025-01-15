import React from "react";
import "./css/TeamSection.css";

const teamMembers = [
  {
    name: "Matthew E. McNatt",
    title: "Professor @George Brown College",
    description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
    subject: "Engineering physics",
    image: "images/Teacher-1.png", // Replace with the actual image path
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Tracy D. Wright",
    title: "Professor @George Brown College",
    description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
    subject: "Engineering physics",
    image: "images/Teacher-1.png", // Replace with the actual image path
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Cynthia A. Nelson",
    title: "Professor @George Brown College",
    description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
    subject: "Engineering physics",
    image: "images/Teacher-1.png", // Replace with the actual image path
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      {/* Section Header */}
      <div className="team-header">
        <h2>Our Team</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>

      {/* Team Cards */}
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-content">
              <h3>{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <p className="team-description">{member.description}</p>
              <p className="team-subject">{member.subject}</p>
              <div className="team-social">
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <img src="images/instagram-icon.png" alt="Instagram" />
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="images/linkedin-icon.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
