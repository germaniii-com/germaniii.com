import ContactMeButton from "./_components/ContactMeButton";
import styles from "./index.module.scss";
import Image from "next/image";

const AboutMe = () => (
  <div className={styles.aboutMe}>
    <Image
      src="/germaniii.png"
      alt="German III's photo"
      width={300}
      height={300}
    />
    <div className={styles.textWrapper}>
      <h2>Hi,</h2>
      <span>
        {"I'm "}
        <span className={styles.spanBig}>German III</span>
      </span>
      <div className={styles.description}>
        <span>
          Bachelor of Science in Computer Engineering
          <br />
          Software Engineer
          <br />
          Technology Enthusiast
          <br />
          <ContactMeButton />
        </span>
      </div>
    </div>
  </div>
);

export default AboutMe;
