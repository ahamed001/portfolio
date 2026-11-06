import self from "../img/self.png"
import pos from "../img/pos.png"
import ecommerce from "../img/ecommerce.png"
import restaurant from "../img/restaurant.png"
import jobFair from "../img/jobFair.png"
import mentop from "../img/mentop.png"
import dsimilar from "../img/dsimilar.png"
import arFurniture from "../img/arFurniture.png"
import umrahTrips from "../img/umrahTrips.png"
import connectMasjid from "../img/connectMasjid.png"
import thijarath from "../img/thijarath.png"
import { getExperienceText } from "../utils"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Ahamed",
    lastName: "Irfan",
    initials: "Ai",
    position: "Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: "💼",
            text: "Full-stack Developer at Sabeel Technologies"
        }
    ],
    socials: [
        {
            link: "https://github.com/ahamed001",
            icon: "fa fa-github",
            label: 'github',
            hoverColor: "#333"
        },
        {
            link: "https://www.linkedin.com/in/ahamed-irfan",
            icon: "fa fa-linkedin",
            label: 'linkedin',
            hoverColor: "#0A66C2"
        },
        {
            link: "mailto:ahamed.irfan001@gmail.com",
            icon: "fa fa-envelope",
            label: 'email',
            hoverColor: "#D44638"
        }
    ],
    bio: `Hello! I'm Ahamed Irfan, a full stack developer with ${getExperienceText()}+ years of experience building web and mobile applications using React, Node.js, Express, and Flutter.
    I enjoy building business applications, scalable APIs, multi-tenant platforms, and real-time systems. I've worked on products ranging from POS and inventory management systems to travel platforms and e-commerce applications.
    I'm always exploring new technologies and looking forward to solving challenging engineering problems.`,
    skills:
    {
        proficientWith: ['javascript', 'react.js', 'redux', 'node.js', 'express.js', 'REST APIs', 'JWT authentication', 'flutter', 'tailwind', 'socket.IO', 'ci/cd', 'Git', 'Deployment', 'Server handling (PM2, Nginx)'],
        exposedTo: ['nextjs', 'postgresql', 'typescript', 'AR/VR frameworks', 'Payment gateway integration', 'Cloud services (Firebase, AWS basics)']
    },
    hobbies: [
        {
            label: "running",
            emoji: "🏃‍♂️"
        },
        {
            label: 'reading',
            emoji: '📚'
        },
        {
            label: 'exploring places',
            emoji: '📍'
        },
    ],
    experience: [
        {
            company: "Sabeel Technologies",
            role: "Full Stack Developer",
            start: "2024 Dec",
            end: "present",
            location: "Chennai, India",
            workMode: "Hybrid",
            description: [
                "Developed web and mobile applications with role-based functionality for users, agents, admins, and super admins.",
                "Built POS and inventory management workflows covering billing, stock transfers, adjustments, expenses, and vendor management.",
                "Worked with a product catalogue of 20,000+ items and integrated Socket.IO for real-time data updates."
            ]
        },
        {
            company: "EFFE Technology",
            role: "Full Stack Developer",
            start: "2023 Dec",
            end: "2024 Aug",
            location: "Chennai, India",
            workMode: "On-site",
            description: [
                "Developed AR-enabled web applications for virtual try-on and 3D visualization using WebAR and real-time tracking libraries.",
                "Contributed to LMS and internal platforms using React and Spring Boot, focusing on API integration, UI stability, bug fixes, and performance."
            ]
        },
        {
            company: "Why Global Services",
            role: "MERN Stack Developer Intern",
            start: "2023 May",
            end: "2023 Nov",
            location: "Chennai, India",
            workMode: "On-site",
            description: [
            "Developed user-facing web applications and internal admin dashboards.",
            "Gained hands-on experience with real-world frontend workflows and API integration."
            ]
        }
    ],
    portfolio: {
        professional: {
            internship: [
                {
                    title: "Job Fair Application Form",
                    company: "Why Global Services",
                    role: "MERN Stack Developer Intern",
                    type: "professional",
                    access: "public",
                    status: "archived",
                    tech: ["HTML", "CSS", "JavaScript", "React"],
                    image: jobFair,
                    description: "User-facing job fair platform developed during internship. Focused on responsive UI and form workflows."
                },
                {
                    title: "Abhis Overseas Admin Panel",
                    company: "Why Global Services",
                    role: "MERN Stack Developer Intern",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["React", "Redux"],
                    description: "Internal admin dashboard for managing overseas consultancy operations."
                }
            ],

            fulltime: [
                {
                    title: "Business Management Suite",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    platforms: ["Web"],
                    tech: ["React", "NodeJs", "Express", "Redux", "Socket.IO", "MongoDB"],
                    image: pos,
                    description: "Developed a business management and POS platform covering billing, inventory, purchases, stock transfers, stock adjustments, expense tracking, tax summaries, and vendor management. Worked with a product catalogue of 20,000+ items and integrated real-time updates using Socket.IO."
                },
                {
                    title: "My Umrah Trips Platform",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "partial",
                    status: "live",
                    live: [
                        { label: "Web", url: "https://myumrahtrips.com" },
                        { label: "iOS App", url: "https://apps.apple.com/in/app/my-umrah-trips/id6759250997" },
                        { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.techzurf.myumrahtripsapp" }
                    ],
                    platforms: ["Android", "iOS", "Web"],
                    tech: ["React", "NodeJs", "Flutter", "MongoDB", "Redux", "Provider", "Cloudinary"],
                    image: umrahTrips,
                    description: "Multi-platform travel booking system spanning two web applications and Android and iOS apps. Supports users, agents, admins, and marketing teams through role-based access, shared APIs, and integrated travel workflows."
                },
                {
                    title: "Thijarath – Multi-Tenant E-Commerce SaaS Platform",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "unhosted",
                    platforms: ["Web"],
                    tech: ["React", "NodeJs", "MongoDB"],
                    image: thijarath,
                    description: "Multi-tenant e-commerce SaaS platform that enables multiple online stores to operate through a centralized system. Includes role-based access and management of tenants, products, and orders across stores."
                },
                {
                    title: "Connect Masjid Mobile Application",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "public",
                    status: "live",
                    live: [
                        { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.techzurf.demomasjid&hl=en_IN" }
                    ],
                    platforms: ["Android"],
                    tech: ["Flutter", "NodeJs", "Provider", "MongoDB"],
                    image: connectMasjid,
                    description: "Community-focused Android application connecting users with nearby masjids. Includes prayer time updates, mosque information, and role-based features for users and mosque administrators."
                },
                {
                    title: "Accounts & Financial Management System",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    platforms: ["Web"],
                    tech: ["React", "NodeJs", "MongoDB"],
                    description: "Role-based financial management application for tracking transactions, financial records, and reports, with controlled access and backend API integration."
                },
                {
                    title: "AR Virtual Try-On Engine",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["TensorFlowJs", "WebAR", "MindAR", "DeepAR", "Banuba", "Face Detection", "Hand Tracking"],
                    description: "Worked on AR-based virtual try-on experiences using face and hand tracking technologies. Contributed to real-time detection and tracking features for interactive browser-based experiences."
                },
                {
                    title: "Mentop LMS",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["React", "Spring Boot"],
                    image: mentop,
                    description: "Learning management platform with role-based access, course management, and backend APIs. Contributed to frontend refinements, API integration, bug fixes, and rendering performance improvements during the final development phase."
                },
                {
                    title: "DSimilar E-Commerce Platform",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["NodeJs", "Redux", "NextJs"],
                    image: dsimilar,
                    description: "Contributed to an e-commerce platform involving backend API development and frontend state management using Redux and Next.js."
                },
                {
                    title: "AR Furniture Website",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "public",
                    status: "internal",
                    tech: ["JavaScript", "Google Model Viewer"],
                    image: arFurniture,
                    description: "Interactive furniture visualization website that allows users to view 3D furniture models in real-world environments using Google Model Viewer and WebAR."
                },
                {
                    title: "Web-Based Video Editor",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "discontinued",
                    tech: ["React", "Video SDKs"],
                    description: "Contributed to a browser-based video editor prototype using React and video SDKs. The project was discontinued and is no longer hosted."
                }
            ],

            personal: [
                {
                    title: "Restaurant Website",
                    company: "Personal",
                    role: "Frontend",
                    type: "personal",
                    status: "live",
                    live: "https://restaurant-ahamed001.vercel.app",
                    source: "https://github.com/ahamed001/Restaurant",
                    tech: ["HTML", "CSS"],
                    image: restaurant,
                    description: "My first pure HTML and CSS website."
                },
                {
                    title: "E-Commerce Frontend",
                    company: "Personal",
                    role: "Frontend",
                    type: "personal",
                    status: "live",
                    live: "https://foot-print-client.vercel.app",
                    source: "https://github.com/ahamed001/FootPrint-Client",
                    tech: ["React", "Tailwind"],
                    image: ecommerce,
                    description: "React-based e-commerce frontend with modern UI and state handling."
                }
            ]
        }
    }
}