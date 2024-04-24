"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  label?: string;
}

const NavButton = ({ label = "" }: NavButtonProps) => {
  const pathName = usePathname().replace("/", "");
  const toPath = label.toLowerCase();
  const selectedClass = pathName === toPath ? `${styles.selected}` : "";
  const displayLabel = label === 'Resume' ? 'Resumé' : label

  return (
    <li key={label} className={`${styles.listStyle}`}>
      <Link href={toPath}>
        <button key={label} className={selectedClass}>
          {displayLabel}
        </button>
      </Link>
    </li>
  );
};

export default NavButton;
