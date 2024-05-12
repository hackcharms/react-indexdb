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
import { mobile, backend, creator, web } from "../assets";
export * from "./experiences";
export * from "./technologies";
export * from "./projects";

export const navLinks = [
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#works",
    label: "Experience",
  },
  {
    path: "#technologies",
    label: "Tech Stacks",
  },
  {
    path: "#project",
    label: "Projects",
  },
  {
    path: "#social-links",
    label: "Contacts",
  },
];

export const services = [
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

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

