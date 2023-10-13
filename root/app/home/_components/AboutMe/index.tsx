import ContactMeButton from "../ContactMeButton";
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
      <span>
        I&apos;m <span className={styles.spanBig}>German III</span>
      </span>
      <div className={styles.pWrapper}>
        <p>
          Bachelor of Science in Computer Engineering
          <br />
          Software Engineer
          <br />
          Technology Enthusiast
          <br />
          <ContactMeButton />
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
