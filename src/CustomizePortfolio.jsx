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
import NodeJS from "./assets/NodeJS";
import ExpressJS from "./assets/ExpressJS";
import MongoDB from "./assets/MongoDB";
import Ansible from "./assets/Ansible";
import Jenkins from "./assets/Jenkins";

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
  {
    name: "MongoDB",
    icon: <MongoDB />,
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
  {
    name: "Node.js",
    icon: <NodeJS />,
    category: "Technologies Web"
  },
  {
    name: "Express.js",
    icon: <ExpressJS />,
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
  {
    name: "Jenkins",
    icon: <Jenkins />,
    category: "Outils de Collaboration"
  },
  {
    name: "Ansible",
    icon: <Ansible />,
    category: "Outils de Collaboration"
  },
];

// Your Projects
export const projects = [
  {
    title: "WattuneedMaroc.com",
    description:
      "Creation and deployment of a professional website for a clean energy company using Laravel. Full-stack development project built from scratch during an internship, featuring server deployment, hosting, and AI chatbot integration.",
    year: "2025",
    technologies: "Laravel Blade, PostgreSQL, ReactJS, TailwindCSS, Docker, Jira, Git, Jenkins",
    image: "./wattuneed.png",
    demoLink: "https://wattuneedmaroc.com",
    //githubLink: "https://github.com/anelissao/Fil-rouge-porject",
  },
  {
    title: "Futbin Scrapped Data",
    description:
      "Futbin Ultimate Team is a web app that lets users explore and manage a custom football team using player data scraped from Futbin.",
    year: "2025",
    technologies: "HTML, CSS, JavaScript, Node.js/Express, Python, BeautifulSoup, SQL, Numpy, Spider",
    image: "./FUTBIN.png",
    demoLink: "https://futbin-scrapped-data.vercel.app/index.html",
    githubLink: "https://github.com/anelissao/Youcode-Futbin-Ultimate-Team-/tree/main",
  },
  {
    title: "Push_Swap",
    description:
      "push_swap is a C program that sorts a stack of integers using only system calls and a limited set of stack operations, aiming to minimize the number of instructions. It includes a checker tool to validate the sorting logic.",
    year: "2022",
    technologies: "C",
    image: "./push_swap.gif",
    githubLink: "https://github.com/anelissao/ft_push_swap",
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
  resumeUrl: "AnouarCVfr.pdf",
  aboutTitle: "I am a Full Stack Web Developer based in Morocco",
  aboutMe:
    "Hi there! I'm a 25-year-old Full Stack developer from Morocco, studying IT. <br /> I pay close attention to details and always try to deliver the best results. Solving problems excites me, and I'm always motivated to learn new things. <br /> When I'm not coding, I enjoy playing chess, lestening to music, and catching up on tech updates. <br /> Feel free to reach out if you'd like to collaborate on something great!",
};

export const formspreeEndpoint = "xjkwgpgr";
