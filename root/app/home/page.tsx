import AboutMe from "./_components/AboutMe";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <AboutMe />
      <h1>
        Hello, this website is still in development. Please check back later.
      </h1>
    </main>
  );
};

export default Home;
