import React from 'react';
import { GraduationCap, BookOpen, Calendar, CheckCircle } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Presidency College, Chennai',
      university: 'Madras University',
      date: '2024 — 2026',
      percentage: 80,
      icon: <GraduationCap />,
      tags: ['Computer Science', 'Full-Time']
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Bishop Heber College, Trichy',
      university: 'Bharathidasan University',
      date: '2021 — 2024',
      percentage: 82,
      icon: <BookOpen />,
      tags: ['Software Dev', 'Academic']
    }
  ];

  const certifications = [
    'Certified Ethical Hacker (CEH) - Training',
    'Full Stack Web Development - Great Learning',
    'Python for Data Science - NPTEL',
    'Android App Development - Internshala'
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">&lt;education&gt;</span>
          <h2 className="section-title">My <span className="accent">Education</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="edu-card glass-card">
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <span className="edu-university">{edu.university}</span>
                <div className="edu-date">
                  <Calendar size={14} />
                  <span>{edu.date}</span>
                </div>
                <div className="edu-grade">
                  <div className="grade-ring">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" className="ring-bg" />
                      <circle 
                        cx="50" cy="50" r="40" 
                        className="ring-fill" 
                        style={{ strokeDashoffset: 251 - (251 * edu.percentage) / 100 }}
                      />
                    </svg>
                    <span className="grade-text">{edu.percentage}%</span>
                  </div>
                </div>
              </div>
              <div className="edu-details">
                {edu.tags.map(tag => <span key={tag} className="edu-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="cert-title">
            <CheckCircle size={24} />
            Certifications
          </h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item glass-card">
                <CheckCircle size={16} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* SVG Gradient for the rings */}
      <svg style={{ height: 0, width: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Education;
