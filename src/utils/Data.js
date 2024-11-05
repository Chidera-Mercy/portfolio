import { FaReact, FaJava, FaDatabase } from "react-icons/fa";
import { SiPython } from "react-icons/si";

import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'

export const Skills = [
    { id: 0, tech: 'React JS', icon: FaReact },
    { id: 3, tech: 'Database', icon: FaDatabase },
    { id: 4, tech: 'Python', icon: SiPython },
    { id: 5, tech: 'Java', icon: FaJava }
];

export const projectDetails = [
    {
        id: 0,
        project_name: "URL Shortener with Analytics",
        project_desc: "A full-stack URL shortener application that allows users to create custom short links, track link analytics and generate QR codes.",
        tech_stack : ['React', 'Tailwind CSS', 'Shadcn UI', 'Supabase'],
        project_img: Project1,
        project_url: 'https://github.com/Chidera-Mercy/cutzy',
        website: "https://cutzy.onrender.com/",
        reverse: false
    },
    {
        id: 1,
        project_name: "Where in the World?",
        project_desc: "A responsive React application that displays country data from the REST Countries API. Features include search and filtering options, dynamic routing for detailed country pages, and a light/dark mode toggle for enhanced user experience across devices.",
        tech_stack : ['React', 'REST Countries API'],
        project_img: Project2,
        project_url: 'https://github.com/Chidera-Mercy/rest-countries-api',
        website: "https://chidera-mercy.github.io/rest-countries-api/",
        reverse: true
    },
    {
        id: 2,
        project_name: "Neural Style Transfer Art Generator",
        project_desc: "Implemented a Flask web application that applies artistic styles to user-uploaded images using neural style transfer. Focused on image preprocessing for optimal results, allowing users to generate unique styled images while exploring the intersection of art and technology.",
        tech_stack : ['Flask', 'HTML', 'CSS', 'Python', 'TensorFlow'],
        project_img: Project3,
        project_url: 'https://github.com/Chidera-Mercy/similar-abstract-art',
        website: "",
        reverse: false
    },
    {
        id: 0,
        project_name: "Stock Analytics Dashboard",
        project_desc: "A Streamlit application that combines financial statement analysis with real-time stock price data and sentiment analysis from news articles. Utilized the Prophet library for forecasting and created interactive visualizations to aid investment decisions.",
        tech_stack : ['Streamlit', 'Python', 'FinBERT', 'BeautifulSoup'],
        project_img: Project4,
        project_url: 'https://github.com/Chidera-Mercy/stock-dashboard-and-sentiment-analysis',
        website: "",
        reverse: true
    }
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'My Contact',
        href: 'Contact'
    }
]