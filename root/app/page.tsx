import { redirect } from "next/navigation";
import styles from "./index.module.scss";

const RootPage = async () => {
  redirect("/home");
  return <div className={styles.emptyBody}></div>;
};

export default RootPage;
