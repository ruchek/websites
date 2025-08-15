import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS configuration - these need to be set up
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_default';
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_default';
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'default_key';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'UI/UX Portfolio Contact',
      message: formData.message,
      to_email: 'imruchekshah@gmail.com',
      reply_to: formData.email
    };

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      console.log('EmailJS result:', result);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try the alternative method below or contact me directly at imruchekshah@gmail.com.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || 'UI/UX enquiry');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:imruchekshah@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            I'm currently available for freelance work and full-time positions. 
            Please reach out with any inquiries or project ideas.
          </p>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="form-buttons">
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <button 
                type="button" 
                className="btn-secondary"
                onClick={handleMailtoFallback}
              >
                Alternative: Open Email Client
              </button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <h3 className="contact-info-title">Contact Information</h3>
          <div className="contact-details">
            <p className="contact-detail">
              <strong>Email:</strong> imruchekshah@gmail.com
            </p>
            <p className="contact-detail">
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <div className="social-icon">💼</div>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <div className="social-icon">🐦</div>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
