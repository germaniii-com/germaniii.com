import SectionHeader from "../SectionHeader";
import styles from "./index.module.scss";
import Image from "next/image";

const TopProjects = () => {
  return (
    <div className={styles.topProjectsWrapper}>
      <SectionHeader header={"PROJECTS"} subHeader={"What I have made"} />
      <div className={styles.textWrapper}>In Progress...</div>
    </div>
  );
};

export default TopProjects;
