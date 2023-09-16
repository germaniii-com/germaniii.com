import styles from "./index.module.scss";
import Image from "next/image";

const AboutMe = () => (
  <div className={styles.aboutMeWrapper}>
    <div className={styles.imageWrapper}>
      <Image
        src="/germaniii.png"
        alt="German III's photo"
        width={300}
        height={300}
      />
    </div>
    <div className={styles.textWrapper}>
      <h2>Hi,</h2>
      <h1>
        I&apos;m <b>German III</b>
      </h1>
      <p>
        Bachelor of Science in Computer Engineering
        <br />
        Software Engineer
        <br />
        Technology Enthusiast
      </p>
    </div>
  </div>
);

export default AboutMe;
