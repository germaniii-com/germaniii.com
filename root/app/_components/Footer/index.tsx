import Link from "next/link";
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
        <span>German III</span>
      </Link>
      <ul
        className="flex flex-wrap items-center mb-6 \
                        text-sm font-medium text-black sm:mb-0 dark:text-white  \
                        sm:ml-5"
      >
        <li>
          <a
            href="https://blog.germaniii.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="mailto:germaniiifelisarta@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            G-mail
          </a>
        </li>
        <li>
          <a
            href="https://github.com/germaniii"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/germaniiifelisarta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/german-iii-felisarta-648b9420b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCLdx8-LN-JAnrExazmhjmDA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </li>
      </ul>
      <span>
        © 2023 <a href="/home">German III Felisarta</a>. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
