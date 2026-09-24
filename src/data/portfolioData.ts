import { Project, SkillCategory, EducationItem, CertificationItem, AchievementItem } from '../types';

export const personalInfo = {
  name: 'Fatma Atta',
  fullName: 'Fatma Mahmoud Atta',
  role: 'Software Developer',
  headline: 'Software Developer | AI & ML | Web & Mobile Development',
  supportingPositioning: 'Computer Science graduate passionate about building intelligent, scalable, and user-focused software.',
  location: 'Cairo, Egypt',
  email: 'fatmamaali@gmail.com',
  phone: '+20 1015427749',
  educationSummary: 'Bachelor of Computer Science – Faculty of Computers and Artificial Intelligence, Cairo University (GPA: 3.67)',
  gpa: '3.67',
  githubUrl: 'https://github.com/FatmaAtta',
  linkedinUrl: 'https://www.linkedin.com/in/fatmaatta/',
  resumeUrl: './Fatma_Atta_Resume.pdf',
  photoUrl: './fatma-atta.jpg',
  aboutBio: `I am a Computer Science graduate from Cairo University (Faculty of Computers and Artificial Intelligence) with practical software engineering experience across AI/ML, full-stack web, and mobile app development.

My work spans from engineering end-to-end intelligent systems—such as building an AI-powered pipeline to transcribe, diarize, and analyze sentiment in Egyptian Arabic customer-service calls—to developing cross-platform mobile apps with Kotlin, Jetpack Compose, and Flutter, and scalable web solutions using React and Django.

With an academic foundation (3.67 GPA) and rigorous competitive problem-solving experience through the Egyptian Collegiate Programming Contest (ECPC), I focus on writing clean, modular code, designing efficient architectures, and solving real-world engineering challenges.`
};

export const flagshipProject: Project = {
  id: 'call-center-ai',
  title: 'AI-Powered Customer Service Call Analysis',
  subtitle: 'Flagship Project — Egyptian Arabic Speech Transcription, Speaker Diarization & Sentiment Intelligence',
  description: 'An AI-powered system for analyzing Egyptian Arabic customer-service calls.',
  category: 'Flagship',
  badge: 'Flagship Graduation Project',
  technologies: [
    'Python',
    'Django',
    'FastAPI',
    'Whisper',
    'Faster-Whisper',
    'Speaker Diarization',
    'AraBERT',
    'Speech-to-Text',
    'Sentiment Analysis',
    'JSON data processing'
  ],
  keyFeatures: [
    'Led backend and frontend development across the entire project lifecycle.',
    'Built the core backend service using Django for request handling, data persistence, and application logic.',
    'Integrated a sequential AI/ML pipeline for speech transcription, speaker diarization, and sentiment analysis.',
    'Developed the user frontend interface and seamlessly integrated it with the Django backend and FastAPI-hosted AI pipeline.',
    'Evaluated Whisper and Faster-Whisper for Egyptian Arabic call transcription accuracy and inference performance.',
    'Integrated speaker diarization to accurately separate customer and customer-service representative speaking turns.',
    'Implemented AraBERT-based sentiment analysis to evaluate customer sentiment and dialogue sentiment polarity.',
    'Created a custom data-processing script that transformed unstructured audio datasets into structured JSON.',
    'Generated an Egyptian Arabic evaluation dataset to benchmark speech transcription performance and evaluate model accuracy.'
  ],
  highlightDetails: [
    'Flagship graduation project focused on dialectal Arabic NLP and Speech AI.',
    'Decoupled architecture: Django application layer connected with FastAPI inference engine.',
    'Zero hallucination speech-to-sentiment sequential pipeline.'
  ]
};

export const flagshipCaseStudyDetails = {
  problem: {
    title: 'The Problem',
    content: 'Customer service centers across Egypt and the MENA region handle extensive volumes of inbound phone calls. Evaluating customer experience, compliance, and resolution quality manually is extremely time-consuming and subjective. Furthermore, off-the-shelf Speech-to-Text models typically struggle with colloquial Egyptian Arabic (Masri) due to dialectal phonetics, colloquial idioms, and background call-center noise.'
  },
  solution: {
    title: 'The Solution',
    content: 'An automated, end-to-end intelligence platform tailored specifically for Egyptian Arabic audio. The system transcribes spoken phone dialogues, performs speaker diarization to separate representative and customer speech turns, analyzes sentiment per utterance using Arabic-specific transformer models, and unifies all outputs into structured JSON for search, auditing, and analytics.'
  },
  architecture: {
    title: 'System Architecture',
    content: 'Designed with a decoupled microservice pattern: a robust Django backend handles user workflows, authentication, and structured data persistence, communicating via high-speed REST APIs with a dedicated FastAPI AI service that hosts and schedules the sequential deep learning pipeline.'
  },
  pipelineSteps: [
    {
      step: '01',
      name: 'Audio Ingestion & Preprocessing',
      tech: 'Python / Librosa / SoundFile',
      description: 'Accepts raw customer service call audio files, standardizes sample rates, formats channels, and prepares audio chunks for model consumption.'
    },
    {
      step: '02',
      name: 'Egyptian Arabic Speech-to-Text',
      tech: 'Whisper & Faster-Whisper',
      description: 'Transcribes Egyptian Arabic spoken dialect into Arabic text. Evaluated both Whisper and Faster-Whisper models for dialectal accuracy and execution speed.'
    },
    {
      step: '03',
      name: 'Speaker Diarization',
      tech: 'Diarization Pipeline',
      description: 'Segments and attributes audio intervals to specific speakers (Customer vs. Agent) with precise time boundaries to reconstruct conversation flow.'
    },
    {
      step: '04',
      name: 'Arabic Sentiment Analysis',
      tech: 'AraBERT Transformer',
      description: 'Applies an AraBERT-based model specialized for Arabic linguistic nuances to evaluate sentiment polarity (positive, neutral, negative) across utterances.'
    },
    {
      step: '05',
      name: 'Data Structuring & JSON Pipeline',
      tech: 'Custom Python Pipeline',
      description: 'Transforms unstructured speech predictions into standardized, structured JSON schemas containing timestamps, speaker labels, transcripts, and sentiment scores.'
    },
    {
      step: '06',
      name: 'Frontend Interface & Integration',
      tech: 'Django + Web Interface',
      description: 'Interactive dashboard for call center supervisors to upload audio, inspect speaker turns chronologically, search transcripts, and review sentiment analytics.'
    }
  ],
  evaluation: {
    title: 'Benchmarking & Evaluation',
    content: 'Created and curated an Egyptian Arabic evaluation dataset to benchmark speech transcription performance. Rigorously evaluated model performance between standard Whisper and Faster-Whisper under Egyptian dialect conditions, identifying key tradeoffs between transcription fidelity, memory footprint, and processing speed.'
  },
  learned: {
    title: 'What I Learned',
    points: [
      'Engineering sequential deep learning pipelines that chain speech-to-text, diarization, and transformer NLP.',
      'Handling dialectal NLP nuances and speech variability in Egyptian Arabic.',
      'Architectural patterns for decoupling compute-heavy AI inference (FastAPI) from application logic (Django).',
      'Curating and structuring specialized dialect datasets for empirical benchmarking.',
      'Transforming unstructured model predictions into production-ready structured JSON formats.'
    ]
  }
};

export const projects: Project[] = [
  {
    id: 'studyflash',
    title: 'StudyFlash — Flashcards App',
    subtitle: 'Mobile Learning & Spaced Repetition App',
    description: 'An interactive mobile learning application designed to improve study efficiency through structured flashcards and gamified revision.',
    category: 'Mobile',
    badge: 'Ranked Top 15 – DEPI Program',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Figma'],
    keyFeatures: [
      'Flashcards organized and grouped into structured categories',
      'Timed quiz mode for knowledge retention and exam practice',
      'Gamified hint system using earned points to boost engagement',
      'Real-time study progress tracking and historical statistics',
      'Interactive and intuitive learning interface designed in Figma'
    ],
    highlightDetails: [
      'Ranked among the top 15 projects in Mobile App Development in the DEPI (Digital Egypt Pioneers Initiative) program.'
    ]
  },
  {
    id: 'isupply-hackathon',
    title: "I'Supply Internship Hackathon",
    subtitle: 'Real-Time Delivery Notification System',
    description: 'A cloud-connected delivery notification module developed during the I\'Supply internship hackathon to streamline logistics transparency.',
    category: 'Mobile',
    badge: 'Hackathon Project',
    technologies: ['Firebase Cloud Firestore', 'Mobile Development'],
    keyFeatures: [
      'Real-time delivery status tracking powered by Firebase Cloud Firestore',
      'Automated notification pipeline triggered immediately when sellers update shipment statuses',
      'Direct buyer alerting for shipment milestone updates'
    ]
  },
  {
    id: 'online-library',
    title: 'Online Library Website',
    subtitle: 'Full-Stack Book Management & Borrowing System',
    description: 'A comprehensive web application for managing library inventory, book reservations, and student accounts.',
    category: 'Web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Django', 'Database'],
    githubUrl: 'https://github.com/FatmaAtta/WebAssignment',
    keyFeatures: [
      'Role-based authentication separating administrator and student privileges',
      'Complete CRUD operations for managing library catalogs and inventory',
      'Book borrowing, reservation tracking, and availability status updates',
      'Dynamic category filtering and search functionality',
      'Responsive interface integrated with Django backend and database'
    ]
  },
  {
    id: 'quiz-app',
    title: 'Quiz App',
    subtitle: 'Cross-Platform Mobile Quiz Application',
    description: 'An interactive cross-platform mobile quiz application built with Flutter featuring dynamic content loading and state management.',
    category: 'Mobile',
    technologies: ['Flutter', 'Dart', 'JSON'],
    githubUrl: 'https://github.com/FatmaAtta/iti_tasks',
    keyFeatures: [
      'Flexible JSON-based question and answer dataset loading',
      'Interactive stateful widgets for real-time score tracking',
      'Smooth screen transitions and multi-page routing',
      'Clean, engaging mobile user experience'
    ]
  },
  {
    id: 'university-library-system',
    title: 'University Library Management System',
    subtitle: 'Desktop Resource & Circulation Management',
    description: 'A robust desktop management application for university libraries built with C# Windows Forms and relational databases.',
    category: 'Systems & C++',
    technologies: ['C#', 'Windows Forms', 'Database', 'Entity Relationship Modeling'],
    githubUrl: 'https://github.com/FatmaAtta/University-LIbrary-System',
    keyFeatures: [
      'Designed and implemented relational database schema using Entity Relationship Modeling',
      'Full CRUD operations for managing books, library resources, and student records',
      'User-friendly graphical user interface (GUI) developed with Windows Forms',
      'Optimized data access queries for inventory and user transactions'
    ]
  },
  {
    id: 'personal-portfolio-react',
    title: 'Personal Portfolio Website (React)',
    subtitle: 'Component-Driven Interactive Portfolio',
    description: 'A responsive React.js developer portfolio engineered to showcase academic, web, and mobile projects.',
    category: 'Web',
    technologies: ['React.js', 'Swiper.js', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/FatmaAtta/my-portfolio',
    keyFeatures: [
      'Engineered dynamic interactive carousels utilizing Swiper.js',
      'Responsive component-based architecture for diverse screen viewports',
      'Curated showcase of technical skills, coursework, and software repositories'
    ]
  },
  {
    id: 'image-processing',
    title: 'Image Processing Application',
    subtitle: 'Bitmap Manipulation & 2D Matrix Algorithms',
    description: 'A C++ image manipulation tool implementing direct matrix operations on bitmap image structures.',
    category: 'Systems & C++',
    technologies: ['C++', 'Bitmap Processing', '2D Arrays', 'Algorithms'],
    githubUrl: 'https://github.com/FatmaAtta/Image_Processing',
    keyFeatures: [
      'Parsed bitmap image files into memory as 2D numerical arrays',
      'Algorithmic filter implementations: skew, rotate, blur, scale, and crop',
      'Support for both black-and-white (grayscale) and colored RGB image processing'
    ]
  },
  {
    id: 'board-games',
    title: 'Classic Board Games (Connect Four & 5x5 Tic-Tac-Toe)',
    subtitle: 'Object-Oriented Game Engines & Logic Systems',
    description: 'C++ implementations of classic strategic board games emphasizing modular Object-Oriented Programming (OOP) principles.',
    category: 'Systems & C++',
    technologies: ['C++', 'Object-Oriented Programming', 'Game Logic', 'Data Structures'],
    githubUrl: 'https://github.com/FatmaAtta/CS213_Assignment3',
    keyFeatures: [
      'Designed game logic for Connect Four and Five-by-Five Tic-Tac-Toe',
      'Applied OOP principles (inheritance, encapsulation, polymorphism) for extensible design',
      'Implemented win/lose condition detection algorithms and interactive turn management'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    iconName: 'Brain',
    skills: [
      { name: 'Whisper', highlight: true, description: 'Speech-to-Text transcription model' },
      { name: 'Faster-Whisper', highlight: true, description: 'Optimized CTranslate2 ASR inference' },
      { name: 'Speaker Diarization', highlight: true, description: 'Speaker segmentation & clustering' },
      { name: 'AraBERT', highlight: true, description: 'Arabic language transformer for sentiment' },
      { name: 'Speech-to-Text', highlight: true, description: 'Egyptian Arabic dialect transcription' },
      { name: 'Sentiment Analysis', highlight: true, description: 'Per-utterance dialogue polarity' },
      { name: 'FastAPI', highlight: true, description: 'High-performance AI model serving' },
      { name: 'Python', highlight: true, description: 'Primary language for ML & data processing' }
    ]
  },
  {
    title: 'Web Development',
    iconName: 'Globe',
    skills: [
      { name: 'React.js', highlight: true, description: 'Component architecture & modern SPAs' },
      { name: 'Django', highlight: true, description: 'Python backend framework & ORM' },
      { name: 'Django REST Framework', highlight: true, description: 'RESTful API engineering' },
      { name: 'JavaScript', description: 'ES6+, DOM, async programming' },
      { name: 'HTML5', description: 'Semantic markup & accessibility' },
      { name: 'CSS', description: 'Responsive layouts, Flexbox & Grid' }
    ]
  },
  {
    title: 'Mobile Development',
    iconName: 'Smartphone',
    skills: [
      { name: 'Kotlin', highlight: true, description: 'Native modern Android development' },
      { name: 'Jetpack Compose', highlight: true, description: 'Declarative Android UI toolkit' },
      { name: 'Flutter', highlight: true, description: 'Cross-platform mobile applications' },
      { name: 'Dart', description: 'Language for Flutter development' },
      { name: 'Android Studio', description: 'SDK tooling, XML, and debugging' }
    ]
  },
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Python', highlight: true, description: 'AI/ML, backend scripting, FastAPI' },
      { name: 'C++', highlight: true, description: 'Algorithms, data structures, image processing' },
      { name: 'Java', description: 'OOP concepts & mobile foundations' },
      { name: 'C#', description: 'Windows Forms & desktop software' },
      { name: 'C', description: 'Low-level programming & memory concepts' }
    ]
  },
  {
    title: 'Databases & Cloud',
    iconName: 'Database',
    skills: [
      { name: 'MS SQL Server', description: 'Relational design, queries & schema' },
      { name: 'PostgreSQL', description: 'Relational database for web backends' },
      { name: 'Firebase', highlight: true, description: 'Cloud Firestore & mobile authentication' }
    ]
  },
  {
    title: 'Design & Tools',
    iconName: 'Palette',
    skills: [
      { name: 'GitHub', highlight: true, description: 'Version control & collaboration' },
      { name: 'Figma', highlight: true, description: 'UI/UX wireframing & prototyping' },
      { name: 'Adobe XD', description: 'Interface design' },
      { name: 'Adobe Illustrator', description: 'Vector graphics & visual assets' }
    ]
  }
];

export const educationAndTraining: EducationItem[] = [
  {
    institution: 'Cairo University',
    degree: 'Bachelor of Computer Science',
    period: 'Oct 2022 – Jul 2026',
    gpa: 'GPA: 3.67',
    details: [
      'Faculty of Computers and Artificial Intelligence – Cairo University',
      'Strong academic foundation in Algorithms, Data Structures, Software Engineering, Database Systems, Web Technology, and Artificial Intelligence.',
      'Flagship graduation project focused on AI-Powered Customer Service Call Analysis in Egyptian Arabic.'
    ],
    tags: ['Cairo University', 'GPA: 3.67', 'Computer Science', 'AI & ML']
  },
  {
    institution: 'DEPI (Digital Egypt Pioneers Initiative)',
    degree: 'Mobile App Development Track',
    period: 'Jun 2024 – Dec 2024',
    details: [
      'Intensive training program focused on native and cross-platform mobile development.',
      'Hands-on experience in Kotlin, Android Studio, XML UI design, and Jetpack Compose.',
      'Cross-platform development with Flutter and Dart.',
      'Ranked among the Top 15 projects in Mobile App Development for StudyFlash.'
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Flutter', 'Top 15 Ranking']
  },
  {
    institution: 'ITI (Information Technology Institute)',
    degree: 'Mobile App Development Using Flutter',
    period: 'Jul 2023 – Aug 2023',
    details: [
      'Developed proficiency in Flutter and Dart, mastering OOP and OOD principles.',
      'Utilized Firebase for backend development and API integration.',
      'Built interactive mobile user interfaces using stateless and stateful widgets.',
      'Strengthened web fundamentals in HTML, CSS, and JavaScript.'
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'OOP/OOD', 'API Integration']
  },
  {
    institution: 'Additional Learning & Continuous Training',
    degree: 'Specialized Professional Development',
    period: 'Continuous',
    details: [
      'IBM AI Engineering Professional Certificate — Coursera',
      'Problem Solving Training — Coach Academy',
      'UI/UX Workshop — GDSC (Google Developer Student Clubs)'
    ],
    tags: ['IBM AI', 'Coach Academy', 'GDSC UI/UX', 'Problem Solving']
  }
];

export const certifications: CertificationItem[] = [
  {
    title: 'Egypt FWD – Web Development Challenger Track',
    issuer: 'Information Technology Industry Development Agency (ITIDA) / Udacity',
    skillsAcquired: [
      'Comprehensive web development foundations',
      'Responsive web design techniques',
      'HTML structure and modern web concepts'
    ]
  },
  {
    title: 'Egypt FWD – Data Analysis Challenger Track',
    issuer: 'Information Technology Industry Development Agency (ITIDA) / Udacity',
    skillsAcquired: [
      'Fundamental statistics and probability theory',
      'Statistical methods and data analysis in Excel',
      'Interpreting datasets to inform structured decision-making'
    ]
  },
  {
    title: 'Programming for Everybody (Getting Started With Python)',
    issuer: 'University of Michigan / Coursera',
    skillsAcquired: [
      'Core Python syntax and algorithmic thinking',
      'Data structures and control flow',
      'Foundations for backend and data processing'
    ]
  }
];

export const achievements: AchievementItem[] = [
  {
    title: 'Egyptian Collegiate Programming Contest (ECPC)',
    organization: 'Egyptian Collegiate Programming Contest Qualifications',
    date: 'Aug 2023 & Jul 2024',
    description: 'Participated in two consecutive years of the competitive collegiate programming contest. Collaborated under strict time constraints to solve complex algorithmic and mathematical problems, demonstrating strong problem-solving, data structure mastery, and teamwork dynamics.',
    tag: 'Competitive Programming'
  },
  {
    title: 'StudyFlash Ranked in Top 15 Mobile App Projects',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: 'Oct 2024',
    description: 'Recognized for developing StudyFlash—a Kotlin and Jetpack Compose mobile flashcard application—achieving top 15 placement among cohorts in the Mobile App Development track.',
    tag: 'Top 15 Recognition'
  }
];
