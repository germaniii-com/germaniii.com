"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  label?: string;
}

const NavButton = ({ label = "" }: NavButtonProps) => {
  const pathName = usePathname().replace("/", "");
  const selectedClass =
    pathName === label.toLowerCase() ? styles.selected : styles.normal;

  return (
    <li key={label} className={`${styles.listStyle}`}>
      <Link
        key={label}
        href={`/${label.toLowerCase()}`}
        className={selectedClass}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavButton;
