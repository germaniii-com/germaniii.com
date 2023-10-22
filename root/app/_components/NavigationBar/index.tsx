import styles from "./index.module.scss";
import { BiSun } from "react-icons/bi";
import NavButton from "./_components/NavButton";

const navigationButtons: string[] = ["Home", "Projects"];

const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <ul>
        {navigationButtons.map((button: string) => (
          <NavButton key={button} label={button} />
        ))}
      </ul>
      <div className={styles.external}>
        <BiSun />
        <span>Blog</span>
      </div>
    </div>
  );
};

export default NavigationBar;
