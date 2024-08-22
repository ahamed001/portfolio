import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Ahamed",
    lastName: "Irfan",
    initials: "Ai",
    position: "a Full Stack Developer",
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
            text: "Full-stack Developer at EFFE"
        },
        {
            emoji: "📧",
            text: "ahamed.irfan001@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/ahamed001",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ahamed-irfan",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/AhamedIrfan001",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Ahamed Irfan, a full stack developer with 1+ years of experience and a strong background in web development. When I’m not coding, I enjoy long walks on the beach. Let’s connect—I’d love to bring my expertise to your team!",
    skills:
    {
        proficientWith: ['javascript', 'react', 'java', 'github', 'tailwind', 'html5', 'css3', 'next', 'springboot', 'nodejs', 'mongodb', 'mysql'],
        exposedTo: ['RESTful APIs', 'ci/cd', 'redux', 'typescript']
    }
    ,
    hobbies: [
        {
            label: 'movies',
            emoji: '🎥'
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
    portfolio: [
        {
            title: "E-Commerce",
            // live: "https://paytonpierce.dev", 
            source: "https://github.com/ahamed001/Ecommerce-Client",
            image: mock1
        },
        {
            title: "Video Editor Web App",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/ahamed001/Reels-Maker-EFFE",
            image: mock2
        },
        {
            title: "AR/VR Website",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/ahamed001/EFFE-Furniture",
            image: mock3
        },
        {
            title: "Job Fair Website",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/ahamed001/JobFair-Form",
            image: mock4
        },
    ]
}