import type { Experience, Project, Certificate, Skill, MediaItem, ContactInfo } from '../types';

export const personalInfo = {
  name: "Christian Joseph R. Pagatpatan",
  title: "Computer Science Graduate",
  subtitle: "Data Entry Specialist | Document & Data Management | Front-End Developer | Database Management | Photographer",
  bio: "Computer science graduate specializing in front-end development with foundational backend skills in database management. I excel at creating user-friendly web interfaces and have experience in document management, data entry, and visual content creation through photography and videography.",
  location: "Sulvec, Narvacan, Ilocos Sur, Philippines",
  email: "pagatpatan.christianjoseph@gmail.com",
  phone: "+63 (927) 713-0119",
  avatar: "/Pagatpatan_10.jpg"  // Change this to match your image filename
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Part-Time Data Entry Specialist",
    company: "Private Client / Freelance",
    location: "Remote",
    duration: "Jul 2025 - Aug 2025",
    startDate: "2025-07",
    endDate: "2025-08",
    description: "Maintained accurate and organized datasets through careful data cleaning and validation for private clients. Completed data entry tasks within required timelines while ensuring data accuracy and integrity.",
    skills: ["Data Entry", "Data Cleaning", "Data Validation", "Excel", "Database Management", "Documentation"],
    achievements: [
      "Maintained accurate and organized datasets through careful data cleaning and validation",
      "Completed assigned data entry tasks within required timelines while maintaining accuracy", 
      "Reduced errors by double-checking entries and following provided data standards",
      "Performed basic data cleaning, including correcting inconsistencies and removing duplicate entries"
    ]
  },
  {
    id: "exp-2", 
    title: "Freelance Developer – Educational Game Project",
    company: "Freelance",
    location: "Remote",
    duration: "Dec 2024 - Jan 2025",
    startDate: "2024-12",
    endDate: "2025-01",
    description: "Designed and developed PILIpinas, an Android educational game using Flutter to raise awareness about West Philippine Sea territorial issues. Managed the full development lifecycle independently from concept to release.",
    skills: ["Flutter", "Dart", "Android Development", "UI/UX Design", "Game Development", "Mobile Optimization"],
    achievements: [
      "Designed and developed an Android educational game using Flutter",
      "Built interactive quizzes and facts with focus on UI/UX and responsiveness",
      "Optimized mobile performance for smooth gameplay experience",
      "Managed full development lifecycle independently from conceptualization to testing and release"
    ]
  },
  {
    id: "exp-3",
    title: "Intern/OJT - Web Developer",
    company: "University Information Office, University of Northern Philippines",
    location: "Vigan City, Ilocos Sur",
    duration: "Jul 2024 - Aug 2024", 
    startDate: "2024-07",
    endDate: "2024-08",
    description: "Performed data entry and audio-to-text transcription while developing a responsive website prototype for the University Information Office to enhance their online presence.",
    skills: ["HTML", "CSS", "JavaScript","Firebase", "Data Entry", "Audio Transcription", "Web Development", "UI/UX Design"],
    achievements: [
      "Performed data entry and audio-to-text transcription for office documentation",
      "Designed and developed responsive website prototype for enhanced online presence",
      "Created front-end layouts and interactive features using HTML, CSS, and JavaScript",
      "Tested and debugged prototype to ensure functional, user-friendly interface ready for deployment"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "OTICURE",
    description: "AI-powered mobile health application using machine learning for medication management",
    longDescription: "OTICURE tackles medication non-adherence using AI and machine learning algorithms. The app provides personalized medication recommendations, intelligent reminders, and real-time drug identification to improve patient outcomes and reduce healthcare costs.",
    image: "/oticure.png",
    technologies: ["Flutter", "Dart", "Firebase", "Machine Learning", "TF-IDF Algorithm", "Python", "Scikit-learn"],
    githubUrl: "https://github.com/iamsylo/medknows",
    category: "mobile",
    featured: true
  },
  {
    id: "proj-2",
    title: "Portfolio Website",
    description: "Modern, responsive personal portfolio website with dark mode and interactive animations",
    longDescription: "A comprehensive personal portfolio website showcasing professional experience, projects, and creative work. Features include responsive design, dark/light theme toggle, smooth animations, interactive project galleries, and contact forms. Built with modern web technologies for optimal performance and user experience.",
    image: "/portfolio.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/iamsylo/portfolio",
    liveUrl: "https://syloportfolio.netlify.app/",
    category: "web",
    featured: true
  },
    {
    id: "proj-3",
    title: "UNP ALPHA",
    description: "Academic Liaison for Processing and Handling Activities",
    longDescription: "A responsive web application prototype that streamlines office tasks including event scheduling, memo management, multimedia posting, and status tracking. Includes comprehensive user documentation for navigation and report generation.",
    image: "/dts.png",
    technologies: ["Firebase", "CSS", "HTML", "TypeScript"],
    githubUrl: "https://github.com/iamsylo/Document-Tracking-System",
    category: "web",
    featured: true
  },
  {
    id: "proj-4",
    title: "PILIpinas",
    description: "Educational Android game raising awareness about West Philippine Sea territorial issues",
    longDescription: "Educational Android game about West Philippine Sea territorial issues featuring interactive quizzes and fact-based modules. Built with Flutter for optimal mobile performance.",
    image: "/pilipinas.png",
    technologies: ["Flutter", "Dart", "Firebase", "Android Development", "UI/UX Design"],
    githubUrl: "https://github.com/iamsylo/pilipinas",
    category: "mobile",
    featured: true
  }
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet Training Institute",
    issueDate: "2024-11",
    credentialId: "3117694473CP",
    credentialUrl: "https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1769999680/3117694473CP.pdf",
    skills: ["Cybersecurity", "Network Security", "Threat Management"]
  },
  {
    id: "cert-2",
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet Training Institute",
    issueDate: "2024-11",
    credentialId: "4924605867CP",
    credentialUrl: "https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1769999564/4924605867CP.pdf",
    skills: ["Cybersecurity", "Network Security", "DevOps"]
  },
  {
    id: "cert-3",
    title: "Test Of Practical Competency in IT (TOPCIT) - Level 2",
    issuer: "Institute for Information & Communications Technology Planning & Evaluation (IITP), South Korea",
    issueDate: "2025-01",
    skills: ["Software Development", "Database Management", "IT Problem Solving"]
  }
];

export const skills: Skill[] = [
  // Tech Stack - Frontend
  { name: "JavaScript", category: "tech", group: "frontend" },
  { name: "TypeScript", category: "tech", group: "frontend" },
  { name: "Tailwind", category: "tech", group: "frontend" },
  { name: "React", category: "tech", group: "frontend" },
  { name: "Vite", category: "tech", group: "frontend" },
  { name: "Framer Motion", category: "tech", group: "frontend" },
  { name: "Dart/Flutter", category: "tech", group: "frontend" },

  // Tech Stack - Backend
  { name: "SQL", category: "tech", group: "backend" },
  { name: "Firebase", category: "tech", group: "backend" },
  { name: "PHP", category: "tech", group: "backend" },
  { name: "REST API", category: "tech", group: "backend" },

  // Tech Stack - AI / Machine Learning
  { name: "Python", category: "tech", group: "ai" },
  { name: "TensorFlow", category: "tech", group: "ai" },
  { name: "PyTorch", category: "tech", group: "ai" },
  { name: "Teachable Machine", category: "tech", group: "ai" },
  
  // Design
  { name: "Adobe Photoshop", category: "design" },
  { name: "Adobe Lightroom", category: "design" },
  { name: "Adobe Premiere Pro", category: "design" },
  { name: "Canva", category: "design" },
  
  // Tools
  { name: "Microsoft Office Suite", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Discord", category: "tools" },
  { name: "Trello", category: "tools" },
  { name: "Jupyter Notebook", category: "tools" },
  { name: "Google Colab", category: "tools" },
  
  // Soft Skills
  { name: "Problem Solving", category: "soft" },
  { name: "Attention to Detail", category: "soft" },
  { name: "Team Collaboration", category: "soft" },
  { name: "Critical Thinking", category: "soft" },
  { name: "Communication", category: "soft" },
  { name: "Adaptability", category: "soft" },
  { name: "Project Management", category: "soft" }
];

export const mediaItems: MediaItem[] = [
  {
    id: "gd-1",
    title: "Shutter Brew",
    type: "photo",
    image: "/graphics/brand.png",
    category: "Graphic Design",
    description: "a photo-café brand identity that blends photography with coffee culture, centered on a logo merging a camera and a coffee cup (stylized aperture) and the tagline “Capture the Moment. Sip the Mood.”",
    featured: true
  },
  {
    id: "gd-2",
    title: "Book Cover",
    type: "photo",
    image: "/graphics/book.png",
    category: "Graphic Design",
    description: "Design that fuses music and visual arts with bold colors, dynamic silhouettes, and symbolic elements. The playful yet structured layout captures creativity, rhythm, and expression.",
    featured: false
  },
  {
    id: "gd-3",
    title: "Tarpaulin Design",
    type: "photo",
    image: "/graphics/tarp.png",
    category: "Graphic Design",
    description: "The layout combines formal academic elements with a vibrant, professional aesthetic to highlight the graduates’ achievements while maintaining clarity and visual balance.",
    featured: false
  },
    {
    id: "gd-4",
    title: "Poster Design",
    type: "photo",
    image: "/graphics/poster.png",
    category: "Graphic Design",
    description: "The design emphasizes user-friendliness and accessibility to ensure effective medication management.",
    featured: false
  }
];

export const contactInfo: ContactInfo = {
  email: "pagatpatan.christianjoseph@gmail.com",
  phone: "+63 (927) 713-0119",
  location: "Sulvec, Narvacan, Ilocos Sur, Philippines",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/iamsylo",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/christian-joseph-pagatpatan-971308381",
      icon: "linkedin"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/sylo.jpg/",
      icon: "instagram"
    }
  ]
};