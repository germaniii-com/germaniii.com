import { BiRightArrowAlt } from "react-icons/bi";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./_components/ProjectCard";
import styles from "./index.module.scss";
import Link from "next/link";

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
          <Link href={"/projects"} replace={true}>
            <p>See more projects </p>
            <BiRightArrowAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
