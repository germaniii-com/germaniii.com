import styles from "./index.module.scss";

interface ExperienceBoxProps {
  date?: string;
  company?: string;
  role?: string;
  description?: string;
}

const ExperienceBox = ({
  date = "",
  company = "",
  description = "",
  role = "",
}: ExperienceBoxProps) => {
  return (
    <div className={styles.experienceBoxWrapper}>
      <span>{date}</span>
      <ul>
        <li>{company}</li>
        <li>{role}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default ExperienceBox;
