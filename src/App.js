import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function App() {
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">📱</span>
            Design Portfolio
          </Link>
          
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/resume" 
              className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}
            >
              Resume
            </Link>
            <div className="menu-icon">≡</div>
          </nav>

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
          </div>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
