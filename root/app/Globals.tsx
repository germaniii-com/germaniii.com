import {
  SiAndroid,
  SiCplusplus,
  SiNextdotjs,
  SiSass,
  SiSqlite,
  SiStrapi,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export enum DIRECTION {
  FLOAT_LEFT = 0,
  FLOAT_RIGHT = 1,
  FLOAT_CENTER = 2,
}

export const Projects = [
  {
    title: "B.A.I.",
    subTitle: "Beyond Automated Interaction",
    description:
      "An Artificial Intelligence Assistant that can be accessed via the BAI web application.",
    direction: DIRECTION.FLOAT_LEFT,
    image: <img src={"/Project_EMA.png"} alt="" />,
    tech: (
      <>
        <SiVite />
        <SiTailwindcss />
        <SiStrapi />
      </>
    ),
  },
  {
    title: "E.M.A",
    subTitle: "Emergency Messaging Application",
    description:
      "Thesis project that uses arduino modules in order to communicate between smartphones.",
    direction: DIRECTION.FLOAT_RIGHT,
    image: <img src={"/Project_EMA.png"} alt="" />,
    tech: (
      <>
        <SiAndroid />
        <SiCplusplus />
        <SiSqlite />
      </>
    ),
  },
  {
    title: "C.H.I.K.A.",
    subTitle: "Connect, Hangout, Interact, Kommunicate, Always",
    description: "A real-time messaging web application for communication.",
    direction: DIRECTION.FLOAT_LEFT,
    image: <img src={"/Project_EMA.png"} alt="" />,
    tech: (
      <>
        <SiNextdotjs />
        <SiSass />
      </>
    ),
  },
];

export default Projects;
