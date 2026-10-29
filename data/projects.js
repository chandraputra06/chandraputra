export const projects = [
  {
    id: 1,
    slug: 'grid-id',
    title: 'GRID.ID',
    shortDescription:
      'An AI-powered decision-support platform for predictive maintenance of electrical infrastructure, combining citizen reports, YOLOv8 defect detection, and IoT device monitoring in a single dashboard.',
    description:
      'GRID.ID is an early-detection and predictive-maintenance system for electrical infrastructure such as poles, cables, substations, and insulators. Citizens can report at-risk conditions through photos that are instantly analyzed by an AI model to classify the type of defect and its severity, after which the system computes a per-asset risk score to prioritize inspections. The workflow spans field-officer assignment, on-site inspection input, and supervisor verification, and integrates with IoT devices for real-time panel monitoring, complete with interactive maps, automated alerts for critical areas, and a multi-organization B2B portal.',
    studyCase:
      'Power disruptions caused by damaged infrastructure are often handled too late because monitoring is still manual and limited. GRID.ID addresses this by combining three data sources, namely participatory citizen reports, field-officer inspections, and IoT device telemetry, all assessed automatically by AI and a risk-scoring system so that handling can be prioritized before failures occur. The result is an end-to-end flow from early detection to follow-up, complete with early warnings for citizens near critical areas and dashboards tailored to each user role.',
    client: 'PLN Ice Competition Project',
    year: '2026',
    roles: ['Fullstack Development', 'UI Implementation', 'Deployment', 'AI Model Integration',],
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'YOLOv8', 'Firebase', 'Railway', 'Hostinger', 'GitHub'],
    thumbnail: '/images/projects/grid.id.png',
    gallery: [
      '/images/projects/grid-id/',
    ],
    projectUrl: 'https://gridid.io',
    githubUrl: 'https://github.com/chandraputra06/grid-id.git', 
    featured: true,
  },
  {
    id: 2,
    slug: 'eco-sphere',
    title: 'Eco Sphere',
    shortDescription:
      'A community-based waste management web platform for Bali, connecting citizens with environmental communities, waste management organizations, and collectors through AI-powered waste reporting.',
    description:
      'Eco-Sphere is a full-stack web application that helps citizens scan and report waste, then routes it to the right party: environmental communities and waste management organizations for large volumes, and Grapari for e-waste. Each role (Citizen, Collector, Manager, CSR, Admin) has its own dashboard with statistics, charts, and an interactive Leaflet map to monitor the reports assigned to their organization. It features role-based authentication, user profiles with photo upload, points-and-leaderboard gamification, and admin moderation.',
    studyCase:
      'Bali faces a complex waste management problem, where citizen reports often fail to reach the right party and lack transparency in how they are handled. Eco-Sphere addresses this with a single reporting flow that uses AI to classify the type and volume of waste, then routes it to the appropriate community, waste manager, or e-waste point. Centralizing data per organization ensures each party only sees relevant reports, while gamification drives sustained citizen participation.',
    client: 'Competition Project (Personal)',
    year: '2026',
    roles: ['Full-Stack Development', 'UI/UX Implementation', 'Backend & API Development', 'Database Design', 'Deployment'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Leaflet', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Neon', 'Vercel', 'GitHub'],
    thumbnail: '/images/projects/eco-sphere.png',
    gallery: [],
    projectUrl: 'https://eco-sphere-id.vercel.app',
    githubUrl: '',
    featured: true,
  },
  {
    id: 3,
    slug: 'paw-sphere',
    title: 'Paw Sphere',
    shortDescription:
      'An integrated multi-clinic web platform connecting pet owners with veterinarians and clinics through AI triage, teleconsultation, and clinic services.',
    description:
      'PawSphere is a web-based, multi-clinic platform that unifies pet health and care services into a single ecosystem. It connects three user roles (pet owners, veterinarians, and clinics) across a full journey: AI-based symptom triage (AI Diagnosis), location-based emergency reporting (Paw Alert), nearby clinic search (Clinic Discovery), two-way veterinary teleconsultation (Vet Connect), digital prescriptions (E-Prescription), and clinic services such as hospitalization and pet boarding, complemented by a marketplace and adoption feature. Built on a three-tier architecture (React, Express.js, MySQL with Prisma) and secured with JWT role-based access control, PawSphere is live on cloud infrastructure.',
    studyCase:
      'Problem: Pet healthcare in Indonesia is fragmented, forcing owners to jump between separate apps to check symptoms, find a clinic, consult a vet, get a prescription, and buy medicine. This slows treatment, leaves emergencies without a structured reporting channel, and makes health history hard to track, while dozens of clinics operate in isolation. Solution: As the lead developer, I designed and built a single multi-clinic platform that links owners to many clinics and vets in one flow, from AI triage and teleconsultation to e-prescription and clinic bookings, backed by a verified network of vets and clinics. Outcome: A fully functional web app deployed on Railway and Vercel that passed black-box testing and User Acceptance Testing across its core modules, was further validated through a System Usability Scale (SUS) survey, and became the basis for a student entrepreneurship proposal (P2MW 2026).',
    client: 'Universitas Udayana (Capstone Project)',
    year: '2026',
    roles: ['Project Lead', 'Full-Stack Development', 'UI Implementation', 'Deployment'],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Prisma ORM', 'JWT', 'Google Gemini API', 'Vercel', 'Railway', 'GitHub'],
    thumbnail: '/images/projects/paw-sphere.png',
    gallery: [],
    projectUrl: 'https://pawsphere-id.vercel.app',
    githubUrl: '',
    featured: true,
  },
  {
    id: 4,
    slug: 'samblung-mas-house',
    title: 'Samblung Mas House',
    shortDescription:
      'A hospitality website built to showcase the property, amenities, and booking information for guests.',
    description:
      'Samblung Mas House is a website created to present the property in a clean and engaging way, helping visitors explore the rooms, amenities, and overall stay experience more easily.',
    studyCase:
      'This project was built to improve the online presence of the property and provide a more accessible way for potential guests to view information, photos, and contact details.',
    client: 'Samblung Mas House',
    year: '2026',
    roles: ['Website Development', 'UI Implementation', 'Deployment'],
    technologies: ['Hostinger Website Builder', 'Hostinger', 'GitHub'],
    thumbnail: '/images/projects/samblungmas.png',
    gallery: [
      '/images/projects/samblungmas/samblungmas-1.jpeg',
      '/images/projects/samblungmas/samblungmas-2.jpeg',
      '/images/projects/samblungmas/samblungmas-3.jpeg',
      '/images/projects/samblungmas/samblungmas-4.jpeg',
      '/images/projects/samblungmas/samblungmas-5.jpeg',
    ],
    projectUrl: 'https://samblungmashouse.com',
    githubUrl: '',
    featured: true,
  },
  {
    id: 5,
    slug: 'tria-maria',
    title: 'Tria Maria',
    shortDescription:
      'Aesthetic beachfront accommodation website for Tria Maria Cottage located in Ngurbloat Beach, Southeast Maluku.',
    description:
      'Developed a professional, high-performing website for Tria Maria Cottage, featuring modern UI implementation, responsive mobile layouts, room listings (Standard & Superior), comprehensive amenities, and optimized local SEO to enhance online visibility and direct bookings.',
    studyCase:
      'The project focused on transforming standard website templates into an authentic, tropical aesthetic that reflects the warm hospitality and stunning coastal views of Ngurbloat Beach. Key challenges included structuring accurate room details, integrating local service offerings, implementing SEO optimizations with AIOSEO, and configuring Google Search Console for rapid indexing. The solution involved a combination of custom design elements, responsive layouts, and SEO best practices to ensure the website not only looked appealing but also performed well in search engine rankings, ultimately driving more traffic and bookings for Tria Maria Cottage.',
    client: 'Tria Maria Cottage',
    year: '2026',
    roles: ['Website Development', 'UI Implementation', 'SEO & Deployment'],
    technologies: ['Hostinger Website Builder', 'Elementor', 'WordPress', 'Hostinger', 'AIOSEO', 'Google Search Console'],
    thumbnail: '/images/projects/tria-maria.png',
    gallery: [],
    projectUrl: 'https://triamariangurbloat.com',
    githubUrl: '',
    featured: true,
  },
  {
    id: 6,
    slug: 'sipil-saku',
    title: 'Sipil Saku',
    shortDescription:
      'A practical, web-based digital directory and platform designed for civil engineering students and practitioners to easily access learning modules, construction standards, and material references in one place.',
    description:
      'Sipil Saku is a web application specifically engineered as a productivity-boosting and educational platform for the civil engineering community. The website provides content management features, course modules, e-books, and a secure, efficient backend management system for administrators to organize civil engineering educational content seamlessly.',
    studyCase:
      'Civil engineering students and practitioners frequently require rapid access to technical literature, modules, and on-site learning materials. The challenge lies in creating a centralized platform that is responsive, accessible anytime, and equipped with a reliable content management system (CMS) for administrators to update learning materials periodically without performance bottlenecks. The solution was to develop a web-based platform that consolidates all necessary resources, ensuring that users can quickly find and utilize the information they need for both academic and professional purposes.',
    client: 'Civil Engineering Students',
    year: '2026',
    roles: ['Fullstack Development', 'UI Implementation', 'Deployment'],
    technologies: ['Laravel 13', 'Tailwind CSS', 'Hostinger', 'GitHub'],
    gallery: [],
    projectUrl: 'https://sipilsaku.site',
    githubUrl: '',
    featured: true,
  },
  {
    id: 7,
    slug: 'website-orinimo',
    title: 'Orinimo Official Website',
    shortDescription:
      'A product-focused website built to help users browse digital products, explore details, and reach the brand more easily.',
    description:
      'Orinimo Official Website is a modern web platform designed to present digital products in a clear and accessible way. It helps users browse categories, review product details, and connect with the business anytime.',
    studyCase:
      'The project was developed to strengthen the online presence of Orinimo and provide a better browsing experience for customers looking for digital product information.',
    client: 'Orinimo',
    year: '2026',
    roles: ['Frontend Development', 'UI Development', 'Deployment'],
    technologies: ['React.js', 'Tailwind CSS', 'Hostinger', 'GitHub'],
    thumbnail: '/images/projects/orinimo-web.png',
    gallery: [
      '/images/projects/orinimo-website/orinimo-web1.jpeg',
      '/images/projects/orinimo-website/orinimo-web2.jpeg',
      '/images/projects/orinimo-website/orinimo-web3.jpeg',
      '/images/projects/orinimo-website/orinimo-web4.jpeg',
      '/images/projects/orinimo-website/orinimo-web5.jpeg',
    ],
    projectUrl: 'https://orinimo.store',
    githubUrl: '',
    featured: true,
  },
  {
    id: 8,
    slug: 'sistem-rekapan-orinimo',
    title: 'Orinimo Recapitulation System',
    shortDescription:
      'An internal recap system for managing account data, tracking performance, and simplifying operational workflows.',
    description:
      'Orinimo Recapitulation System is a web-based admin system built to manage recap data in a more structured and efficient way. It helps monitor account information, organize records, and improve daily operational processes.',
    studyCase:
      'This project was created to replace manual recap workflows with a centralized system that makes data management, filtering, tracking, and reporting more efficient.',
    client: 'Orinimo',
    year: '2026',
    roles: ['Fullstack Development', 'Dashboard Development', 'Admin System Development'],
    technologies: [
      'Laravel 12',
      'PHP 8.4',
      'MySQL',
      'Blade',
      'Tailwind CSS',
      'JavaScript',
      'Vite',
      'Laravel Excel',
      'Hostinger',
      'GitHub',
    ],
    thumbnail: '/images/projects/recap-nimo.png',
    gallery: [
      '/images/projects/orinimo-recap/recap1.jpeg',
      '/images/projects/orinimo-recap/recap2.jpeg',
      '/images/projects/orinimo-recap/recap3.jpeg',
      '/images/projects/orinimo-recap/recap4.jpeg',
      '/images/projects/orinimo-recap/recap5.jpeg',
    ],
    projectUrl: 'https://recap.orinimo.store',
    githubUrl: '',
    featured: true,
  },
]