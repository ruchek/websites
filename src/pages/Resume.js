import React from 'react';
import '../styles/Resume.css';

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1 className="resume-title">Resume</h1>
        <p className="resume-subtitle">Download or view my complete professional background</p>
        
        <div className="resume-actions">
          <a 
            href="/resume.pdf" 
            download="Sophia_Carter_Resume.pdf"
            className="btn-primary download-btn"
          >
            📥 Download PDF
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary view-btn"
          >
            👁️ View in New Tab
          </a>
        </div>
      </div>

      <div className="resume-viewer">
        <div className="resume-container">
          <div className="resume-loading">
            <p>Loading resume...</p>
          </div>
          <iframe 
            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1" 
            title="Sophia Carter Resume"
            className="resume-iframe"
            frameBorder="0"
            onLoad={(e) => {
              const loadingEl = e.target.parentNode.querySelector('.resume-loading');
              if (loadingEl) loadingEl.style.display = 'none';
            }}
            onError={(e) => {
              const loadingEl = e.target.parentNode.querySelector('.resume-loading');
              if (loadingEl) {
                loadingEl.innerHTML = '<p>Unable to display PDF. Please <a href="/resume.pdf" download>download</a> or <a href="/resume.pdf" target="_blank">view in new tab</a>.</p>';
              }
            }}
          />
        </div>
        
        <div className="mobile-fallback">
          <div className="fallback-content">
            <h3>Mobile View</h3>
            <p>For the best viewing experience on mobile devices, please download the PDF or view it in a new tab.</p>
            <div className="fallback-actions">
              <a 
                href="/resume.pdf" 
                download="Sophia_Carter_Resume.pdf"
                className="btn-primary"
              >
                Download PDF
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View in Browser
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-summary">
        <h2>Quick Summary</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <h3>Experience</h3>
            <p>5+ years in UI/UX Design</p>
          </div>
          <div className="summary-item">
            <h3>Specialization</h3>
            <p>Mobile & Web Applications</p>
          </div>
          <div className="summary-item">
            <h3>Location</h3>
            <p>San Francisco, CA</p>
          </div>
          <div className="summary-item">
            <h3>Availability</h3>
            <p>Open to new opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
