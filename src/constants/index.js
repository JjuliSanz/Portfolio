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
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  angular,
  school,
  argprograma,
  argProgramaPortfolio,
  NftMarket,
  domainapp,
  ecommerceapp,
  pinatarealestate,
  bookingapp,
  solidity,
  ipfs,
  ethersjs,
  metamask,
  ethereum,
  hardhat,
  krypt,
  crowdfunding,
  nftcardgame,
  portfolio,
  web3Portfolio,
  valorantSelection,
  threadsProject,
  starWarsProject
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Ipfs",
    icon: ipfs,
  },
  {
    name: "Ethers.js",
    icon: ethersjs,
  },
  {
    name: "MetaMask",
    icon: metamask,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "HardHat",
    icon: hardhat,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "#YoProgramo",
    company_name: "Argentina Programa",
    icon: argprograma,
    iconBg: "#383E56",
    date: "October 2022 - May 2023",
    points: [
      "Comprehensive knowledge and skills to develop both the front-end and back-end components of a web application.",
      "Building interactive web applications using Angular, including front-end components, data management, and navigation.",
      "Writing TypeScript code and leveraging its features to improve code quality and maintainability.",
      "Developing server-side applications using Java and frameworks like Spring Boot, handling data persistence, and creating RESTful APIs.",
      "Testing APIs and performing different types of testing using Postman.",
      "Containerizing applications with Docker, enabling consistent deployment and scalability.",
    ],
  },
  {
    title: "React.js Course",
    company_name: "CoderHouse",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Solid understanding of React's core principles and be able to build dynamic and interactive web applications using React and its ecosystem of libraries and tools.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Javascript Course",
    company_name: "CoderHouse",
    icon: javascript,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Solid foundation in JavaScript programming, able to build dynamic and interactive web applications.",
      "Skills to work with DOM manipulation, asynchronous programming, web APIs, and modern JavaScript features.",
    ],
  },
  {
    title: "HTML & CSS Course",
    company_name: "CoderHouse",
    icon: html,
    iconBg: "#E6DEDD",
    date: "April 2022 - May 2022",
    points: [
      "Skills to create well-designed and responsive web pages.",
      "Understanding of the fundamentals of HTML and CSS, able to structure and style content, create layouts, and apply visual effects. ",
      "Knowledge about industry best practices and accessibility guidelines, enabling to develop high-quality websites that are user-friendly and accessible to all users.",
    ],
  },
  {
    title: "High School Grade",
    company_name: "E.E.S. N°17",
    icon: school,
    iconBg: "#E6DEDD",
    date: "March 2015 - November 2021",
    points: [
      "Skills to create well-designed and responsive web pages.",
      "Understanding of the fundamentals of HTML and CSS, able to structure and style content, create layouts, and apply visual effects. ",
      "Knowledge about industry best practices and accessibility guidelines, enabling to develop high-quality websites that are user-friendly and accessible to all users.",
    ],
  },
];

const projects = [
  // Valorant Selection
  {
    name: "Valorant Agent Selection Page",
    description:
      "This project is a dynamic web application built with Next.js, Tailwind CSS, and JavaScript, offering an immersive experience reminiscent of the agent selection process in the popular game Valorant. Users can explore a visually appealing interface where they can select agents, each with unique abilities, mimicking the game's agent selection feature.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: valorantSelection,
    source_code_link: "https://github.com/JjuliSanz/AgentSelector",
    web_url: "https://agent-selector.vercel.app/",
    backend_url: "",
  },
  // 3D Star Wars Movie Timeline
  {
    name: "Galactic Timeline",
    description:
      "Welcome to Galactic Timeline, an interactive experience that takes you through the nine iconic Star Wars movies. This project combines the immersive narrative of the saga with cutting-edge 3D modeling technology to provide you with a unique experience.",
    tags: [
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "ViteJS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
    ],
    image: starWarsProject,
    source_code_link: "https://github.com/JjuliSanz/StarWars3d/tree/main",
    web_url: "https://star-wars3d.vercel.app/",
    backend_url: "",
  },
  // Web3 Portfolio
  {
    name: "Web3 Portfolio",
    description:
      "Explore my Web3 portfolio, where I showcase a collection of innovative projects that harness the power of blockchain and decentralized technologies. From cutting-edge dApps to smart contracts and more, discover the future of the web through my work in the Web3 ecosystem.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "yellow-text-gradient",
      },
    ],
    image: web3Portfolio,
    source_code_link: "https://github.com/JjuliSanz/Web3Portfolio",
    web_url: "https://my-web3-portfolio.vercel.app/",
    backend_url: "",
  },
  // Booking App
  {
    name: "Full-Stack Booking Clone App",
    description:
      "In this project, we create a clone of the popular booking platform. The clone project utilizes modern technologies and frameworks to ensure a seamless user experience, efficient search functionality, and robust backend infrastructure to handle a large volume of data and user interactions. The project focuses on delivering a visually appealing and intuitive interface, along with reliable and accurate information for travelers to plan and book their trips with ease.",
    tags: [
      {
        name: "React-app",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: bookingapp,
    source_code_link: "https://github.com/JjuliSanz/Client-Booking-app",
    web_url: "https://buking-clone.netlify.app/",
    backend_url: "https://backend-booking-app.onrender.com/api/hotels",
  },
  // Threads App
  {
    name: "Threads-clone-app",
    description:
      "This is a dynamic web application that showcases a fusion of cutting-edge technologies to deliver a seamless user experience. Built with Next.js 13.4, the power of Server Side Rendering (SSR) ensures optimal performance and SEO friendliness. MongoDB efficiently handles complex data schemas, while TailwindCSS brings captivating layouts to life. Clerk handles authentication, UploadThing manages file uploads, and Shadcn components enhance UI interactivity. Real-time events are embraced through webhooks, and middleware/API actions ensure robust security and authorization. Next.js layout route groups organize navigation, Zod validates data, and react-hook-form manages forms efficiently",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "yellow-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
      {
        name: "Uploadthing",
        color: "orange-text-gradient",
      },
    ],
    image: threadsProject,
    source_code_link: "https://github.com/JjuliSanz/Threads-app",
    web_url: "https://threads-project-app.vercel.app/",
    backend_url: "",
  },
  // Angular Portfolio
  {
    name: "Full-Stack Angular Portfolio",
    description:
      "This is the completed project of Argentina Programa Course. A Full stack portfolio web of distributed architecture with a user interface design (front end) that displays my portfolio information, and SQL database that stores the aforementioned data, and must have the necessary APIs to provide the information over the internet (back end).",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "yellow-text-gradient",
      },
    ],
    image: argProgramaPortfolio,
    source_code_link: "https://github.com/JjuliSanz/FrontEnd-AP",
    web_url: "https://frontend-argprogram.web.app/",
    backend_url: "https://backend-ap-yky6.onrender.com",
  },
  // Web Development Portfolio
  {
    name: "Web Development Portfolio",
    description:
      "Welcome to my ThreeJS 3D Developer Portfolio project! This repository showcases how I've builded this impressive 3D website using the powerful combination of ThreeJS, React Three Fiber, TailwindCSS, and Framer Motion.",
    tags: [
      {
        name: "TailwindCss",
        color: "blue-text-gradient",
      },
      {
        name: "ViteJS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "orange-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/JjuliSanz/Portfolio",
    web_url: "https://my-portfoli-website.netlify.app/",
    backend_url: "",
  },
];

export { services, technologies, experiences, projects };
