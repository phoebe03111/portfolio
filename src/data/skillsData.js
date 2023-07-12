import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";
import { DiNodejs, DiGit } from "react-icons/di";

const skillsData = [
  {
    id: "react",
    name: "React.js",
    logo: <FaReact size={50} />,
  },
  {
    id: "next",
    name: "Next.js",
    logo: <SiNextdotjs size={45} />,
  },
  {
    id: "redux",
    name: "Redux",
    logo: <SiRedux size={42} />,
  },
  {
    id: "javascript",
    name: "Javascript",
    logo: <SiJavascript size={45} />,
  },
  {
    id: "typescript",
    name: "Typescript",
    logo: <SiTypescript size={45} />,
  },
  {
    id: "html5",
    name: "HTML5",
    logo: <FaHtml5 size={50} />,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    logo: <SiTailwindcss size={50} />,
  },
  {
    id: "css3",
    name: "CSS3",
    logo: <FaCss3Alt size={50} />,
  },
  {
    id: "sass",
    name: "Sass",
    logo: <FaSass size={50} />,
  },
  {
    id: "node",
    name: "Node.js",
    logo: <DiNodejs size={50} />,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: <SiMongodb size={50} />,
  },
  {
    id: "firebase",
    name: "Firebase",
    logo: <SiFirebase size={50} />,
  },
  {
    id: "git",
    name: "Git",
    logo: <DiGit size={50} />,
  },
];

export default skillsData;
