import styles from "./index.module.scss";

import {
  BiLogoCPlusPlus,
  BiLogoJava,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoPhp,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoAndroid,
  BiLogoSass,
  BiLogoReact,
  BiLogoRedux,
  BiLogoSpringBoot,
  BiLogoGit,
  BiLogoDocker,
} from "react-icons/bi";

import {
  SiMysql,
  SiLinux,
  SiArduino,
  SiGnubash,
  SiLaravel,
  SiRedis,
  SiSqlite,
} from "react-icons/si";
import SectionHeader from "../SectionHeader";

const Skills = () => {
  return (
    <div className={styles.skillsWrapper}>
      <SectionHeader header="SKILLS" subHeader="What I can do" />
      <div className={styles.skillGrid}>
        <BiLogoCPlusPlus />
        <BiLogoJava />
        <BiLogoCss3 />
        <BiLogoHtml5 />
        <BiLogoPhp />
        <BiLogoJavascript />
        <BiLogoTypescript />
        <BiLogoAndroid />
        <BiLogoSass />
        <BiLogoReact />
        <BiLogoRedux />
        <BiLogoSpringBoot />
        <SiLaravel />
        <SiMysql />
        <SiRedis />
        <SiSqlite />
        <BiLogoGit />
        <BiLogoDocker />
        <SiLinux />
        <SiArduino />
        <SiGnubash />
      </div>
    </div>
  );
};

export default Skills;
