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
            text: "Full Stack Developer | MongoDB, Express, React, Node"
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
    bio: `Hello! I'm Ahamed Irfan, a Full Stack Developer with ${getExperienceText()}+ years of experience building web and mobile applications. I work across the frontend and backend, primarily using React, JavaScript, Node.js, Express, MongoDB, and Flutter.
    My experience includes building business management systems, POS and inventory platforms, multi-platform travel applications, e-commerce products, and mobile applications. I've developed REST APIs, implemented JWT-based authentication across backend projects, integrated third-party services such as Razorpay, and worked with real-time communication using Socket.IO.
    I enjoy understanding how complete products work, solving practical engineering problems, and improving application functionality and performance.`,
    skills:
    {
        proficientWith: ['javascript', 'react.js', 'redux', 'node.js', 'express.js', 'REST APIs', 'JWT authentication', 'MongoDB', 'MongoDB indexing', 'flutter', 'tailwind', 'socket.IO', 'Razorpay integration', 'Git', 'Deployment', 'Server handling (PM2, Nginx)'],
        exposedTo: ['nextjs', 'postgresql', 'typescript', 'AR/VR frameworks', 'Cloud services (Firebase, AWS basics)']
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
        }
    ],
    experience: [
        {
            company: "Sabeel Technologies",
            role: "Full Stack Developer",
            start: "2024 Dec",
            end: "Present",
            location: "Chennai, India",
            workMode: "Hybrid",
            description: [
                "Developed and maintained web and mobile applications, contributing to frontend features, backend functionality, and REST API development across multiple products.",
                "Built an eight-module POS and business management system covering POS billing, inventory management, stock transfer management, sales management, expense tracking, customer management, user management, and branch management.",
                "Worked with a product catalogue of 20,000+ items and implemented MongoDB indexing to improve query efficiency and product retrieval performance.",
                "Implemented JWT-based authentication across backend applications and integrated Socket.IO for real-time updates in the POS and inventory system.",
                "Worked on a multi-platform travel system with separate admin web, user mobile, and salesman mobile applications, supporting five roles: admin, super admin, agent/vendor, user, and salesman."
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
                "Developed AR-enabled web applications for virtual try-on and 3D visualization using JavaScript, WebAR, and real-time face and hand tracking libraries.",
                "Contributed to LMS and internal platforms using React and Spring Boot, working on frontend features, backend integration, UI stability, bug fixes, and rendering performance.",
                "Contributed to e-commerce application development using Node.js, Next.js, and Redux, including backend API work and frontend state management."
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
                    description: "A user-facing job fair application platform developed during my internship. I worked on building responsive React interfaces and form workflows using HTML, CSS, and JavaScript, focusing on collecting and presenting applicant information through a structured application experience."
                },
                {
                    title: "Abhis Overseas Admin Panel",
                    company: "Why Global Services",
                    role: "MERN Stack Developer Intern",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["React", "Redux"],
                    description: "An internal administrative dashboard developed to support overseas consultancy operations. I worked on React-based interface development and Redux state management to organize application data and support administrative workflows."
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
                    tech: ["React", "NodeJs", "Express", "Redux","Socket.IO", "MongoDB", "MongoDB Indexing", "JWT"],
                    image: pos,
                    description: "A business management and Point of Sale (POS) platform that brings core business operations into one application. I worked across the frontend and backend, developing features and REST APIs for eight connected business areas: POS billing, inventory management (including stock adjustments), stock transfer management, sales management, expense tracking, customer management, user management, and branch management. The platform also supports vendor-related workflows and business reporting such as tax summaries. One technical challenge was working with a product catalogue of more than 20,000 items. I implemented MongoDB indexing to improve query efficiency and product retrieval performance, and integrated Socket.IO to deliver real-time inventory updates and data synchronization across relevant application modules. Backend APIs use JWT-based authentication to protect authenticated application workflows."
                },

                {
                    title: "My Umrah Trips Platform",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "partial",
                    status: "live",
                    live: [
                        {label: "Web", url: "https://myumrahtrips.com"},
                        {label: "iOS App", url: "https://apps.apple.com/in/app/my-umrah-trips/id6759250997"},
                        {label: "Android App", url: "https://play.google.com/store/apps/details?id=com.techzurf.myumrahtripsapp"}
                    ],
                    platforms: ["Android", "iOS", "Web"],
                    tech: ["React", "NodeJs", "Express", "Flutter", "MongoDB", "Redux", "Provider", "JWT Access Tokens", "JWT Refresh Tokens", "Razorpay", "Cloudinary"],
                    image: umrahTrips,
                    description: "A multi-platform travel management system built around three application surfaces: an admin web application, a user mobile application, and a salesman mobile application, with mobile support for Android and iOS. I contributed to frontend and backend development, including REST API development and integration across the applications. The platform supports five roles: Admin, Super Admin, Agent/Vendor, User, and Salesman, with role-specific access and workflows. For authentication, the backend uses JWT access tokens and refresh tokens to manage authenticated sessions. I also integrated Razorpay for online payment workflows and connected payment transaction details with backend APIs. Cloudinary is used for media management, while shared APIs support consistent workflows across the web and mobile applications."
                },
                {
                    title: "Thijarath – Multi-Tenant E-Commerce SaaS Platform",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "unhosted",
                    platforms: ["Web"],
                    tech: ["React", "NodeJs", "Express", "MongoDB", "JWT"],
                    image: thijarath,
                    description: "A multi-tenant e-commerce SaaS application designed to let multiple online stores operate through a centralized platform. I worked on frontend and backend functionality, including tenant management, product management, order workflows, and REST API integration. The application was structured around tenant-specific data and role-based access, allowing store operations to be managed within a shared system. Backend routes use JWT-based authentication for protected access. The project was developed but is not currently hosted publicly."
                },
                {
                    title: "Connect Masjid Mobile Application",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "public",
                    status: "live",
                    live: [
                        { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.techzurf.demomasjid&hl=en_IN"}
                    ],
                    platforms: ["Android"],
                    tech: ["Flutter", "NodeJs", "Express", "Provider", "MongoDB", "JWT"],
                    image: connectMasjid,
                    description: "A community-focused Android application designed to connect users with nearby masjids and provide mosque-related information and services. I contributed to the Flutter mobile application and Node.js backend, working on application features, API integration, and role-based functionality for users and mosque administrators. The application includes nearby masjid discovery, prayer and Azan time information, mosque details, and community features. The backend uses JWT-based authentication for protected application access."
                },
                {
                    title: "Accounts & Financial Management System",
                    company: "Sabeel Technologies",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    platforms: ["Web"],
                    tech: ["React", "NodeJs", "Express", "MongoDB", "JWT"],
                    description: "A web-based financial management application for organizing business financial records and providing controlled access to financial information. I contributed to React frontend features and Node.js/Express backend APIs for transaction management, financial records, and reporting workflows. The application uses role-based access to separate user permissions, with JWT-based authentication protecting backend routes."
                },
                {
                    title: "AR Virtual Try-On Engine",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["TensorFlowJs", "WebAR", "MindAR", "DeepAR", "Banuba", "Face Detection", "Hand Tracking"],
                    description: "A browser-based Augmented Reality (AR) experience for interactive virtual try-on using real-time face and hand tracking. I contributed to integrating and working with AR and tracking technologies to support browser-based detection, tracking, and interactive experiences. The work involved exploring and using TensorFlow.js, WebAR, MindAR, DeepAR, and Banuba according to the requirements of different experiences. This was an internal project, so implementation details and source code are not publicly available."
                },
                {
                    title: "Mentop LMS",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["React", "Spring Boot", "REST APIs", "JWT"],
                    image: mentop,
                    description: "A Learning Management System with role-based access, course management workflows, and backend API integration. I contributed to the React frontend and worked with Spring Boot APIs, focusing on interface refinements, API integration, bug fixes, and frontend rendering performance during the final development phase. JWT-based authentication was used for protected backend access."
                },
                {
                    title: "DSimilar E-Commerce Platform",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "internal",
                    tech: ["NodeJs", "Express", "Redux", "NextJs", "REST APIs", "JWT"],
                    image: dsimilar,
                    description: "An e-commerce application involving backend API development and frontend state management. I contributed to Node.js backend functionality and worked with Next.js and Redux on the frontend, including API integration and shared application state. Backend endpoints used JWT-based authentication for protected access."
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
                    description: "An interactive 3D furniture visualization website that lets users explore furniture models and view them in real-world environments using supported augmented reality capabilities. I worked on integrating JavaScript and Google Model Viewer to display interactive 3D models and enable product visualization in the browser."
                },
                {
                    title: "Web-Based Video Editor",
                    company: "EFFE Technology",
                    role: "Full Stack Developer",
                    type: "professional",
                    access: "restricted",
                    status: "discontinued",
                    tech: ["React", "Video SDKs"],
                    description: "A browser-based video editing prototype developed with React and video SDK integrations. I contributed to frontend implementation and the integration of video-related SDK functionality to explore editing workflows within a web application. The project was discontinued before becoming a publicly hosted product."
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