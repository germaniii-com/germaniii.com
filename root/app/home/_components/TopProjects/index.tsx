import { BiRightArrowAlt } from "react-icons/bi";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./_components/ProjectCard";
import styles from "./index.module.scss";
import Link from "next/link";

export enum DIRECTION {
  FLOAT_LEFT = 0,
  FLOAT_RIGHT = 1,
  FLOAT_CENTER = 2,
}

const TopProjects = () => {
  return (
    <div className={styles.topProjectsWrapper}>
      <SectionHeader header={"PROJECTS"} subHeader={"What I have made"} />
      <div className={styles.projectGrid}>
        <div className={styles.row}>
          <ProjectCard
            title="B.A.I."
            subTitle="Beyond Automated Interaction"
            description="An Artificial Intelligence Assistant that can be accessed via the BAI web application."
            direction={DIRECTION.FLOAT_LEFT}
          />
          <ProjectCard
            title="E.M.A."
            subTitle="Emergency Messaging Application"
            description="Thesis project that uses arduino modules in order to communicate between smartphones."
            direction={DIRECTION.FLOAT_RIGHT}
          />
        </div>
        <div className={styles.row}>
          <ProjectCard
            title="C.H.I.K.A."
            subTitle="Connect, Hangout, Interact, Kommunicate, Always"
            description="A real-time messaging web application for communication."
            direction={DIRECTION.FLOAT_CENTER}
          />
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
