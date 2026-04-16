import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Server, Database, Smartphone, Shield, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Monitor />,
    items: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 65 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Angular', level: 55 },
    ]
  },
  {
    category: 'Backend',
    icon: <Server />,
    items: [
      { name: 'PHP', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Java', level: 65 },
      { name: 'Python', level: 70 },
      { name: 'C#', level: 75 },
    ]
  },
  {
    category: 'Database',
    icon: <Database />,
    items: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 65 },
      { name: 'Firebase', level: 70 },
    ]
  },
  {
    category: 'Mobile & Desktop',
    icon: <Smartphone />,
    items: [
      { name: 'Flutter', level: 70 },
      { name: 'Android Studio', level: 60 },
      { name: 'C# WPF', level: 75 },
      { name: '.NET Framework', level: 65 },
    ]
  },
  {
    category: 'Cybersecurity',
    id: 'security',
    icon: <Shield />,
    items: [
      { name: 'Ethical Hacking', level: 75 },
      { name: 'Penetration Testing', level: 70 },
      { name: 'Kali Linux', level: 75 },
      { name: 'Burp Suite', level: 70 },
      { name: 'Network Security', level: 65 },
    ]
  },
  {
    category: 'Tools & Others',
    icon: <Wrench />,
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
      { name: 'REST APIs', level: 75 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">&lt;skills&gt;</span>
          <h2 className="section-title">My <span className="accent">Skills</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-categories">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category glass-card" data-category={category.id || ''}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.category}</h3>
              </div>
              <div className="skill-items">
                {category.items.map((skill, sIndex) => (
                  <SkillItem key={sIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setWidth(level), 200);
      }
    }, { threshold: 0.1 });

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-item" ref={barRef}>
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default Skills;
