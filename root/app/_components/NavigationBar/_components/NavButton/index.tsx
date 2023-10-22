"use client";

import styles from "./index.module.scss";
import { usePathname, useRouter } from "next/navigation";

interface NavButtonProps {
  label?: string;
}

const NavButton = ({ label = "" }: NavButtonProps) => {
  const router = useRouter();
  const pathName = usePathname().replace("/", "");
  const selectedClass =
    pathName === label.toLowerCase() ? `${styles.selected}` : "";

  const handleClick = () => {
    label.toLowerCase() === "resumé"
      ? downloadResume()
      : router.replace(`/${label.toLowerCase()}`);
  };

  const downloadResume = () => {
    const pdfUrl = "GermanEFelisartaIII_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "GermanIIIFelisarta.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <li key={label} className={`${styles.listStyle}`}>
      <button key={label} className={selectedClass} onClick={handleClick}>
        {label}
      </button>
    </li>
  );
};

export default NavButton;
