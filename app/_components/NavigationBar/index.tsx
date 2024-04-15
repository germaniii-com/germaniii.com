import styles from "./index.module.scss";
import { BiDownload, BiSun } from "react-icons/bi";
import NavButton from "./_components/NavButton";

const navigationButtons: string[] = ["Home", "Projects", "Blog", "Resumé"];

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
