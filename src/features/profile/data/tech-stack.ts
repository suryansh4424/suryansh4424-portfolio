import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Programming Languages
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
    icon: "https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png",
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language"],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_V7KaWjxvWYcyE1QKL9I0ciGCvCLsXy6JmrMSSSmr-7-FfNJSQeRv551gCqABBUvP44&usqp=CAU",
  },
  {
    key: "solidity",
    title: "Solidity",
    href: "https://soliditylang.org/",
    categories: ["Language"],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9tVkV6_7TzWUnn5MlA7argBDv7GircP4fSkEyGyNkrrOtSXSxsVeeLrbwDfhCTMgR2A&usqp=CAU",
  },

  // Web Technologies
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Framework"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime"],
  },

  // Styling & UI
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["CSS Framework"],
  },

  // Databases
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmT8HtltidnDUJvGcRYzg8B9h8zM-2O-FZw&s",
  },

  // Cloud & DevOps
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnqz2r7rvGewHEjy7MzJvVJco5u7xxaCIyA&s",
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["DevOps"],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoff4JxKTLqkEA24ATv83uY8W3CySqkc0PA&s",
  },

  // Tools & Others
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["API Testing"],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWljheH88qcaUyOBSYs7uILchXcKdZosvLg&s",
  },

  // Version Control
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
];
