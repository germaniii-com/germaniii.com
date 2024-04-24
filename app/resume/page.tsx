import styles from "./index.module.scss";

const Resume = () => {
  return (
    <iframe className={styles.pdfViewer} src="GermanEFelisartaIII_Resume.pdf" width={'100%'} height={'100%'} />
  )
}

export default Resume
