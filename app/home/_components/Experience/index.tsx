import SectionHeader from "../SectionHeader";
import ExperienceBox from "./_components/ExperienceBox";
import styles from "./index.module.scss";

const expDat = [
  {
    date: "June 2023 - Present",
    company: "Bluewind Asia Corporation",
    role: "Software Engineer",
    description:
      "Build web applications using NextJS, Sass, Typescript, Laravel, PHP, MySQL, while working in containerized environments like Docker.",
  },
  {
    date: "June 2022 - June 2023",
    company: "Lexmark Research and Development Corp",
    role: "Firmware Engineer",
    description:
      "Build GUI for printers using Java and C++, using emulation tools like QEMU in a Linux environment.",
  },
  {
    date: "March 2022 - June 2022",
    company: "Accenture, Inc.",
    role: "Salesforce Developer Intern",
    description: "Built applications on the Salesforce Platform.",
  },
];

const Experience = () => {
  return (
    <div className={styles.experienceWrapper}>
      <SectionHeader header="EXPERIENCE" subHeader="My professional history" />
      {expDat.map((exp) => {
        return (
          <ExperienceBox
            key={exp.date}
            date={exp.date}
            company={exp.company}
            role={exp.role}
            description={exp.description}
          />
        );
      })}
    </div>
  );
};

export default Experience;
