import React, { ReactNode } from "react";
import { DIRECTION } from "@/app/Globals";
import styles from "./index.module.scss";

interface ProjectCardProps {
  title?: string;
  subTitle?: string;
  description?: string;
  direction?: DIRECTION;
  image?: ReactNode;
}

const ProjectCard = ({
  title = "",
  subTitle = "",
  description = "",
  direction = DIRECTION.FLOAT_LEFT,
  image = <></>,
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
        <span>
          {title}
          <span>{subTitle}</span>
        </span>
        <p>{description}</p>
        {image}
      </div>
    </button>
  );
};

export default ProjectCard;
