import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Sophia Carter" 
                className="profile-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-img profile-placeholder" style={{display: 'none'}}>
                <span>SC</span>
              </div>
            </div>
            <div className="profile-info">
              <h1 className="name">Sophia Carter</h1>
              <p className="title">UI/UX Designer</p>
              <p className="location">Based in San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-sections">
        <section className="intro-section">
          <p className="intro-text">
            I'm a UI/UX designer with over 5 years of experience crafting intuitive and engaging digital experiences. My passion lies in 
            understanding user needs and translating them into elegant, functional designs. I believe in a user-centered approach, where 
            every design decision is informed by research and data. My goal is to create products that not only look beautiful but also solve 
            real problems and enhance people's lives.
          </p>
        </section>

        <section className="approach-section">
          <h2 className="section-title">My Approach</h2>
          <p className="approach-text">
            My design process is iterative and collaborative, involving close communication with clients and stakeholders throughout the 
            project lifecycle. I start by conducting thorough user research to identify pain points and opportunities. This research informs 
            the creation of user personas, journey maps, and wireframes. I then move on to visual design, focusing on creating a cohesive 
            and visually appealing interface that aligns with the brand's identity. I believe in continuous testing and refinement, ensuring 
            that the final product meets the needs of its users and achieves its objectives.
          </p>
        </section>
      </div>
    </div>
  );
}
