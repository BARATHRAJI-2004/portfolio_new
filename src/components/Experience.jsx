import React from 'react';
import { Code2, Calendar, ShieldCheck, Briefcase } from 'lucide-react';

const experienceData = [
  {
    type: 'Internship',
    role: 'Software Engineer Trainee',
    company: 'QwickSoft Pvt Ltd · Chennai',
    date: 'Dec 2025 — Mar 2026',
    duration: '3 months',
    icon: <Code2 />,
    badgeClass: '',
    responsibilities: [
      'Developed a Driver Application for ride management using Flutter with real-time tracking and trip management',
      'Built a Supermarket Billing System using C# and WPF with product management, invoice generation, and inventory tracking',
      'Worked on full software development lifecycle — requirement analysis, design, development, testing, and deployment'
    ],
    tags: ['Flutter', 'C#', 'WPF', 'MySQL', 'Firebase']
  },
  {
    type: 'Internship',
    role: 'Cybersecurity Intern',
    company: 'Cyber Strings · Chennai',
    date: 'May 2024 — July 2024',
    duration: '2 months',
    icon: <ShieldCheck />,
    badgeClass: 'security',
    responsibilities: [
      'Performed vulnerability assessments and penetration testing on web applications identifying security loopholes',
      'Gained hands-on experience with security tools like Burp Suite, Nmap, and Metasploit for ethical hacking',
      'Assisted in implementing security best practices and mitigation strategies to protect against common attacks'
    ],
    tags: ['Pen Testing', 'VAPT', 'Ethical Hacking', 'Burp Suite', 'Kali Linux']
  },
  {
    type: 'Freelance',
    role: 'Full-Stack Developer',
    company: 'Self-Employed',
    date: 'Aug 2024 — Present',
    duration: 'Ongoing',
    icon: <Briefcase />,
    badgeClass: 'freelance',
    responsibilities: [
      'Designed and developed custom web solutions for various clients focusing on responsive UI and robust functionality',
      'Built and maintained small to medium scale management systems using React and Node.js',
      'Provided technical consultation for application security and performance optimization'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Consulting']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">&lt;experience&gt;</span>
          <h2 className="section-title">Work <span className="accent">Experience</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-entry">
              <div className="timeline-dot">
                {exp.icon}
              </div>
              <div className="timeline-card glass-card">
                <div className={`timeline-badge ${exp.badgeClass}`}>{exp.type}</div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <div className="timeline-date">
                  <Calendar size={14} />
                  <span>{exp.date} · {exp.duration}</span>
                </div>
                <ul>
                  {exp.responsibilities.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
