import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";
import TopProjects from "./_components/TopProjects";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <AboutMe />
      <TopProjects />
      <Skills />
      <h1>Hello, this website is still in development.</h1>
    </main>
  );
};

export default Home;
