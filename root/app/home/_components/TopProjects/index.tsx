import { BiRightArrowAlt } from "react-icons/bi";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./_components/ProjectCard";
import styles from "./index.module.scss";
import Link from "next/link";
import { DIRECTION } from "@/app/Globals";
import { Projects as projects } from "@/app/Globals";

const TopProjects = () => {
  const projectsSlice = projects.slice(0, 3).map((project, index) => {
    if (index == 2)
      project = {
        ...project,
        direction: DIRECTION.FLOAT_RIGHT,
      };

    return project;
  });

  return (
    <div className={styles.topProjectsWrapper}>
      <SectionHeader header={"PROJECTS"} subHeader={"What I have made"} />
      <div className={styles.projectGrid}>
        <div className={styles.row}>
          <Link href={`${projectsSlice[0].link}`}>
            <ProjectCard
              title={projectsSlice[0].title}
              subTitle={projectsSlice[0].subTitle}
              description={projectsSlice[0].description}
              direction={projectsSlice[0].direction}
              image={projectsSlice[0].image}
            />
          </Link>
          <Link href={`${projectsSlice[1].link}`}>
            <ProjectCard
              title={projectsSlice[1].title}
              subTitle={projectsSlice[1].subTitle}
              description={projectsSlice[1].description}
              direction={projectsSlice[1].direction}
              image={projectsSlice[1].image}
            />
          </Link>
        </div>
        <div className={styles.row}>
          <Link href={`${projectsSlice[1].link}`}>
            <ProjectCard
              title={projectsSlice[2].title}
              subTitle={projectsSlice[2].subTitle}
              description={projectsSlice[2].description}
              direction={projectsSlice[2].direction}
              image={projectsSlice[2].image}
            />
          </Link>
          <Link href={"/projects"}>
            <p>See more projects </p>
            <BiRightArrowAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
