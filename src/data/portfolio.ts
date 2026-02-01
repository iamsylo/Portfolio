import type { Experience, Project, Certificate, Skill, MediaItem, ContactInfo } from '../types';

export const personalInfo = {
  name: "Christian Joseph R. Pagatpatan",
  title: "Computer Science Graduate",
  subtitle: "Front-End Developer | Database Management | Document & Data Management | Photographer",
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
    githubUrl: "https://github.com/yourusername/oticure",
    liveUrl: "https://your-oticure-demo.com",
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
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
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
    githubUrl: "https://github.com/yourusername/unp-alpha",
    liveUrl: "https://your-unp-alpha.com",
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
    githubUrl: "https://github.com/yourusername/pilipinas",
    category: "mobile",
    featured: true
  }
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "React Developer Certification",
    issuer: "Meta",
    issueDate: "2023-12",
    credentialId: "ABC123456",
    credentialUrl: "https://coursera.org/verify/ABC123456",
    skills: ["React", "JavaScript", "Frontend Development"]
  },
  {
    id: "cert-2",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "2023-10",
    credentialId: "XYZ789012",
    credentialUrl: "https://aws.amazon.com/verification/XYZ789012",
    skills: ["AWS", "Cloud Computing", "DevOps"]
  },
  {
    id: "cert-3",
    title: "Adobe Certified Expert - Photoshop",
    issuer: "Adobe",
    issueDate: "2023-08",
    credentialId: "DEF345678",
    skills: ["Photoshop", "Photo Editing", "Graphic Design"]
  }
];

export const skills: Skill[] = [
  // Programming
  { name: "JavaScript", level: 5, category: "programming" },
  { name: "TypeScript", level: 4, category: "programming" },
  { name: "HTML & CSS", level: 5, category: "programming" },
  { name: "Tailwind CSS", level: 4, category: "programming" },
  { name: "React", level: 5, category: "programming" },
  { name: "Dart/Flutter", level: 3, category: "programming" },
  { name: "SQL", level: 3, category: "programming" },
  
  // Design
  { name: "Adobe Photoshop", level: 5, category: "design" },
  { name: "Adobe Lightroom", level: 4, category: "design" },
  { name: "Adobe Premiere Pro", level: 4, category: "design" },
  { name: "Canva", level: 4, category: "design" },
  
  // Tools
  { name: "Git/GitHub", level: 2, category: "tools" },
  { name: "Microsoft Office Suite", level: 4, category: "tools" },
  
  // Soft Skills
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Team Collaboration", level: 5, category: "soft" },
  { name: "Communication", level: 4, category: "soft" },
  { name: "Project Management", level: 4, category: "soft" }
];

export const mediaItems: MediaItem[] = [
  {
    id: "media-1",
    title: "Seablume",
    type: "photo",
    image: "/images/portraits/SEABLUME-1.jpg",
    category: "Image",
    description: "A stunning collection of event photography capturing the beauty and essence of the Seablume event. Each image showcases different moments and perspectives from this memorable occasion.",
    featured: true,
    albumId: "seablume"
  },
  {
    id: "media-1b",
    title: "Seablume",
    type: "photo",
    image: "/portraits/SEABLUME-4.jpg",
    category: "Image",
    description: "A stunning collection of event photography capturing the beauty and essence of the Seablume event. Each image showcases different moments and perspectives from this memorable occasion.",
    featured: false,
    albumId: "seablume"
  },
  {
    id: "media-1c",
    title: "Seablume",
    type: "photo",
    image: "/images/portraits/SEABLUME-3.jpg",
    category: "Image",
    description: "A stunning collection of event photography capturing the beauty and essence of the Seablume event. Each image showcases different moments and perspectives from this memorable occasion.",
    featured: false,
    albumId: "seablume"
  },
  {
    id: "media-2",
    title: "Portrait Session",
    type: "photo",
    image: "/images/portraits/NBS-4.jpg",
    category: "Image",
    description: "Professional portrait photography session",
    featured: true
  },
  {
    id: "media-3",
    title: "Wedding Highlights",
    type: "video",
    image: "/placeholder-video-1.mp4",
    thumbnail: "/placeholder-video-thumb-1.jpg",
    category: "Video",
    description: "Wedding highlight reel showcasing the special day",
    featured: true
  },
  {
    id: "media-4",
    title: "Corporate Video",
    type: "video",
    image: "/placeholder-video-2.mp4",
    thumbnail: "/placeholder-video-thumb-2.jpg",
    category: "Video",
    description: "Corporate promotional video with motion graphics",
    featured: false
  },
  {
    id: "media-5",
    title: "Nature Portrait",
    type: "photo",
    image: "/placeholder-photo-3.jpg",
    category: "Image",
    description: "Outdoor portrait session in natural lighting",
    featured: false
  },
  {
    id: "media-6",
    title: "Mountain Vista",
    type: "photo",
    image: "/placeholder-photo-4.jpg",
    category: "Image",
    description: "Breathtaking mountain landscape during sunrise",
    featured: false
  },
  {
    id: "media-7",
    title: "Event Coverage",
    type: "video",
    image: "/placeholder-video-3.mp4",
    thumbnail: "/placeholder-video-thumb-3.jpg",
    category: "Video",
    description: "Professional event documentation and highlights",
    featured: false
  },
  {
    id: "media-8",
    title: "Brand Identity Design",
    type: "photo",
    image: "/graphics/brand-design-1.jpg",
    category: "Graphic Design",
    description: "Complete brand identity package including logo, business cards, and brand guidelines",
    featured: true
  },
  {
    id: "media-9",
    title: "Event Poster Design",
    type: "photo",
    image: "/graphics/poster-design-1.jpg",
    category: "Graphic Design",
    description: "Creative poster designs for various events and promotions",
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
      url: "https://github.com/yourusername",
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
    },
    {
      platform: "X",
      url: "https://x.com/iam_sidyey",
      icon: "twitter"
    }
  ]
};