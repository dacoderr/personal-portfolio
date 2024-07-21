import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project10 from "../assets/projects/project-10.jpg";

export const HERO_CONTENT = `I am a dedicated Computer Science student with a passion for web development and cyber security. With hands-on experience in various programming languages and tools, I have developed a strong foundation in creating efficient and secure web applications. My goal is to leverage my skills and knowledge to deliver innovative solutions that enhance user experiences and contribute to organizational success.`;

export const ABOUT_TEXT = `I am Bilal Sajid, a Computer Science major at the University of Wollongong, Dubai, with a GPA of 3.7, expected to graduate in July 2025.\n 

I have experience as a Web Developer and Cyber Security Intern and have worked on various projects.\n 

I thrive in collaborative environments, enjoy solving complex problems, and am committed to continuous learning and development. Outside of my academic and professional pursuits, I enjoy exploring new technologies and participating in CTFs.`;

export const EXPERIENCES = [
  {
    year: "24' April - Present",
    role: "Web Developer",
    company: "UOWD TechClub",
    description: `Developed and maintained dynamic websites for the UOWD TechClub, enhancing user experience through responsive design and innovative features.`,
    technologies: ["React", "Node.js", "Figma","mongoDB"],
  },
  {
    year: "24' July - 24' August ",
    role: "Cyber Security Intern",
    company: "RedTeam Hacker",
    description: `Assisted in identifying and mitigating security vulnerabilities, performed penetration testing, and contributed to strengthening the organization's cybersecurity posture.`,
    technologies: ["Kali Linux", "Pentesting"],
  },
  /* {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  }, */
];

export const PROJECTS = [
  {
    title: "TechClub website",
    image: project2,
    description:
      "A fully functional club website with features such as upcoming events, event registration and club info.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Hotel Management system",
    image: project1,
    description:
      "HMS is designed using an object-oriented approach in C++, utilizing classes to represent key entities within the backend system of a hotel.",
    technologies: ["C++","OOP"],
  },
  {
    title: "Portfolio Website",
    image: project10,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailWind", "Vercel"],
  },
  /* {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  }, */
];

export const CONTACT = {
  address: "University Of Wollongong, Dubai Internet City, Dubai, UAE",
  phoneNo: "+971504288172",
  email: "bilalsxj@gmail.com",
};
