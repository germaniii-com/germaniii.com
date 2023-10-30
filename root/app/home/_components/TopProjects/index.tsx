import { BiRightArrowAlt } from "react-icons/bi";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./_components/ProjectCard";
import styles from "./index.module.scss";
import Link from "next/link";
import { DIRECTION } from "@/app/Globals";
import { Projects as projects } from "@/app/Globals";

const TopProjects = () => {
  const projectsSlice = projects.slice(0, 2);
  return (
    <div className={styles.topProjectsWrapper}>
      <SectionHeader header={"PROJECTS"} subHeader={"What I have made"} />
      <div className={styles.projectGrid}>
        <div className={styles.row}>
          <ProjectCard
            title={projects[0].title}
            subTitle={projects[0].subTitle}
            description={projects[0].description}
            direction={projects[0].direction}
            image={projects[0].image}
          />
          <ProjectCard
            title={projects[1].title}
            subTitle={projects[1].subTitle}
            description={projects[1].description}
            direction={projects[1].direction}
            image={projects[1].image}
          />
        </div>
        <div className={styles.row}>
          <ProjectCard
            title={projects[2].title}
            subTitle={projects[2].subTitle}
            description={projects[2].description}
            direction={projects[2].direction}
            image={projects[2].image}
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
