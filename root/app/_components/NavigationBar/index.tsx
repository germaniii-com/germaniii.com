import styles from "./index.module.scss";
import { BiSun } from "react-icons/bi";
import NavButton from "./_components/NavButton";

const navigationButtons: string[] = ["Home", "Projects", "Blog"];

const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <ul>
        {navigationButtons.map((button: string) => (
          <NavButton key={button} label={button} />
        ))}
        <li className={styles.external}>
          <BiSun />
        </li>
      </ul>
      {/* <div className={styles.external}></div> */}
    </div>
  );
};

export default NavigationBar;
