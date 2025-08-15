import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const itemsPerPage = 6;

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
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A curated collection of my design work, showcasing my skills and experience in UI/UX design.
        </p>
      </div>

      <div className="filter-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {paginatedProjects.map(project => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`} 
            className="project-card-link"
          >
            <div className="project-card">
              <div className="project-image-container">
                <div 
                  className="project-image"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.colors.join(', ')})` 
                  }}
                >
                  <div className="project-preview">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="preview-image"
                    />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          </Link>
        ))}
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
