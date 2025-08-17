import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerContainer, StaggerItem, ScrollReveal } from '../components/animations/AnimationWrapper';
import { TouchRipple } from '../components/animations/MobileGestures';
import '../styles/Projects.css';

const projectData = [
  { 
    id: 1, 
    title: 'Mobile App Redesign for Fitness Tracker', 
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    colors: ['#F4C2A1', '#D4A574', '#E8C4A0']
  },
  { 
    id: 2, 
    title: 'E-commerce Website for Sustainable Fashion', 
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    colors: ['#E8D5B7', '#F0E68C', '#DEB887']
  },
  { 
    id: 3, 
    title: 'User Research Study for Healthcare App', 
    category: 'UX Research',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    colors: ['#7FCDCD', '#5F9EA0', '#4682B4']
  },
  { 
    id: 4, 
    title: 'Mobile Banking App Redesign', 
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    colors: ['#98FB98', '#90EE90', '#32CD32']
  },
  { 
    id: 5, 
    title: 'Educational Platform Dashboard', 
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    colors: ['#FFB6C1', '#FFA0B4', '#FF69B4']
  }
];

const categories = ['All Projects', 'UI Design', 'UX Research'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 6;

  // Check if mobile on mount and window resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProjects = projectData.filter(project => {
    if (selectedCategory === 'All Projects') return true;
    if (selectedCategory === 'UI Design') return project.category === 'UI/UX Design';
    if (selectedCategory === 'UX Research') return project.category === 'UX Research';
    return true;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="projects-page">
      <ScrollReveal direction="up">
        <div className="projects-header">
          <motion.h1 
            className="projects-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Projects
          </motion.h1>
          <motion.p 
            className="projects-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            A curated collection of my design work, showcasing my skills and experience in UI/UX design.
          </motion.p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <div className="filter-tabs">
          {categories.map((category, index) => (
            <TouchRipple key={category}>
              <motion.button
                className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(74, 144, 226, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            </TouchRipple>
          ))}
        </div>
      </ScrollReveal>

      <div className="projects-grid-container">
        <motion.div className="projects-grid">
          <AnimatePresence mode="wait">
            {paginatedProjects.map((project, index) => (
            <motion.div
              key={`${selectedCategory}-${project.id}`}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={!isMobile ? { y: -10 } : undefined}
              style={{ touchAction: 'pan-y' }}
            >
              <Link 
                to={`/projects/${project.id}`} 
                className="project-card-link"
              >
                <motion.div 
                  className="project-card"
                  whileHover={!isMobile ? { 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  } : undefined}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  style={{ touchAction: 'pan-y' }}  // Allow vertical scrolling on touch
                  >
                    <div className="project-image-container">
                      <motion.div 
                        className="project-image"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.colors.join(', ')})`,
                          touchAction: 'pan-y'
                        }}
                        whileHover={!isMobile ? { scale: 1.1 } : undefined}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="project-preview"
                          whileHover={!isMobile ? { 
                            scale: 1.05,
                            rotateZ: 2
                          } : undefined}
                          style={{ touchAction: 'pan-y' }}
                        >
                          <motion.img 
                            src={project.image} 
                            alt={project.title}
                            className="preview-image"
                            whileHover={!isMobile ? { scale: 1.1 } : undefined}
                            transition={{ duration: 0.3 }}
                            style={{ touchAction: 'pan-y' }}
                          />
                        </motion.div>
                        
                        {/* Enhanced overlay with project details */}
                        <motion.div
                          className="project-overlay"
                          initial={{ opacity: 0 }}
                          whileHover={!isMobile ? { opacity: 1 } : undefined}
                          transition={{ duration: 0.3 }}
                          style={{ touchAction: 'pan-y' }}
                        >
                          <div className="overlay-content">
                            <motion.h3
                              className="overlay-title"
                              initial={{ y: 30, opacity: 0 }}
                              whileHover={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.4 }}
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p
                              className="overlay-category"
                              initial={{ y: 20, opacity: 0 }}
                              whileHover={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2, duration: 0.4 }}
                            >
                              {project.category}
                            </motion.p>
                            <motion.span
                              className="overlay-cta"
                              initial={{ y: 20, opacity: 0 }}
                              whileHover={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                            >
                              View Project →
                            </motion.span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="project-info"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <motion.h3 
                        className="project-title"
                        whileHover={{ color: "var(--primary-color)" }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="project-category"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.category}
                      </motion.p>
                    </motion.div>
                  </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
