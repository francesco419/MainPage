import { useEffect, useRef } from "react";
import styles from "./FifthPage.module.css";
import { useOnScreen } from "../../hook/useOnScreen";
import { useDispatch } from "react-redux";
import { changeSide } from "../../redux/SideSlide";
import SideMenu from "./SideMenu";

export default function FifthPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(4));
      console.log(4);
    }
  }, [screen]);
  return (
    <div className={styles["fifth-page"]}>
      <SideMenu />
      <div className={styles["fifth-page-right"]} ref={ref}></div>
    </div>
  );
}
