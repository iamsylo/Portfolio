import type { Experience, Project, Certificate, Skill, MediaItem, ContactInfo } from '../types';

export const personalInfo = {
  name: "Christian Joseph Pagatpatan",
  title: "Creative Developer",
  subtitle: "Data Entry Specialist | Document Management | Front-End Developer | Android App Developer | Database Management | Photographer",
  bio: "Computer science graduate specializing in front-end development and Android app development with foundational backend skills in database management. I excel at creating user-friendly web and mobile interfaces and have experience in document management, data entry, and visual content creation through photography and videography.",
  location: "Sulvec, Narvacan, Ilocos Sur, Philippines",
  email: "pagatpatan.christianjoseph@gmail.com",
  phone: "+63 (927) 713-0119",
  avatar: "/Pagatpatan_10.webp"
};

export const experiences: Experience[] = [
  {
    id: "exp-2", 
    title: "Administrative Support",
    company: "Ben-Lee Tailoring and Sportswear",
    location: "Santa Maria, Ilocos Sur",
    duration: "Nov 2025 - May 2026",
    startDate: "2025-11",
    endDate: "2026-05",
    description: "Supported day-to-day operations by maintaining inventory records, digitizing order details, and assisting with basic IT needs across office and production equipment.",
    skills: ["Inventory Management", "Data Entry", "Record Keeping", "Hardware Troubleshooting", "IT Support", "Office Administration"],
    achievements: [
      "Maintained inventory records across the production floor to help prevent stock shortages that could interrupt order fulfillment",
      "Digitized player name and size records for 100+ customer orders, replacing manual logbooks and reducing order-entry errors",
      "Provided basic IT support for office computers, including hardware troubleshooting, component repairs, and storage upgrades"
    ]
  },
    {
    id: "exp-1",
    title: "UI/UX Designer & Developer",
    company: "TricyFair",
    location: "Remote",
    duration: "Feb 2026 - Mar 2026",
    startDate: "2026-02",
    endDate: "2026-03",
    description: "Designed and built a responsive Flutter interface for fare estimation and route navigation, with a focus on simplifying the booking flow for riders and drivers.",
    skills: ["Flutter", "UI/UX Design", "Mobile Development", "Wireframing", "Route Navigation", "Fare Estimation"],
    achievements: [
      "Designed and built a responsive Flutter interface for real-time fare estimation and route navigation",
      "Mapped and streamlined the driver-to-passenger flow from three legacy touchpoints into a single-screen booking interaction",
      "Researched an OpenStreetMap-based routing integration projected to reduce map API costs by 40-60% versus a Google Maps-based approach"
    ]
  },
  {
    id: "exp-3",
    title: "Data Entry Specialist",
    company: "Private Client",
    location: "Remote",
    duration: "Jul 2025 - Aug 2025",
    startDate: "2025-07",
    endDate: "2025-08",
    description: "Entered, validated, and cleaned administrative datasets while maintaining accuracy across high-volume record batches.",
    skills: ["Data Entry", "Data Validation", "Database Cleaning", "Record Management", "Quality Control", "Documentation"],
    achievements: [
      "Entered, validated, and updated administrative datasets while maintaining accuracy across high-volume record batches",
      "Cleaned database records by identifying and correcting syntax inconsistencies and removing duplicate entries",
      "Reviewed records prior to submission to ensure compliance with client formatting and quality guidelines"
    ]
  },
  {
    id: "exp-4",
    title: "Mobile App Developer",
    company: "PILIpinas",
    location: "Remote",
    duration: "Dec 2024 - Jan 2025",
    startDate: "2024-12",
    endDate: "2025-01",
    description: "Conceived and independently developed PILIpinas, an Android educational game in Flutter built to raise awareness of West Philippine Sea territorial issues.",
    skills: ["Flutter", "Dart", "Android Development", "UI/UX Design", "Game Development", "Mobile Optimization"],
    achievements: [
      "Conceived, designed, and independently developed PILIpinas as an Android educational game built in Flutter",
      "Built interactive quizzes and informational modules optimized for mobile UI responsiveness and runtime performance",
      "Owned the full project lifecycle solo, from concept and asset integration through debugging and final testing"
    ]
  },
  {
    id: "exp-5",
    title: "IT Intern (OJT)",
    company: "University Information Office, University of Northern Philippines",
    location: "Vigan City, Ilocos Sur",
    duration: "Jul 2024 - Aug 2024",
    startDate: "2024-07",
    endDate: "2024-08",
    description: "Handled office documentation, built a responsive website prototype, and supported staff with application debugging and network checks.",
    skills: ["Web Development", "Document Processing", "Troubleshooting", "Network Testing", "HTML", "CSS", "JavaScript"],
    achievements: [
      "Transcribed and processed office documents to improve records management speed and entry accuracy",
      "Programmed a responsive website prototype to modernize the office's digital presence",
      "Supported staff with debugging local applications, running network tests, and preparing digital content for online publication"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "OTICURE",
    description: "Thesis Final Output",
    longDescription: "An AI-powered mobile health application that tackles medication non-adherence using advanced machine learning algorithms. The app provides personalized medication recommendations, intelligent reminders, and real-time drug identification to improve patient outcomes and reduce healthcare costs.",
    image: "/optimized/oticure.webp",
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
    image: "/optimized/portfolio.webp",
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
    image: "/optimized/dts.webp",
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
    image: "/optimized/pilipinas.webp",
    technologies: ["Flutter", "Dart", "Firebase", "Android Development", "UI/UX Design"],
    githubUrl: "https://github.com/iamsylo/pilipinas",
    category: "mobile",
    featured: true
  },
    {
    id: "proj-5",
    title: "Persona 3 Reload",
    description: "Persona-themed interactive site with animated social link cards, character showcase, and sound-driven UI",
    longDescription: "A stylized fan site inspired by Persona 3 Reload, featuring a flippable social link deck with card-back reveals, a focus-mode character roster with hover/select sound effects, and a cinematic hero section. Built with a strong dark UI aesthetic, layered CSS animations, and responsive layouts across desktop, tablet, and mobile.",
    image: "/optimized/persona.png",
    technologies: ["React", "TypeScript", "CSS", "Vite"],
    githubUrl: "https://github.com/iamsylo/persona",
    liveUrl: "https://personareload.netlify.app/",
    category: "web",
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
  },
  {
    id: "cert-4",
    title: "Microsoft Digital Literacy",
    issuer: "TESDA",
    issueDate: "2026-07",
    skills: ["Digital Literacy", "Computer Fundamentals", "Productivity Tools"]
  },
  {
    id: "cert-5",
    title: "Installing and Configuring Computer Systems",
    issuer: "TESDA",
    issueDate: "2026-07",
    skills: ["Computer Systems", "Hardware Installation", "System Configuration"]
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
    image: "/optimized/brand.webp",
    category: "Graphic Design",
    description: "a photo-café brand identity that blends photography with coffee culture, centered on a logo merging a camera and a coffee cup (stylized aperture) and the tagline “Capture the Moment. Sip the Mood.”",
    featured: true
  },
  {
    id: "gd-2",
    title: "Book Cover",
    type: "photo",
    image: "/optimized/book.webp",
    category: "Graphic Design",
    description: "Design that fuses music and visual arts with bold colors, dynamic silhouettes, and symbolic elements. The playful yet structured layout captures creativity, rhythm, and expression.",
    featured: false
  },
  {
    id: "gd-3",
    title: "Tarpaulin Design",
    type: "photo",
    image: "/optimized/tarp.webp",
    category: "Graphic Design",
    description: "The layout combines formal academic elements with a vibrant, professional aesthetic to highlight the graduates’ achievements while maintaining clarity and visual balance.",
    featured: false
  },
    {
    id: "gd-4",
    title: "Poster Design",
    type: "photo",
    image: "/optimized/poster.webp",
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
      platform: "Facebook",
      url: "https://www.facebook.com/iamsidyey/",
      icon: "facebook"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/sylo.jpg/",
      icon: "instagram"
    }
  ]
};