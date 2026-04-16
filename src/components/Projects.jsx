import React, { useState } from 'react';
import { Scan, ShieldCheck, Receipt, Car, ShoppingCart, Radar, Calculator, Github, ExternalLink, Rotate3d } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    category: 'security',
    title: 'Automation Pentesting Tool',
    shortDesc: 'Cross-platform automated penetration testing tool',
    fullDesc: 'Automates common pentesting tasks including vulnerability scanning, reconnaissance, and exploit testing across multiple platforms, reducing manual testing time significantly.',
    tech: ['Python', 'Kali Linux', 'Nmap'],
    icon: <Scan />,
    github: 'https://github.com/BARATHRAJI',
    date: 'Oct 2025 — Mar 2026'
  },
  {
    id: 2,
    category: 'mobile',
    title: 'She-Guardian App',
    shortDesc: 'Women safety app — phishing detection & prevention',
    fullDesc: 'Flutter-based app to protect women from cyber attacks. Features real-time phishing URL detection, threat alerts, safety notifications, and educational content about social engineering.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    icon: <ShieldCheck />,
    github: 'https://github.com/BARATHRAJI',
    date: 'Jan 2025 — May 2025'
  },
  {
    id: 3,
    category: 'desktop',
    title: 'Supermarket Billing System',
    shortDesc: 'Desktop billing app for supermarket operations',
    fullDesc: 'Desktop billing application with product management, barcode scanning, invoice generation, inventory tracking, and sales reporting. Built at QwickSoft Pvt Ltd.',
    tech: ['C#', 'WPF', 'MySQL'],
    icon: <Receipt />,
    github: 'https://github.com/BARATHRAJI',
    date: 'Dec 2025 — Mar 2026'
  },
  {
    id: 4,
    category: 'mobile',
    title: 'Driver Application',
    shortDesc: 'Ride management app for drivers',
    fullDesc: 'Android-based driver app for ride management with real-time tracking, trip management, driver dashboard, navigation, and push notifications. Built at QwickSoft Pvt Ltd.',
    tech: ['Flutter', 'Firebase', 'Maps API'],
    icon: <Car />,
    github: 'https://github.com/BARATHRAJI',
    date: 'Dec 2025 — Mar 2026'
  },
  {
    id: 5,
    category: 'web',
    title: 'E-commerce Website',
    shortDesc: 'Full-stack supermarket e-commerce platform',
    fullDesc: 'Full-stack e-commerce website with product catalog, shopping cart, user authentication, order management, admin panel, and responsive design. Delivered to a real client.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    icon: <ShoppingCart />,
    github: 'https://github.com/BARATHRAJI',
    date: 'Jun 2024 — Sep 2024'
  },
  {
    id: 6,
    category: 'security',
    title: 'ReconPro Tool',
    shortDesc: 'Cross-platform reconnaissance tool',
    fullDesc: 'Reconnaissance tool for information gathering as part of penetration testing. Supports cross-platform recon operations with automated reporting.',
    tech: ['Python', 'Kali Linux', 'OSINT'],
    icon: <Radar />,
    github: 'https://github.com/BARATHRAJI',
    date: '2025'
  },
  {
    id: 7,
    category: 'web',
    title: 'Responsive Calculator',
    shortDesc: 'Interactive calculator web app',
    fullDesc: 'Interactive, responsive calculator with clean UI, keyboard support, and mathematical operations including basic and scientific calculations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: <Calculator />,
    github: 'https://github.com/BARATHRAJI',
    date: 'May 2024'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'web', 'mobile', 'security', 'desktop'];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">&lt;projects&gt;</span>
          <h2 className="section-title">My <span className="accent">Projects</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-inner">
                <div className="project-front glass-card">
                  <div className="project-icon">{project.icon}</div>
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc}</p>
                  <div className="project-tech">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-flip-hint">
                    <Rotate3d size={14} /> Hover for details
                  </div>
                </div>
                <div className="project-back glass-card">
                  <h3>{project.title}</h3>
                  <p>{project.fullDesc}</p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
