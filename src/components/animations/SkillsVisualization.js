import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  { name: 'UI Design', level: 95, color: '#4A90E2', icon: '🎨' },
  { name: 'UX Research', level: 88, color: '#50E3C2', icon: '🔍' },
  { name: 'Prototyping', level: 92, color: '#F5A623', icon: '⚡' },
  { name: 'User Testing', level: 85, color: '#D0021B', icon: '👥' },
  { name: 'Design Systems', level: 90, color: '#9013FE', icon: '🏗️' },
  { name: 'Figma', level: 96, color: '#7B68EE', icon: '🔧' },
  { name: 'Adobe XD', level: 87, color: '#FF61F6', icon: '💎' },
  { name: 'Sketch', level: 82, color: '#FFAB00', icon: '✏️' }
];

const SkillsVisualization = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [viewMode, setViewMode] = useState('bars'); // 'bars' or 'radial'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className="skills-visualization">
      <div className="skills-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="view-toggle">
          {['bars', 'radial'].map((mode) => (
            <motion.button
              key={mode}
              className={`toggle-btn ${viewMode === mode ? 'active' : ''}`}
              onClick={() => setViewMode(mode)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mode === 'bars' ? '📊' : '🎯'}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          className={`skills-container ${viewMode}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {viewMode === 'bars' ? (
            // Bar Chart View
            <div className="skills-bars">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`skill-item ${selectedSkill === skill.name ? 'selected' : ''}`}
                  variants={skillVariants}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                >
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <motion.span
                      className="skill-percentage"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar"
                      style={{ backgroundColor: skill.color }}
                      variants={barVariants}
                      custom={skill.level}
                      whileHover={{ 
                        boxShadow: `0 0 20px ${skill.color}50`,
                        scale: 1.02
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Radial/Circular View
            <div className="skills-radial">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="radial-skill"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                >
                  <div className="radial-container">
                    <svg width="120" height="120" className="radial-svg">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="rgba(74, 144, 226, 0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke={skill.color}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: skill.level / 100 }}
                        transition={{ 
                          duration: 2, 
                          delay: index * 0.2,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{
                          strokeDasharray: "314",
                          strokeDashoffset: "314",
                          transform: "rotate(-90deg)",
                          transformOrigin: "50% 50%"
                        }}
                      />
                    </svg>
                    <div className="radial-content">
                      <span className="radial-icon">{skill.icon}</span>
                      <span className="radial-percentage">{skill.level}%</span>
                    </div>
                  </div>
                  <span className="radial-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="skill-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="skill-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const skill = skillsData.find(s => s.name === selectedSkill);
                return (
                  <>
                    <div className="modal-header">
                      <span className="modal-icon">{skill.icon}</span>
                      <h3>{skill.name}</h3>
                      <button onClick={() => setSelectedSkill(null)}>✕</button>
                    </div>
                    <div className="modal-content">
                      <div className="modal-level">
                        <span>Proficiency: {skill.level}%</span>
                        <div className="modal-bar">
                          <motion.div
                            className="modal-progress"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>
                      <p>
                        Detailed description of experience and projects related to {skill.name}.
                        This would include specific tools, methodologies, and achievements.
                      </p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .skills-visualization {
          margin: 4rem 0;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 20px;
          position: relative;
        }

        .skills-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .skills-header h2 {
          font-size: 1.8rem;
          color: var(--text-primary);
          margin: 0;
        }

        .view-toggle {
          display: flex;
          gap: 0.5rem;
        }

        .toggle-btn {
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          padding: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .toggle-btn.active {
          border-color: var(--primary-color);
          background: var(--primary-color);
        }

        .skills-bars {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          cursor: pointer;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .skill-item:hover,
        .skill-item.selected {
          background: var(--bg-tertiary);
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .skill-icon {
          font-size: 1.5rem;
        }

        .skill-name {
          flex: 1;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-weight: 700;
          color: var(--primary-color);
        }

        .skill-bar-container {
          height: 8px;
          background: var(--bg-primary);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar {
          height: 100%;
          border-radius: 4px;
        }

        .skills-radial {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .radial-skill {
          text-align: center;
          cursor: pointer;
        }

        .radial-container {
          position: relative;
          margin-bottom: 1rem;
        }

        .radial-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .radial-icon {
          display: block;
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .radial-percentage {
          font-weight: 700;
          color: var(--text-primary);
        }

        .radial-name {
          font-weight: 600;
          color: var(--text-secondary);
        }

        .skill-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .skill-modal {
          background: var(--bg-primary);
          border-radius: 16px;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          border: 1px solid var(--border-color);
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h3 {
          flex: 1;
          margin: 0;
          color: var(--text-primary);
        }

        .modal-header button {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 1.2rem;
        }

        .modal-level {
          margin-bottom: 1rem;
        }

        .modal-bar {
          height: 6px;
          background: var(--bg-secondary);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 0.5rem;
        }

        .modal-progress {
          height: 100%;
        }

        @media (max-width: 768px) {
          .skills-visualization {
            padding: 1rem;
          }

          .skills-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .skills-radial {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsVisualization;