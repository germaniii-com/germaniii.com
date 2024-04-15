import styles from "./index.module.scss";

interface SectionHeaderProps {
  header: string;
  subHeader: string;
}

const SectionHeader = ({ header, subHeader }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <h1>{header}</h1>
      <h2>{subHeader}</h2>
    </div>
  );
};

export default SectionHeader;
