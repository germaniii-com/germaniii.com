"use client";

import styles from "./index.module.scss";
import { Contacts } from "../../../../../Globals";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ContactMeButton = () => {
  return (
    <div className={`${styles.iconButton}`}>
      <button>
        Contact me
        <MdOutlineKeyboardArrowRight />
      </button>
      <div className={styles.iconContainer}>
        {Contacts.map((c) => (
          <a
            key={c.link}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.logo}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMeButton;
