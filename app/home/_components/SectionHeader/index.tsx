import "./index.scss";

interface SectionHeaderProps {
  header: string;
  subHeader: string;
}

const SectionHeader = ({ header, subHeader }: SectionHeaderProps) => {
  return (
    <>
      <h1>{header}</h1>
      <h2>{subHeader}</h2>
    </>
  );
};

export default SectionHeader;
