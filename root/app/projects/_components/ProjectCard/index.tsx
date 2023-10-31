import styles from "./index.module.scss";
import { DIRECTION } from "@/app/Globals";
import { ReactNode } from "react";

interface ProjectCardProps {
  title?: string;
  subTitle?: string;
  description?: string;
  direction?: DIRECTION;
  image?: ReactNode;
  tech?: ReactNode;
}

const ProjectCard = ({
  title = "",
  subTitle = "",
  description = "",
  direction = DIRECTION.FLOAT_LEFT,
  image = <></>,
  tech = <></>,
}: ProjectCardProps) => {
  const projectCardStyle =
    direction == DIRECTION.FLOAT_LEFT
      ? styles.floatLeft
      : direction == DIRECTION.FLOAT_RIGHT
      ? styles.floatRight
      : styles.floatCenter;

  return (
    <button className={styles.projectCardWrapper}>
      <div className={projectCardStyle}>
        <div className={styles.textWrapper}>
          <span>
            {title}
            <span>{subTitle}</span>
          </span>
          <p>{description}</p>
          <div className={styles.techWrapper}>{tech}</div>
        </div>
        {image}
      </div>
    </button>
  );
};

export default ProjectCard;
