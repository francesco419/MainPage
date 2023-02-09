import styles from "./SideMenu.module.css";
import Indicator from "./Indicator";
import photo from "../../../assets/image/resume_photo.jpg";

export default function SideMenu() {
  return (
    <div className={styles["c-sidemenu"]}>
      <div className={styles["c-sidemenu__container"]}>
        <img className={styles["c-sidemenu__img"]} src={photo} />
      </div>
      <Indicator type={false} />
    </div>
  );
}
