import AboutMe from "./_components/AboutMe";
import TopProjects from "./_components/TopProjects";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <AboutMe />
      <TopProjects />
      <h1>
        Hello, this website is still in development. Please check back later.
      </h1>
    </main>
  );
};

export default Home;
