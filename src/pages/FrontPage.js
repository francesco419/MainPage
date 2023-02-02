import styles from "./FrontPage.module.css";
import Aos from "aos";
import { useEffect } from "react";
import sss from "../picture/resume_photo.jpg";
import FirstPage from "../components/new/FirstPage";
import SecondPage from "../components/new/SecondPage";
import Indicator from "../components/new/Indicator";

export default function FrontPage() {
  return (
    <div className={styles["page"]}>
      <Indicator type={true} />
      <FirstPage />
      <SecondPage />
      <div className={styles["box"]}>C</div>
      <div className={styles["box"]}>D</div>
      <div className={styles["box"]}>E</div>
      <div className={styles["box"]}>F</div>
      <div className={styles["box"]}>G</div>
    </div>
  );
}
