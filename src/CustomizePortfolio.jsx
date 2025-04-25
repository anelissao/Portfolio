import Bootstrap from "./assets/Bootstrap";
import Git from "./assets/Git";
import JavaScript from "./assets/JavaScript";
import TypeScript from "./assets/TypeScript";
import PHP from "./assets/PHP";
import Python from "./assets/Python";
import C from "./assets/C";
import Golang from "./assets/Golang";
import Bash from "./assets/Bash";
import SQL from "./assets/SQL";
import PostgreSQL from "./assets/PostgreSQL";
import Laravel from "./assets/Laravel";
import React from "./assets/React";
import HTML from "./assets/HTML";
import CSS from "./assets/CSS";
import TailwindCSS from "./assets/TailwindCSS";
import Figma from "./assets/Figma";
import Linux from "./assets/Linux";
import MacOS from "./assets/MacOS";
import Windows from "./assets/Windows";
import Docker from "./assets/Docker";
import VirtualBox from "./assets/VirtualBox";
import UML from "./assets/UML";
import Github from "./assets/Github";
import Jira from "./assets/Jira";

// Your Skills
export const skills = [
  // Languages de Programmation
  {
    name: "C",
    icon: <C />,
    category: "Language de Programmation"
  },
  {
    name: "Golang",
    icon: <Golang />,
    category: "Language de Programmation"
  },
  {
    name: "JavaScript",
    icon: <JavaScript />,
    category: "Language de Programmation"
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
    category: "Language de Programmation"
  },
  {
    name: "Python",
    icon: <Python />,
    category: "Language de Programmation"
  },
  {
    name: "PHP",
    icon: <PHP />,
    category: "Language de Programmation"
  },
  {
    name: "Bash",
    icon: <Bash />,
    category: "Language de Programmation"
  },
  {
    name: "SQL",
    icon: <SQL />,
    category: "Language de Programmation"
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL />,
    category: "Language de Programmation"
  },
  
  // Technologies Web
  {
    name: "Laravel",
    icon: <Laravel />,
    category: "Technologies Web"
  },
  {
    name: "React",
    icon: <React />,
    category: "Technologies Web"
  },
  {
    name: "HTML",
    icon: <HTML />,
    category: "Technologies Web"
  },
  {
    name: "CSS",
    icon: <CSS />,
    category: "Technologies Web"
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS />,
    category: "Technologies Web"
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap />,
    category: "Technologies Web"
  },
  {
    name: "Figma",
    icon: <Figma />,
    category: "Technologies Web"
  },
  
  // Virtualisation et Systèmes d'Exploitation
  {
    name: "Linux",
    icon: <Linux />,
    category: "Virtualisation et Systèmes d'Exploitation"
  },
  {
    name: "MacOS",
    icon: <MacOS />,
    category: "Virtualisation et Systèmes d'Exploitation"
  },
  {
    name: "Windows",
    icon: <Windows />,
    category: "Virtualisation et Systèmes d'Exploitation"
  },
  {
    name: "Docker",
    icon: <Docker />,
    category: "Virtualisation et Systèmes d'Exploitation"
  },
  {
    name: "VirtualBox",
    icon: <VirtualBox />,
    category: "Virtualisation et Systèmes d'Exploitation"
  },
  
  // Analyse et modélisation
  {
    name: "UML",
    icon: <UML />,
    category: "Analyse et modélisation"
  },
  
  // Outils de Collaboration
  {
    name: "Git",
    icon: <Git />,
    category: "Outils de Collaboration"
  },
  {
    name: "Github",
    icon: <Github size={18} />,
    category: "Outils de Collaboration"
  },
  {
    name: "Jira",
    icon: <Jira />,
    category: "Outils de Collaboration"
  },
];

// Your Projects
export const projects = [
  {
    title: "Nostalchive",
    description:
      "An online store for buying ready-made or custom movie and series collections on external hard drives.",
    year: "2025",
    technologies: "NextJs, Tailwind, TanStack",
    image: "./nostalchive.png",
    demoLink: "https://nostalchive.com",
    // githubLink: "https://github.com/amirmousav1/NEXTON-eCommerce",
  },
  {
    title: "MagnetMovie",
    description:
      "MagnetMovie is a powerful tool to search for your favorite movies and download their torrent files or copy magnet links to start downloading effortlessly.",
    year: "2024",
    technologies: "React, React Router, TanStack, Tailwind",
    image: "./magnetmovie.png",
    demoLink: "https://magnetmovie.netlify.app",
    githubLink: "https://github.com/amirmousav1/MagnetMovie",
  },
  {
    title: "TickBoard",
    description:
      "Tickboard is a sleek and intuitive to-do application designed to streamline task management. With features like priority-based sorting, real-time task updates, and local storage persistence, Tickboard empowers users to stay organized and productive effortlessly.",
    year: "2024",
    technologies: "React, Tailwind",
    image: "./tickboard.png",
    demoLink: "https://tickboard.netlify.app",
    githubLink: "https://github.com/amirmousav1/TickBoard",
  },
];

// Your Informations
export const myInformations = {
  fullName: "Anouar Elissaoui",
  myPhoto: "/Anouar.jpeg",
  bio: "A Full-Stack Web Developer Passionate About Creating Seamless User Experiences and Building Scalable Architectures Through the Power of Computer Science.",
  myEmail: "anouarelissaoui20@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/anouar-elissaoui-785752227/",
  githubUrl: "https://github.com/anelissao",
  telegramUrl: "https://t.me/shomabeguamir",
  resumeUrl:
    "https://drive.google.com/file/d/1GabP_oSU6CqOsPJ5J94rpT6I3Vd7fulQ/view?usp=sharing",
  aboutTitle: "I am a Full Stack Web Developer based in Morocco",
  aboutMe:
    "Hi there! I'm a 25-year-old Full Stack developer from Morocco, studying IT. <br /> I pay close attention to details and always try to deliver the best results. Solving problems excites me, and I'm always motivated to learn new things. <br /> When I'm not coding, I enjoy playing chess, lestening to music, and catching up on tech updates. <br /> Feel free to reach out if you'd like to collaborate on something great!",
};

export const formspreeEndpoint = "mzzbwlbg";
