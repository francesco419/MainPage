import styles from "./SideMenu.module.css";
import Indicator from "./Indicator";

export default function SideMenu() {
  return (
    <div className={styles["left"]}>
      <div className={styles["left-top"]}></div>
      <Indicator type={false} />
    </div>
  );
}
