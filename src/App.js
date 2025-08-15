import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/animations/CustomCursor';
import { PageTransition } from './components/animations/AnimationWrapper';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      <CustomCursor />
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-overlay active" 
          onClick={() => setMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.header 
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">📱</span>
            Design Portfolio
          </Link>
          
          <motion.nav 
            className={`nav ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['/', '/projects', '/contact', '/resume'].map((path, index) => {
              const labels = ['About', 'Projects', 'Contact', 'Resume'];
              return (
                <motion.div
                  key={path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: mobileMenuOpen ? index * 0.1 + 0.2 : 0,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link 
                    to={path}
                    className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {labels[index]}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            <div className="profile-avatar">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Profile" 
                className="avatar"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="avatar avatar-placeholder" style={{display: 'none'}}>
                <span>SC</span>
              </div>
            </div>
            
            <button 
              className="menu-icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.header>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition>
                <Projects />
              </PageTransition>
            } />
            <Route path="/projects/:id" element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            } />
            <Route path="/resume" element={
              <PageTransition>
                <Resume />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
