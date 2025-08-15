import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProjectDetail.css';

const projectDetails = {
  1: {
    title: 'Mobile App Redesign for Fitness Tracker',
    category: 'UI/UX Design',
    heroImages: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop'],
    overview: 'This project involved a comprehensive redesign of a mobile fitness tracking application to enhance user experience and streamline workout management. The goal was to create an intuitive interface that simplifies complex tasks like meal planning, workouts tracking, bill payments, and account management, making fitness more accessible and efficient for users.',
    userResearch: {
      title: 'User Research',
      description: 'We conducted extensive user research, including interviews and usability testing with current users, to identify pain points and areas for improvement. Key findings revealed that users struggled with navigation, found the interface cluttered, and desired more personalized features. This research informed our design decisions and helped us prioritize features that would have the most impact on user satisfaction.',
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop']
    },
    designIterations: {
      title: 'Design Iterations',
      description: 'Based on the research insights, we developed several design iterations, focusing on simplifying the navigation, decluttering the interface, and introducing personalized dashboards. We created wireframes and interactive prototypes to test these iterations with users, gathering feedback to refine the design. Key changes included a streamlined onboarding flow, customizable dashboard, and improved transaction history visualization.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    },
    finalResults: {
      title: 'Final Results',
      description: 'The final design resulted in a significant improvement in user satisfaction, as evidenced by post-launch surveys and user feedback. Users praised the intuitive design, clean interface, and personalized features. The redesign led to a 40% increase in user engagement and a 15% reduction in support tickets related to app navigation. This project demonstrates the impact of user-centered design in creating effective and enjoyable digital experiences.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    }
  },
  2: {
    title: 'E-commerce Website for Sustainable Fashion',
    category: 'UI/UX Design',
    heroImages: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop'],
    overview: 'Designed a modern e-commerce platform focused on sustainable fashion brands. The project aimed to create an engaging shopping experience that highlights eco-friendly products while maintaining a clean, modern aesthetic that appeals to environmentally conscious consumers.',
    userResearch: {
      title: 'User Research',
      description: 'Conducted surveys and interviews with eco-conscious shoppers to understand their shopping behaviors and pain points when purchasing sustainable fashion online.',
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop']
    },
    designIterations: {
      title: 'Design Iterations',
      description: 'Iterative design process focusing on product discovery, sustainability information display, and streamlined checkout process.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    },
    finalResults: {
      title: 'Final Results',
      description: 'Launched a successful e-commerce platform with 60% increase in conversion rates and positive user feedback on the sustainability-focused design approach.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    }
  },
  3: {
    title: 'User Research Study for Healthcare App',
    category: 'UX Research',
    heroImages: ['https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop'],
    overview: 'Conducted comprehensive user research for a healthcare application focusing on patient engagement and medication management. The study aimed to identify user needs and pain points in digital healthcare interactions.',
    userResearch: {
      title: 'Research Methodology',
      description: 'Employed mixed-methods research including user interviews, surveys, and usability testing with healthcare professionals and patients.',
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop']
    },
    designIterations: {
      title: 'Insights & Recommendations',
      description: 'Provided actionable insights and design recommendations based on research findings to improve user experience and healthcare outcomes.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    },
    finalResults: {
      title: 'Impact',
      description: 'Research findings led to significant improvements in the app design, resulting in better patient engagement and medication adherence rates.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    }
  },
  4: {
    title: 'Mobile Banking App Redesign',
    category: 'UI/UX Design',
    heroImages: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=300&h=400&fit=crop'],
    overview: 'Redesigned a mobile banking application to improve user experience and modernize the interface while maintaining security and compliance standards.',
    userResearch: {
      title: 'User Research',
      description: 'Analyzed user behaviors and pain points in existing banking app through analytics and user feedback.',
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop']
    },
    designIterations: {
      title: 'Design Process',
      description: 'Created multiple design iterations focusing on simplified navigation, enhanced security features, and improved account management.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    },
    finalResults: {
      title: 'Results',
      description: 'Successfully launched redesigned app with improved user satisfaction scores and reduced customer support inquiries.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    }
  },
  5: {
    title: 'Educational Platform Dashboard',
    category: 'UI/UX Design',
    heroImages: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop'],
    overview: 'Designed an intuitive dashboard for an educational platform to help students track their progress and manage their learning journey effectively.',
    userResearch: {
      title: 'User Research',
      description: 'Conducted research with students and educators to understand learning patterns and dashboard usage preferences.',
      images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop']
    },
    designIterations: {
      title: 'Design Iterations',
      description: 'Iterative design focusing on information hierarchy, progress visualization, and personalized learning recommendations.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    },
    finalResults: {
      title: 'Final Results',
      description: 'Delivered a comprehensive dashboard that improved student engagement and provided clear insights into learning progress.',
      images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop']
    }
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="error-message">
          <h2>Project not found</h2>
          <Link to="/projects" className="back-link">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-header">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <h1 className="project-title">Project Title: {project.title}</h1>
      </div>

      <section className="hero-section">
        <div className="hero-images">
          <div className="main-image">
            <img src={project.heroImages[0]} alt={project.title} />
          </div>
          <div className="side-images">
            <img src={project.heroImages[1]} alt={`${project.title} view 1`} />
            <img src={project.heroImages[2]} alt={`${project.title} view 2`} />
          </div>
        </div>
      </section>

      <section className="project-overview">
        <h2 className="section-title">Project Overview</h2>
        <p className="section-description">{project.overview}</p>
      </section>

      <section className="project-section">
        <h2 className="section-title">{project.userResearch.title}</h2>
        <p className="section-description">{project.userResearch.description}</p>
        <div className="section-images">
          {project.userResearch.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.userResearch.title} ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2 className="section-title">{project.designIterations.title}</h2>
        <p className="section-description">{project.designIterations.description}</p>
        <div className="section-images design-iterations">
          {project.designIterations.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.designIterations.title} ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2 className="section-title">{project.finalResults.title}</h2>
        <p className="section-description">{project.finalResults.description}</p>
        <div className="section-images">
          {project.finalResults.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.finalResults.title} ${index + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
}
