import styles from "./List.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function () {
  const nav = useNavigate();
  return (
    <div className={styles["list-page"]}>
      <button
        onClick={() => {
          const doc = document.getElementById("line");
          doc.style.display = "inline";
          setTimeout(() => {
            doc.style.display = "none";
            nav(`/MainPage`);
          }, 1500);
        }}
      >{`<`}</button>
      <span id="line" className={styles["list-line"]}></span>
      <div className={styles["list-box"]}>
        <div className={styles["list-menu"]}>
          <Link to={`/MainPage`}>HOME</Link>
          <Link to={`/MainPage`}>ABOUT ME</Link>
          <Link to={`/MainPage`}>PROJECT</Link>
          <Link to={`/MainPage`}>CONTACT</Link>
          <span></span>
        </div>
        <div className={styles["list-front"]}>FRONTEND</div>
      </div>
    </div>
  );
}
