import SectionHeader from "../SectionHeader";
import ProjectCard from "./_components/ProjectCard";
import styles from "./index.module.scss";
import Image from "next/image";

const TopProjects = () => {
  return (
    <div className={styles.topProjectsWrapper}>
      <SectionHeader header={"PROJECTS"} subHeader={"What I have made"} />
      <div className={styles.projectGrid}>
        <div className={styles.row}>
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className={styles.row}>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
