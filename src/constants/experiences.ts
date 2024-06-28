import { credilio, tcw } from "../assets";

export const experiences = [
  {
    title: "Software Engineer (Frontend)",
    company_name: "Credilio Financial Technologies",
    icon: credilio,
    url:'https://credilio.in',
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
    url:'https://thecodeworks.com',
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
