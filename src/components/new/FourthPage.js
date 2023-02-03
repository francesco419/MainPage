import { useEffect, useRef } from "react";
import styles from "./FourthPage.module.css";
import { useOnScreen } from "../../hook/useOnScreen";
import { useDispatch } from "react-redux";
import { changeSide } from "../../redux/SideSlide";
import SideMenu from "./SideMenu";

export default function FourthPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(3));
      console.log(3);
    }
  }, [screen]);
  return (
    <div className={styles["fourth-page"]}>
      <SideMenu />
      <div className={styles["fourth-page-right"]} ref={ref}></div>
    </div>
  );
}
