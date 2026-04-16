import React, { useState, useEffect, useRef } from 'react';
import { Code2, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { target: 7, label: 'Projects Built', icon: <Code2 />, suffix: '' },
    { target: 2, label: 'Internships', icon: <Briefcase />, suffix: '' },
    { target: 80, label: 'Academic Score', icon: <GraduationCap />, suffix: '%' },
    { target: 8, label: 'Months Experience', icon: <TrendingUp />, suffix: '' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">&lt;about&gt;</span>
          <h2 className="section-title">About <span className="accent">Me</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text glass-card">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full-Stack Developer and Cybersecurity Professional from 
              <strong> Tamil Nadu, India</strong>. I design and develop full-stack web applications, 
              Android apps, and desktop software using modern technologies.
            </p>
            <p>
              With hands-on experience in penetration testing, ethical hacking, and application security 
              from my internship at <strong>Cyber Strings</strong>, and software engineering experience 
              at <strong>QwickSoft Pvt Ltd</strong>, I bring a unique blend of development and security expertise.
            </p>
            <p>
              I'm an MCA graduate from <strong>Presidency College, Chennai</strong> with a consistent 
              academic record of <strong>80%+</strong>.
            </p>
            <div className="about-tags">
              {['Full-Stack Dev', 'Android Dev', 'Cybersecurity', 'Ethical Hacking', 'Penetration Testing'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ target, label, icon, suffix }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-card glass-card" ref={cardRef}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-icon">{icon}</div>
    </div>
  );
};

export default About;
