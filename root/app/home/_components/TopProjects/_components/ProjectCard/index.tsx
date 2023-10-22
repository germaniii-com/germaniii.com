import { DIRECTION } from "../..";
import styles from "./index.module.scss";
import { BiSolidWrench } from "react-icons/bi";

interface ProjectCardProps {
  title?: string;
  subTitle?: string;
  description?: string;
  direction?: DIRECTION;
}

const ProjectCard = ({
  title = "",
  subTitle = "",
  description = "",
  direction = DIRECTION.FLOAT_LEFT,
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
        <BiSolidWrench />
      </div>
    </button>
  );
};

export default ProjectCard;
