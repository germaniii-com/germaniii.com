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
        I&apos;m <span className={styles.spanBig}>German III</span>
      </span>
      <p>
        <span>
          Bachelor of Science in Computer Engineering
          <br />
          Software Engineer
          <br />
          Technology Enthusiast
          <br />
          <ContactMeButton />
        </span>
      </p>
    </div>
  </div>
);

export default AboutMe;
