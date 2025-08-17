import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/animations/ParticleBackground';
import TypingEffect from '../components/animations/TypingEffect';
import SkillsVisualization from '../components/animations/SkillsVisualization';
import { StaggerContainer, StaggerItem, ScrollReveal, MagneticHover, FloatingElement } from '../components/animations/AnimationWrapper';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="hero-section">
        <ParticleBackground particleCount={80} className="hero-particles" />
        <StaggerContainer className="hero-content">
          <StaggerItem>
            <div className="profile-section">
              <FloatingElement className="profile-image" duration={4}>
                <MagneticHover>
                  <motion.img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Pooja Ravi" 
                    className="profile-img"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 1,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 40px rgba(74, 144, 226, 0.3)"
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-img profile-placeholder" style={{display: 'none'}}>
                    <span>PR</span>
                  </div>
                </MagneticHover>
              </FloatingElement>
              <div className="profile-info">
                <StaggerItem>
                  <motion.h1 
                    className="name"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Pooja Ravi
                  </motion.h1>
                </StaggerItem>
                <StaggerItem>
                  <TypingEffect
                    texts={[
                      "UI/UX Designer",
                      "Creative Problem Solver", 
                      "User Experience Expert",
                      "Digital Product Designer"
                    ]}
                    className="title typing-title"
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseDuration={2000}
                  />
                </StaggerItem>
                <StaggerItem>
                  <motion.p 
                    className="location"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Based in San Francisco, CA
                  </motion.p>
                </StaggerItem>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      <div className="content-sections">
        <ScrollReveal direction="up">
          <section className="intro-section">
            <motion.p 
              className="intro-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              I'm a UI/UX designer with over 5 years of experience crafting intuitive and engaging digital experiences. My passion lies in 
              understanding user needs and translating them into elegant, functional designs. I believe in a user-centered approach, where 
              every design decision is informed by research and data. My goal is to create products that not only look beautiful but also solve 
              real problems and enhance people's lives.
            </motion.p>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <section className="approach-section">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My Approach
            </motion.h2>
            <motion.p 
              className="approach-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              My design process is iterative and collaborative, involving close communication with clients and stakeholders throughout the 
              project lifecycle. I start by conducting thorough user research to identify pain points and opportunities. This research informs 
              the creation of user personas, journey maps, and wireframes. I then move on to visual design, focusing on creating a cohesive 
              and visually appealing interface that aligns with the brand's identity. I believe in continuous testing and refinement, ensuring 
              that the final product meets the needs of its users and achieves its objectives.
            </motion.p>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <SkillsVisualization />
        </ScrollReveal>
      </div>
    </div>
  );
}
