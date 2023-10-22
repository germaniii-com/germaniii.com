import AboutMe from "./_components/AboutMe";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import TopProjects from "./_components/TopProjects";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.main}>
      <AboutMe />
      <TopProjects />
      <Skills />
      <Experience />
    </div>
  );
};

export default Home;
