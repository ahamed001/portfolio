import self from "../img/self.png"
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
            text: "Full-stack Developer at Techzurf"
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
    bio: `Hello! I'm Ahamed Irfan, a full stack developer with ${getExperienceText()}+ years of experience, specializing in building responsive frontends, scalable APIs, and production-ready systems.\nWhen I’m not coding, I enjoy long walks on the beach. Let’s connect—I’d love to bring my expertise to your team!`,
    skills:
    {
        proficientWith: ['javascript', 'react', 'REST APIs', 'flutter', 'redux', 'tailwind', 'nodejs', 'mongodb', 'mysql', 'ci/cd', 'Git', 'Deployment', 'Server handling (PM2, Nginx)'],
        exposedTo: ['nextjs', 'postgresql', 'typescript', 'AR/VR frameworks', 'JWT authentication', 'Payment gateway integration', 'Cloud services (Firebase, AWS basics)']
    },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'badminton',
            emoji: '🏸'
        },
    ],
    experience: [
        {
            company: "Techzurf",
            role: "Full Stack Developer",
            start: "2024 Dec",
            end: "present",
            location: "Chennai, India",
            workMode: "Hybrid",
            description: [
            "Contributed to production-grade web and mobile platforms with multi-role architecture.",
            "Built and maintained role-based systems for admins, users, and vendors across platforms."
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
            "Worked on AR-based web applications, LMS platforms, and internal tools.",
            "Contributed during final development phases, focusing on UI stability, bug fixes, and performance optimization."
            ]
        },
        {
            company: "Why Global Services",
            role: "Full Stack Developer Intern",
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
                    title: "My Umrah Trips Platform",
                    company: "Techzurf",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "partial",
                    status: "live",
                    live: "https://myumrahtrips.com",
                    tech: ["React", "NodeJs", "Flutter", "Redux", "Provider"],
                    image: umrahTrips,
                    description: "Large-scale travel booking platform with multi-role architecture across web and mobile. Includes separate experiences for users, agents, admins, super admins, and marketing teams. Built and maintained two web applications and one Android application, with shared and role-specific features across platforms."
                },
                {
                    title: "Connect Masjid Mobile Application",
                    company: "Techzurf",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "public",
                    status: "live",
                    live: "https://play.google.com/store/apps/details?id=com.techzurf.demomasjid&hl=en_IN",
                    platforms: ["Android"],
                    tech: ["Flutter", "NodeJs", "Provider", "MongoDB"],
                    image: connectMasjid,
                    description: "Android application connecting users with nearby masjids. Includes role-based access for admin and users, prayer updates, and mosque management features."
                },
                {
                    title: "POS Billing & Inventory Management System",
                    company: "Techzurf",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["React", "NodeJs", "Redux"],
                    // image: pos,
                    description: "Role-based POS billing system supporting staff, inventory managers, admins, and super admins."
                },
                {
                    title: "Thijarath – Multi-Tenant E-Commerce SaaS Platform",
                    company: "Techzurf",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "unhosted",
                    tech: ["React", "NodeJs", "Redux", "MongoDB"],
                    image: thijarath,
                    description: "Multi-tenant e-commerce SaaS platform that enables creation and management of multiple online stores. Supports role-based access for users, admins, and super admins with centralized product, order, and tenant management."
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
                    description:"Interactive AR furniture website allowing users to visualize furniture in real-world environments using Google Model Viewer and WebAR techniques."
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
                    description: "Learning management system with role-based access, course management, and backend APIs. Contributed as a junior full-stack developer during the final development phase, focusing on UI refinements, bug fixes, and performance optimizations to improve rendering efficiency."
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
                    description: "E-commerce backend APIs with Redux-based frontend state management."
                },
                {
                    title: "AR Virtual Try-On Engine",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["TensorFlowJs", "WebAR", "MindAR", "DeepAR", "Banuba", "Face Detection", "Hand Tracking"],
                    description:"Built hand and face detection modules for AR-based virtual try-on systems. Focused on real-time tracking and performance optimization."
                },
                {
                    title: "Web-Based Video Editor",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "discontinued",
                    tech: ["React", "Video SDKs"],
                    // image: reelsMaker,
                    description: "Video editor product prototype. Hosting discontinued due to company funding issues."
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