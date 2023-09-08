"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";

const navigationButtons: string[] = ["Home", "Projects"];

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.nav}>
      <ul>
        {navigationButtons.map((button: string) => {
          const isCurrentPage =
            pathname.replace("/", "") === button.toLocaleLowerCase();
          return (
            <li key={button}>
              <Link
                key={button}
                href={`/${button.toLocaleLowerCase()}`}
                className={`${isCurrentPage ? styles.selected : ""} `}
              >
                {button}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.external}>
        <span>Blog</span>
      </div>
    </div>
  );
};

export default NavigationBar;
