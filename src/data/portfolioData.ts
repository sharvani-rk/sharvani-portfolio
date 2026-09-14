import type { 
  Project, 
  SkillGroup, 
  Internship, 
  Achievement, 
  Certification, 
  EducationItem 
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Rampur Sharvani",
  brandName: "Sharvani",
  fullName: "Rampur Sharvani",
  roleTitle: "AI & Machine Learning Enthusiast | Computer Science Engineering Student",
  location: "Hyderabad, India",
  email: "6sharvani6@gmail.com",
  phone: "+91 9052346555",
  githubUrl: "https://github.com/sharvani-rk",
  linkedinUrl: "https://linkedin.com/in/your-profile", // Placeholder - ready to replace
  resumePath: "/resume.pdf",
  heroHeadline: "Building intelligent things with AI & Machine Learning.",
  heroIntro: "Hi, I'm Sharvani 👋\nA Computer Science Engineering student passionate about AI, Machine Learning, Deep Learning and building practical technology.",
  educationBadge: {
    degree: "B.E. Computer Science Engineering",
    college: "MVSR Engineering College",
    cgpa: "CGPA: 9.23 / 10.00"
  },
  aboutParagraphs: [
    "I am a Computer Science Engineering student at MVSR Engineering College with a strong passion for Artificial Intelligence, Machine Learning, and practical software engineering. My focus lies in turning theoretical algorithms into usable tools that genuinely assist people.",
    "From researching state-of-the-art vision architectures on medical datasets to engineering multi-agent systems and Chrome extensions for interactive video learning, I enjoy exploring the full lifecycle of AI applications—data collection, model training, evaluation, backend orchestration, and intuitive user interfaces.",
    "I am constantly experimenting with modern ML, Deep Learning, Natural Language Processing, Computer Vision, and Generative AI, while actively looking for opportunities to collaborate, learn, and grow as an AI/ML engineer."
  ],
  stats: [
    { label: "CGPA", value: "9.23", subtext: "MVSR Eng. College", color: "lavender" as const },
    { label: "AI/ML Projects", value: "6+", subtext: "Built & Researched", color: "blue" as const },
    { label: "Internships", value: "4", subtext: "Hands-on Experience", color: "mint" as const },
    { label: "1st Prize", value: "🏆", subtext: "UniNoteAI Ideathon", color: "peach" as const },
  ]
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming",
    description: "Core languages for algorithmic problem solving, scripting, and web systems.",
    skills: ["Python", "SQL", "HTML", "CSS", "JavaScript", "PHP"],
    iconName: "Code2",
    pastelColor: "lavender"
  },
  {
    category: "AI / ML",
    description: "Theoretical and applied machine intelligence paradigms.",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "Generative AI", "Computer Vision"],
    iconName: "BrainCircuit",
    pastelColor: "blue"
  },
  {
    category: "Frameworks / Libraries",
    description: "Specialized toolkits for model engineering, data analysis, and web services.",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "OpenCV", "MediaPipe", "Flask", "Streamlit"],
    iconName: "Boxes",
    pastelColor: "mint"
  },
  {
    category: "AI / APIs / Tools",
    description: "Pretrained models, cloud AI suites, and external integration interfaces.",
    skills: ["Gemini API", "Google Maps API", "News API", "AWS AI Services"],
    iconName: "Sparkles",
    pastelColor: "peach"
  },
  {
    category: "Databases",
    description: "Relational data modeling, schema design, and query optimization.",
    skills: ["SQLite", "MySQL"],
    iconName: "Database",
    pastelColor: "yellow"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "youmentor-ai",
    title: "YouMentor AI",
    tagline: "AI-Powered Learning Assistant",
    projectType: "Chrome Extension + AI Learning Assistant",
    category: "Featured Project • Chrome Extension • Agentic AI",
    filterCategories: ["all", "ai-ml", "full-stack"],
    shortDescription: "An AI-powered Chrome extension designed to make video-based learning more interactive by helping users summarize, understand, quiz themselves, learn vocabulary, create flashcards, and save notes directly alongside YouTube videos.",
    technologies: [
      "Python",
      "Flask",
      "FastAPI",
      "LangGraph",
      "Groq API",
      "YouTube Transcript API",
      "Chrome Extension (Manifest V3)",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SQLite"
    ],
    keyFeatures: [
      "AI Summary: Generates structured video summaries including Overview, Key Points, and Final Takeaways.",
      "Explain: Breaks down complex terms with simple meanings, in-video context, and concrete examples.",
      "Interactive Quizzes: Tests retention with questions, difficulty ratings, and instant reveal mechanisms.",
      "Vocabulary Assistant: Automatically extracts difficult terms, contextual usage, and definitions.",
      "Study Flashcards: Active recall cards with progress tracking (e.g. Card 1/8) and shuffle controls.",
      "My Notes & Study Page: Seamless 'Add to Notes' action with a dedicated browser study workspace (notes.html)."
    ],
    isSpotlight: true,
    githubUrl: "https://github.com/sharvani-rk/youmentor-ai",
    screenshots: [
      {
        src: "/images/youmentor/youmentor-explain-takeaway.png",
        caption: "In-Video AI Contextual Explanations & Final Takeaways with instant 'Add to Notes' workflow",
        alt: "YouMentor AI in-video explanation showing Glacial lake outburst flood definition and Final Takeaway card",
        tag: "In-Video Explain"
      },
      {
        src: "/images/youmentor/youmentor-flashcards.png",
        caption: "Interactive AI-Generated Study Flashcards with card progress, difficulty tag, and shuffle controls",
        alt: "YouMentor AI Study Flashcards showing Card 1/8 question and reveal answer button",
        tag: "Flashcards"
      },
      {
        src: "/images/youmentor/youmentor-notes-study.png",
        caption: "Dedicated Notes & Study Page (notes.html) displaying structured video summaries and study actions",
        alt: "YouMentor AI dedicated notes.html study page showing CNN video summary and key points",
        tag: "Study Workspace"
      },
      {
        src: "/images/youmentor/youmentor-architecture-code.png",
        caption: "Backend Architecture & Chrome Extension Manifest V3 in VS Code workspace",
        alt: "VS Code showing YouMentor-AI folder structure, routes, agents, and python main.py",
        tag: "Engineering & Code"
      }
    ],
    caseStudy: {
      tagline: "AI-Powered Learning Assistant for YouTube",
      problem: "Learning from long online videos often involves repeatedly pausing, manually typing notes, switching tabs to look up unfamiliar terms, and struggling to test comprehension afterward. This creates high cognitive friction and passive viewing rather than active retention.",
      solution: "YouMentor AI integrates directly into the YouTube interface as a Chrome Extension, providing a complete in-context learning suite. Users can summarize transcripts, query AI for explanations, review extracted vocabulary, generate active-recall flashcards, and persist everything into a personal study notebook without leaving the video.",
      whatIBuilt: "Engineered both the frontend Chrome Extension (Manifest V3 popup, side panel, and dedicated study page) and the Python backend using Flask/FastAPI with LangGraph micro-agents and YouTube Transcript API for real-time extraction and Groq-accelerated inference.",
      howItWorks: [
        "01 — Open a learning video: Navigate to any educational video on YouTube.",
        "02 — Activate YouMentor AI: Launch the browser extension to automatically extract transcript and video context.",
        "03 — Generate learning material: Choose between Summary, Explain, Flashcards, Quiz, or Vocabulary.",
        "04 — Study, test and save notes: Review generated artifacts, test knowledge with flashcards, and save key items to your personal study page."
      ],
      keyFeatures: [
        "AI Video Summary: Overview, Key Points, and Final Takeaway extracted directly from transcript context.",
        "Contextual Concept Explanations: Term breakdown with Simple Meaning, 'In This Video' context, and practical examples.",
        "Interactive Study Flashcards: Easy/Medium/Hard cards with progress tracker, reveal answer toggle, and card shuffling.",
        "Automated Vocabulary Extractor: Identifies domain-specific jargon and provides concise definitions.",
        "Interactive Quiz Engine: Formulates targeted comprehension questions based on video timestamps.",
        "Dedicated Notes Page (notes.html): Localized study dashboard to review past video summaries and saved learning items."
      ],
      myContribution: "Designed and implemented the Chrome Extension UI, created the transcript extraction and preprocessing pipeline, configured the multi-agent backend architecture, and developed the interactive flashcard and notes storage systems.",
      architectureSummary: "Frontend Chrome Extension (Manifest V3, HTML/CSS/JS) communicates with a Python backend server (Flask/FastAPI). The backend leverages YouTube Transcript API to fetch text, utilizes LangGraph and specialized agent prompts for processing, and delivers structured JSON payloads back to the extension UI for real-time rendering.",
      workflowDiagram: [
        "YouTube Video",
        "YouMentor AI",
        "Understand",
        "Summarize",
        "Learn Vocabulary",
        "Test Yourself",
        "Create Flashcards",
        "Save Notes"
      ]
    }
  },
  {
    id: "histopathology-research",
    title: "Research Paper – Comparative Analysis of Deep Learning Models for Histopathology Image Classification",
    tagline: "Comparative Deep Learning Study on Medical Histopathology Datasets",
    projectType: "Deep Learning Research",
    category: "Medical AI • Computer Vision • Research Paper",
    filterCategories: ["all", "deep-learning", "research"],
    shortDescription: "Conducted research comparing CNN, ResNet, Vision Transformer (ViT), and Swin Transformer using PyTorch on Kaggle histopathology image datasets for breast cancer classification, evaluating model performance using accuracy, precision, recall, F1-score, and ROC-AUC to identify the most effective architecture.",
    technologies: [
      "PyTorch",
      "Vision Transformer (ViT)",
      "Swin Transformer",
      "ResNet",
      "CNN",
      "Python",
      "Scikit-learn",
      "Kaggle",
      "Matplotlib"
    ],
    keyFeatures: [
      "Comparative benchmarking between Convolutional (CNN, ResNet) and Attention-based architectures (ViT, Swin).",
      "Rigorous evaluation pipeline across Accuracy, Precision, Recall, F1-Score, and ROC-AUC metrics.",
      "Preprocessing and augmentation of Kaggle histopathology image datasets for breast cancer classification.",
      "Empirical analysis of transformer attention patterns versus localized receptive fields in medical histology."
    ],
    caseStudy: {
      tagline: "Comparative Analysis of Deep Learning Models for Histopathology Image Classification",
      problem: "Automated histopathology analysis for breast cancer diagnosis requires high diagnostic precision and sensitivity. While classical CNNs excel at localized spatial features, modern Vision Transformers and Swin Transformers offer global context modeling, raising the question of which architecture performs most effectively on histology datasets.",
      solution: "Designed a systematic comparative research framework in PyTorch to train and evaluate CNN, ResNet, Vision Transformer (ViT), and Swin Transformer under identical experimental conditions on Kaggle histopathology image datasets.",
      whatIBuilt: "Built a modular PyTorch training, validation, and evaluation pipeline incorporating data augmentation, learning rate scheduling, multi-metric benchmarking (Accuracy, Precision, Recall, F1-score, ROC-AUC), and comparative performance analysis.",
      howItWorks: [
        "01 — Dataset Preparation: Loaded and normalized Kaggle histopathology patches with data augmentation to combat class imbalances.",
        "02 — Model Architectures: Implemented standard CNN baseline, ResNet residual networks, ViT patch-based self-attention, and Swin shifted-window hierarchical attention.",
        "03 — Training & Tuning: Conducted controlled training cycles with cross-entropy loss and AdamW optimization in PyTorch.",
        "04 — Comprehensive Evaluation: Computed confusion matrices, ROC-AUC curves, and statistical metrics to determine architectural strengths."
      ],
      keyFeatures: [
        "End-to-end PyTorch deep learning pipeline for medical image classification.",
        "In-depth comparison of inductive bias in CNNs vs self-attention in Vision Transformers.",
        "Standardized evaluation using medical diagnostic criteria (Recall/Sensitivity, ROC-AUC, F1-Score).",
        "Reproducible experimental scripts with documented hyperparameters."
      ],
      myContribution: "Formulated the research methodology, configured data loaders and augmentation pipelines, implemented the PyTorch training routines, evaluated all models across diagnostic metrics, and authored the comparative analysis."
    }
  },
  {
    id: "uninote-ai",
    title: "UniNote-AI",
    tagline: "AI-Powered Academic Productivity Platform",
    projectType: "Chrome Extension & Web Platform",
    category: "1st Prize Winner • Generative AI • Academic Assistant",
    filterCategories: ["all", "ai-ml", "full-stack"],
    achievement: "🏆 1st Prize — UniNoteAI Ideathon (out of 30+ multidisciplinary teams)",
    shortDescription: "Developed an AI-powered academic assistant using Chrome Extension, Python, Flask, HTML, CSS, JavaScript, Gemini API, SQLite, NLP, and LLMs to generate notes, summaries, quizzes, flashcards, and personalized study plans, improving student learning productivity.",
    technologies: [
      "Chrome Extension",
      "Python",
      "Flask",
      "Gemini API",
      "SQLite",
      "NLP",
      "LLMs",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    keyFeatures: [
      "Automated lecture and article note synthesis powered by Gemini API.",
      "Adaptive quiz generation and instant flashcard creation for efficient self-testing.",
      "Personalized study plan generator tailored to student deadlines and learning goals.",
      "Lightweight Chrome Extension interface paired with a local SQLite database for notes persistence."
    ],
    caseStudy: {
      tagline: "AI-Powered Academic Productivity Platform",
      problem: "College students often navigate disparate materials across web lectures, PDFs, and notes without a unified system for active studying, leading to fragmented revision and inefficient exam preparation.",
      solution: "UniNote-AI provides a consolidated academic companion accessible directly within the browser that transforms reading material and online content into structured notes, flashcards, and custom quizzes on demand.",
      whatIBuilt: "Constructed the full-stack system featuring a Chrome Extension client, a Python Flask REST backend, Gemini API integration for generative intelligence, and SQLite for persistent student study records.",
      howItWorks: [
        "01 — Content Input: Student highlights text or activates the extension on an academic page.",
        "02 — LLM Processing: Flask server invokes Gemini API with specialized prompts for academic summarization and pedagogical structuring.",
        "03 — Artifact Generation: System returns interactive flashcards, multiple-choice quizzes, or structured notes.",
        "04 — Persistence: Notes and review schedules are saved to SQLite for structured retrieval."
      ],
      keyFeatures: [
        "Generative summarization and bulleted revision notes.",
        "Self-assessment quiz generation with reasoning.",
        "Flashcard deck management for spaced repetition.",
        "Personalized study scheduler based on student inputs."
      ],
      myContribution: "Led the core ideation and full-stack development, integrated the Gemini API with tailored prompt templates, and presented the solution to win 1st Prize at the inter-college Ideathon."
    }
  },
  {
    id: "study-mate-ai",
    title: "Study Mate AI – Intelligent Multi-Agent Learning Assistant",
    tagline: "Intelligent Multi-Agent Study Planning & Doubt Resolution",
    projectType: "Multi-Agent AI System",
    category: "Multi-Agent AI • LLMs • Personalized Learning",
    filterCategories: ["all", "ai-ml"],
    shortDescription: "Built a multi-agent AI learning assistant using Python, Gemini API, SQLite, NLP, and LLMs to automate study planning, progress tracking, academic doubt resolution, and personalized learning assistance through intelligent AI agents.",
    technologies: [
      "Python",
      "Gemini API",
      "Multi-Agent AI",
      "SQLite",
      "NLP",
      "LLMs",
      "Prompt Engineering"
    ],
    keyFeatures: [
      "Multi-agent architecture dividing tasks among planning, tutoring, and tracking agents.",
      "Dynamic study scheduler adjusting to student completion rates and mastery.",
      "Context-aware academic doubt resolution using tailored Gemini API prompts.",
      "Progress tracking and retention monitoring stored in an embedded SQLite database."
    ],
    caseStudy: {
      tagline: "Intelligent Multi-Agent Learning Assistant",
      problem: "Generic AI chatbots frequently lack continuity, longitudinal memory, and specialized pedagogical structure, making them suboptimal for comprehensive academic roadmapping and progress tracking.",
      solution: "Engineered Study Mate AI with dedicated role-specific AI agents that collaborate to manage study schedules, clarify technical doubts with step-by-step reasoning, and track learning milestones over time.",
      whatIBuilt: "Designed the multi-agent orchestration layer in Python, integrating Gemini API with structured state management and SQLite persistence.",
      howItWorks: [
        "01 — Student Goal Setting: User specifies subjects, deadlines, and current comfort level.",
        "02 — Agent Coordination: Planning agent generates weekly roadmaps; Doubt agent handles queries; Tracking agent updates mastery metrics.",
        "03 — Interaction & Feedback: Continuous dialogue with video/reading references and checkpoint quizzes.",
        "04 — Record Keeping: All sessions, progress markers, and scheduled reviews are safely stored in SQLite."
      ],
      keyFeatures: [
        "Role-specialized agent architecture for distinct pedagogical tasks.",
        "Automated personalized study planning and timeline generation.",
        "Contextual academic doubt resolution with step-by-step breakdowns.",
        "Comprehensive student progress tracking."
      ],
      myContribution: "Architected the multi-agent task delegation logic, developed prompt chains for tutor and planner roles, and created the SQLite schema for tracking learning history."
    }
  },
  {
    id: "sign-language-translator",
    title: "Real-Time Sign Language Translator – Communication Assistant",
    tagline: "Real-Time American Sign Language Recognition to Text & Speech",
    projectType: "Computer Vision & Deep Learning",
    category: "Computer Vision • Deep Learning • Accessibility",
    filterCategories: ["all", "deep-learning"],
    shortDescription: "Developed a real-time ASL recognition system using Python, TensorFlow, OpenCV, MediaPipe, LSTM, and Text-to-Speech, creating a custom dataset of 200+ images per alphabet to train the model for accurate gesture-to-text and speech translation.",
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "LSTM",
      "Text-to-Speech",
      "NumPy"
    ],
    keyFeatures: [
      "Real-time hand landmark extraction utilizing MediaPipe hands pipeline.",
      "Custom dataset collection comprising 200+ images per alphabet character.",
      "Deep sequence modeling with LSTM layers for temporal gesture recognition.",
      "Integrated Text-to-Speech (TTS) engine enabling instantaneous spoken feedback."
    ],
    caseStudy: {
      tagline: "Real-Time Sign Language Translator – Communication Assistant",
      problem: "Communication barriers between the hearing-impaired community and the general public often hinder seamless interaction, while existing translation solutions can be cost-prohibitive or lack real-time responsiveness.",
      solution: "Created an accessible, computer-vision driven translation tool that captures webcam video, extracts 3D hand keypoints with MediaPipe, classifies gestures with an LSTM model, and synthesizes speech in real time.",
      whatIBuilt: "Curated a dataset of 200+ images per alphabet, trained a spatial-temporal deep learning model in TensorFlow, and built a real-time inference loop using OpenCV and pyttsx3 Text-to-Speech.",
      howItWorks: [
        "01 — Video Capture: Webcam frames are captured continuously using OpenCV.",
        "02 — Keypoint Detection: MediaPipe extracts 21 3D landmarks per hand.",
        "03 — Sequence Classification: TensorFlow LSTM model predicts the active alphabet gesture from normalized coordinates.",
        "04 — Output Synthesis: Predicted characters form words that are voiced aloud using Text-to-Speech."
      ],
      keyFeatures: [
        "Low-latency landmark tracking robust to background variations.",
        "Custom curated training dataset for standard ASL alphabet gestures.",
        "Lightweight architecture capable of running on standard consumer hardware.",
        "Real-time audio output for hands-free communication."
      ],
      myContribution: "Collected and preprocessed the custom image dataset, trained and evaluated the TensorFlow LSTM architecture, and implemented the real-time webcam inference and speech pipeline."
    }
  },
  {
    id: "armour-platform",
    title: "Armour – Women Safety Intelligence Platform",
    tagline: "AI-Driven Safety Prediction & Safest Route Recommendation",
    projectType: "Machine Learning & Spatial Web Platform",
    category: "Machine Learning • Spatial AI • Web Platform",
    filterCategories: ["all", "ai-ml", "full-stack"],
    shortDescription: "Designed an AI-powered women safety platform using Python, Flask, HTML, CSS, JavaScript, Random Forest, A* Algorithm, and Google Maps API to predict unsafe locations, recommend the safest routes, and provide SOS alerts with live location sharing.",
    technologies: [
      "Python",
      "Flask",
      "Random Forest",
      "A* Algorithm",
      "Google Maps API",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    keyFeatures: [
      "Predictive danger scoring using Random Forest trained on urban safety indicators.",
      "Safest pathfinding routing implementation powered by a customized A* Algorithm.",
      "Interactive mapping and route overlay with Google Maps API integration.",
      "Emergency SOS alert mechanism with instantaneous live GPS location sharing."
    ],
    caseStudy: {
      tagline: "Armour – Women Safety Intelligence Platform",
      problem: "Traditional navigation platforms optimize strictly for shortest distance or fastest travel time, often routing pedestrians through poorly lit, secluded, or historically vulnerable areas at night.",
      solution: "Engineered Armour to prioritize personal security by combining predictive risk modeling with cost-adjusted pathfinding to guide users along well-lit, populated, and statistically safer routes.",
      whatIBuilt: "Developed a predictive Random Forest classifier for localized risk levels, integrated the A* algorithm with dynamic safety weights, and built a responsive Flask web application with Google Maps navigation.",
      howItWorks: [
        "01 — Safety Factor Analysis: Random Forest evaluates safety scores based on lighting, crowd density, and historical safety metrics.",
        "02 — Custom Graph Routing: The A* algorithm navigates the street network, weighting edges by risk level rather than mere physical distance.",
        "03 — Map Visualization: Safe pathways are displayed on Google Maps with color-coded safety indicators.",
        "04 — SOS Trigger: One-touch emergency trigger sends coordinates and notifications to emergency contacts."
      ],
      keyFeatures: [
        "Safety-weighted routing algorithm prioritizing secure paths.",
        "Machine learning risk prediction for municipal coordinates.",
        "Google Maps interface with turn-by-turn guidance.",
        "Instantaneous SOS live location sharing."
      ],
      myContribution: "Implemented the Random Forest safety classifier, adapted the A* routing algorithm with safety weights, and built the Flask API endpoints connecting the ML models to the map UI."
    }
  },
  {
    id: "news-sense-ai",
    title: "News Sense AI – Intelligent News Reading Assistant",
    tagline: "Intelligent Real-Time News Summarization & Contextual Insights",
    projectType: "NLP & Generative AI Assistant",
    category: "NLP • Generative AI • Information Retrieval",
    filterCategories: ["all", "ai-ml", "full-stack"],
    shortDescription: "Developed an AI-powered news assistant using Python, Flask, HTML, CSS, JavaScript, News API, Gemini API, NLP, LLMs, and Prompt Engineering to deliver real-time news summarization, keyword explanations, theme extraction, contextual Q&A, and personalized insights.",
    technologies: [
      "Python",
      "Flask",
      "Gemini API",
      "News API",
      "NLP",
      "LLMs",
      "Prompt Engineering",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    keyFeatures: [
      "Real-time news ingestion and parsing powered by News API.",
      "Context-aware article summarization into concise bullet points.",
      "Automatic jargon and keyword explanation for complex geopolitical or financial terms.",
      "Interactive Q&A allowing readers to interrogate specific article context with Gemini API."
    ],
    caseStudy: {
      tagline: "News Sense AI – Intelligent News Reading Assistant",
      problem: "Information overload and dense journalistic prose make keeping up with breaking news overwhelming, often leaving readers without background context on complex terminologies and events.",
      solution: "Built News Sense AI to parse current global headlines, synthesize structured summaries, extract recurring themes, and answer contextual follow-up questions in real time.",
      whatIBuilt: "Created a web application with Flask and JavaScript that interfaces with News API for live feed aggregation and Gemini API for summarization, key concept explanation, and interactive Q&A.",
      howItWorks: [
        "01 — News Aggregation: Fetches real-time articles by category or search query via News API.",
        "02 — NLP Processing: Parses article text and constructs structured prompt payloads.",
        "03 — LLM Summarization: Gemini API generates concise summaries, key themes, and glossary definitions.",
        "04 — Interactive Reader: Users read structured takeaways and chat with the article to ask clarifying questions."
      ],
      keyFeatures: [
        "Categorized real-time news feeds with instant filtering.",
        "Structured multi-bullet summarization of long-form reports.",
        "Glossary tool explaining technical and geopolitical jargon.",
        "In-article Q&A chatbot grounded strictly in the source text."
      ],
      myContribution: "Engineered the Flask web service, integrated the News API pipeline, designed prompt engineering templates for Gemini API, and created the responsive frontend reader interface."
    }
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: "xylofy-ai",
    role: "Data Science Intern",
    organization: "XYlofy AI",
    badge: "Machine Learning & Streamlit",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    responsibilities: [
      "Developed House Price Prediction, Employee Attrition Prediction, and Sales Forecasting applications using Python, Scikit-learn, Pandas, and Streamlit, covering end-to-end ML workflows.",
      "Implemented data preprocessing, feature engineering, model training, evaluation, and deployed interactive prediction dashboards using Streamlit."
    ]
  },
  {
    id: "tata-genai",
    role: "Tata Micro Internship – Gen AI Powered Data Analytics",
    organization: "Tata (Job Simulation)",
    badge: "Gen AI & Risk Analytics",
    technologies: ["Python", "Machine Learning", "EDA", "Risk Profiling"],
    responsibilities: [
      "Performed Exploratory Data Analysis (EDA), feature engineering, and risk profiling to identify business insights and customer delinquency patterns.",
      "Developed supervised ML models for delinquency prediction and prepared business reports with data storytelling to support AI-driven collections strategies."
    ]
  },
  {
    id: "aicte-eduskills",
    role: "Full Stack Development Internship",
    organization: "AICTE Eduskills",
    badge: "Full Stack Engineering",
    technologies: ["HTML5", "CSS3", "JavaScript", "SQL", "PHP", "MySQL"],
    responsibilities: [
      "Developed responsive web applications using HTML5, CSS3, JavaScript, SQL, PHP, and MySQL following full-stack development practices.",
      "Built front-end interfaces, integrated back-end functionality, designed relational databases, and implemented CRUD operations."
    ]
  },
  {
    id: "aicte-aws",
    role: "AWS AI-ML Virtual Internship",
    organization: "AICTE",
    badge: "Cloud AI & Sandbox Labs",
    technologies: ["AWS AI Services", "Machine Learning", "Deep Learning", "NLP"],
    responsibilities: [
      "Completed hands-on training in Machine Learning, Deep Learning, NLP, and AWS AI Services through real-world labs and projects.",
      "Practiced implementing AI/ML workflows in the AWS sandbox environment, including model development, code execution, training, evaluation, and deployment concepts."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "uninote-ideathon",
    icon: "Trophy",
    title: "1st Prize — UniNoteAI Ideathon",
    subtitle: "Inter-College Innovation Competition",
    description: "Secured 1st place among 30+ multidisciplinary teams from multiple colleges for developing UniNoteAI, an AI-powered academic productivity platform leveraging Generative AI to enhance student learning.",
    tag: "1st Place Winner",
    isFeatured: true
  },
  {
    id: "streetcause-award",
    icon: "Award",
    title: "Most Dedicated Division Award",
    subtitle: "StreetCause NGO",
    description: "Recognized for exceptional leadership, commitment, and impactful contributions in organizing education outreach, fundraising, and community welfare initiatives.",
    tag: "Leadership & Service",
    isFeatured: false
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "stanford-ml",
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University & DeepLearning.AI",
    platform: "Coursera"
  },
  {
    id: "mckinsey-forward",
    name: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    platform: "Career Readiness & Professional Skills"
  },
  {
    id: "oracle-sql",
    name: "Database Programming with SQL",
    issuer: "Oracle Academy",
    platform: "Database Engineering"
  },
  {
    id: "cisco-python",
    name: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy & OpenEDG",
    platform: "Python Institute"
  },
  {
    id: "infosys-ds",
    name: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    platform: "Data Analytics"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "mvsr-btech",
    degree: "B.E. Computer Science Engineering",
    institution: "MVSR Engineering College (MEC)",
    period: "2023 – 2027",
    grade: "9.23 / 10.00",
    gradeLabel: "CGPA",
    details: "Focusing on Artificial Intelligence, Machine Learning, Deep Learning, Algorithms, and Software Engineering."
  },
  {
    id: "narayana-inter",
    degree: "Class XII (TSBIE)",
    institution: "NARAYANA",
    period: "2021 – 2023",
    grade: "97%",
    gradeLabel: "Aggregate",
    details: "Mathematics, Physics, and Chemistry."
  },
  {
    id: "sri-chaitanya-ssc",
    degree: "Class X (SSC)",
    institution: "Sri Chaitanya Techno School",
    period: "2021",
    grade: "100%",
    gradeLabel: "Aggregate",
    details: "Secondary School Certificate."
  }
];

export const CURRENTLY_EXPLORING = [
  { name: "AI", desc: "Foundational & Agentic Systems" },
  { name: "Machine Learning", desc: "Supervised & Unsupervised Models" },
  { name: "Deep Learning", desc: "CNNs, LSTMs & Neural Nets" },
  { name: "Generative AI", desc: "Prompt Engineering & RAG" },
  { name: "LLMs", desc: "Reasoning & Fine-Tuning" },
  { name: "Computer Vision", desc: "Transformers & Spatial Detection" },
  { name: "Data Science", desc: "Feature Engineering & Storytelling" }
];
