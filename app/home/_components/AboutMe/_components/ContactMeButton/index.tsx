"use client";

import styles from "./index.module.scss";
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ContactMeButton = () => {
  return (
    <div className={`${styles.iconButton}`}>
      <button>
        Contact me
        <MdOutlineKeyboardArrowRight />
      </button>
      <div className={styles.iconContainer}>
        <a
          href="mailto:germaniiifelisarta@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGmail />
        </a>
        <a
          href="https://github.com/germaniii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGithub />
        </a>
        <a
          href="https://instagram.com/germaniiifelisarta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/german-iii-felisarta-648b9420b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoLinkedin />
        </a>
        <a
          href="https://www.youtube.com/channel/UCLdx8-LN-JAnrExazmhjmDA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoYoutube />
        </a>
      </div>
    </div>
  );
};

export default ContactMeButton;
