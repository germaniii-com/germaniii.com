import Link from "next/link";
import styles from "./index.module.scss";
import { BiSun } from "react-icons/bi";

const navigationButtons: string[] = ["Home", "Projects"];

const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <ul>
        {navigationButtons.map((button: string) => {
          return (
            <li key={button}>
              <Link key={button} href={`/${button.toLocaleLowerCase()}`}>
                {button}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.external}>
        <BiSun />
        <span>Blog</span>
      </div>
    </div>
  );
};

export default NavigationBar;
