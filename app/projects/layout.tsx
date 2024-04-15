import styles from "./index.module.scss";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.projectsLayout}>{children}</main>;
};

export default ProjectsLayout;
