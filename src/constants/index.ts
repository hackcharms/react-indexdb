import { PriorityColor, TaskPriority } from "../enums";
export const PRIORITY_LIST: {
  id: TaskPriority;
  name: string;
  color: string;
}[] = [
  {
    id: TaskPriority.LOW,
    color: PriorityColor.LOW,
    name: "Low",
  },
  {
    id: TaskPriority.MEDIUM,
    color: PriorityColor.MEDIUM,
    name: "Medium",
  },
  {
    id: TaskPriority.HIGH,
    color: PriorityColor.HIGH,
    name: "High",
  },
  {
    id: TaskPriority.URGENT,
    color: PriorityColor.URGENT,
    name: "Urgent",
  },
];
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  tcw,
  credilio,
  carrent,
  jobit,
  tripguide,
  threejs,
  vuejs,
  nuxtjs,
  pinia,
  vuetify,
  laravel,
  mysql,
} from "../assets";

export const navLinks = [
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#experience",
    label: "Experience",
  },
  {
    path: "#technologies",
    label: "Tech Stacks",
  },
  {
    path: "#work",
    label: "Work",
  },
  {
    path: "#contact",
    label: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Vuejs Developer",
    icon: mobile,
  },
  {
    title: "Full stack developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Nuxt JS",
    icon: nuxtjs,
  },
  {
    name: "Pinia",
    icon: pinia,
  },
  {
    name: "Vuetify",
    icon: vuetify,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (Frontend)",
    company_name: "Credilio Financial Technologies",
    icon: credilio,
    iconBg: "#c491ef",
    date: "Dec 2022 - Present",
    points: [
      "Refactored and modularized the project structure using composable components and other approaches to improve accessibility and maintainability.",
      "Optimized page load times by leveraging a deep understanding of lifecycle hooks, rendering, asynchronous components, virtual scrolling, debouncing, throttles, etc.",
      "Implemented the access based on roles and policy to restrict unauthorized access.",
      "Dynamic theme support to adopt and blend with partner platforms and multiple native supports like image, text sharing, clipboard, etc.",
      "Assisted the partners integration of our web page in their application and led a group of 3-4 developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "TheCodeWork",
    icon: tcw,
    iconBg: "#c491ef",
    date: "May 2021 - Nov 2022",
    points: [
      "Developing and maintaining web applications using Larvel, Vuejs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
