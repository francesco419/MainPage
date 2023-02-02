import styles from "./SideMenu.module.css";
import Indicator from "./Indicator";

export default function SideMenu() {
  return (
    <div className={styles["second-page-left"]}>
      <div className={styles["second-left-top"]}></div>
      <Indicator type={false} />
    </div>
  );
}
