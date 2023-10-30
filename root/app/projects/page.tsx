import { ReactNode } from "react";
import ProjectCard from "./_components/ProjectCard";
import styles from "./index.module.scss";
import { DIRECTION, Projects as projects } from "../Globals";

interface ProjectCardProps {
  title?: string;
  subTitle?: string;
  description?: string;
  direction?: DIRECTION;
  image?: ReactNode;
}

const Projects = () => {
  return (
    <div className={styles.main}>
      <div className={styles.projectsLayout}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subTitle={project.subTitle}
            description={project.description}
            direction={project.direction}
            image={project.image}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
