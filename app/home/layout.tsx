import styles from "./index.module.scss";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.homeLayout}>{children}</main>;
};

export default HomeLayout;
