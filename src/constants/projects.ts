import { askMe, tripguide, vue3Toaster } from "../assets";

export const projects = [
  {
    name: "Vue3 Toaster",
    description:
      "Revolutionize your Vue.js 3 development with vue3-toaster, a lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements. Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements. Easy-to-use composables and plugins for effortless integration.",
    tags: [
      {
        name: "vue3",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "notification",
        color: "pink-text-gradient",
      },
    ],
    image: vue3Toaster,
    source_code_link: "https://github.com/hackcharms/vue3-toaster",
  },
  {
    name: "Ask Me",
    description:
      "Stack Overflow like Application where you can raise Questions, Update it and mark the best answer and reply on other's Questions as well.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: askMe,
    source_code_link: "https://github.com/hackcharms/askme",
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
