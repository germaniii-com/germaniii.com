import Link from "next/link";
import { Contacts } from "../../Globals";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/home" className={styles.logo}>
        {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}
        <span>German III Felisarta</span>
      </Link>
      <ul
        className="flex flex-wrap items-center mb-6 \
                        text-sm font-medium text-black sm:mb-0 dark:text-white  \
                        sm:ml-5"
      >
        {Contacts.map((c) => (
          <li key={c.link}>
            <a href={c.link} target="_blank" rel="noopener noreferrer">
              {c.logo}
            </a>
          </li>
        ))}
      </ul>
      <span>
        © <Link href="/home">German III</Link>
        <div className={styles.allRights}> Felisarta. All Rights Reserved.</div>
      </span>
    </div>
  );
};

export default Footer;
