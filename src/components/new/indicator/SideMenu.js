import styles from "./SideMenu.module.css";
import Indicator from "./Indicator";
import photo from "../../../assets/image/resume_photo.jpg";

export default function SideMenu() {
  return (
    <div className={styles["left"]}>
      <div className={styles["left-top"]}>
        <img src={photo} />
      </div>
      <Indicator type={false} />
    </div>
  );
}
