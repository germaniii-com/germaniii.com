import {
  BiDetail,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import {
  SiAndroid,
  SiAstro,
  SiCplusplus,
  SiGatsby,
  SiJavascript,
  SiLaravel,
  SiSass,
  SiSpring,
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
    link: "https://gitlab.com/germaniii.com/bai.germaniii.com",
    image: <img src={"/Project_BAI.png"} alt="" />,
    tech: (
      <>
        <SiVite />
        <SiJavascript />
        <SiSass />
        <SiLaravel />
      </>
    ),
  },
  {
    title: "E.M.A",
    subTitle: "Emergency Messaging Application",
    description:
      "Thesis project that uses arduino modules in order to communicate between smartphones.",
    direction: DIRECTION.FLOAT_RIGHT,
    link: "https://github.com/germaniii/EMA",
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
    title: "A.F.T.A.",
    subTitle: "Another Financial Tracking Application",
    description:
      "A financial web application that is used to manage leasing businesses.",
    direction: DIRECTION.FLOAT_LEFT,
    link: "https://gitlab.com/germaniii.com/afta.germaniii.com",
    image: <img src={"/Project_BLOG.png"} alt="" />,
    tech: (
      <>
        <SiVite />
        <SiJavascript />
        <SiSpring />
        <SiSass />
      </>
    ),
  },
  {
    title: "blog.germaniii.com",
    subTitle: "The German III Blog",
    description:
      "An informative blog about various topics like tech, life, and how-tos.",
    link: "https://gitlab.com/germaniii.com/blog.germaniii.com",
    direction: DIRECTION.FLOAT_RIGHT,
    image: <img src={"/Project_BLOG.png"} alt="" />,
    tech: (
      <>
        <SiAstro />
        <SiJavascript />
        <SiTailwindcss />
      </>
    ),
  },
];

export const Contacts = [
  {
    link: "mailto:germaniiifelisarta@gmail.com",
    logo: <BiLogoGmail />,
  },
  {
    link: "https://github.com/germaniii",
    logo: <BiLogoGithub />,
  },
  {
    link: "https://instagram.com/germaniiifelisarta",
    logo: <BiLogoInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/german-iii-felisarta-648b9420b",
    logo: <BiLogoLinkedin />,
  },
  {
    link: "https://www.youtube.com/channel/UCLdx8-LN-JAnrExazmhjmDA",
    logo: <BiLogoYoutube />,
  },
];

export const Footers = [
  {
    link: "https://blog.germaniii.com",
    logo: <BiDetail />,
  },
  {
    link: "mailto:germaniiifelisarta@gmail.com",
    logo: <BiLogoGmail />,
  },
  {
    link: "https://github.com/germaniii",
    logo: <BiLogoGithub />,
  },
  {
    link: "https://instagram.com/germaniiifelisarta",
    logo: <BiLogoInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/german-iii-felisarta-648b9420b",
    logo: <BiLogoLinkedin />,
  },
  {
    link: "https://www.youtube.com/channel/UCLdx8-LN-JAnrExazmhjmDA",
    logo: <BiLogoYoutube />,
  },
];

export default Projects;
