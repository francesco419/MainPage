import styles from "./List.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function () {
  const [showProject, setShowProject] = useState(false);
  const nav = useNavigate();
  const moveBackground = (e) => {
    const doc = document.getElementById("movepoint");
    doc.style.height = `${e.target.offsetHeight + 10}px`;
    doc.style.width = `${e.target.offsetWidth + 10}px`;
    doc.style.left = `${e.target.offsetLeft - 5}px`;
  };
  return (
    <div className={styles["list-page"]}>
      <button
        className={styles["list-page-back"]}
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
          <Link to={`/MainPage`} state={1}>
            ABOUT ME
          </Link>
          <button
            onClick={() => {
              setShowProject((showProject) => !showProject);
            }}
          >
            PROJECT
          </button>
          {showProject && (
            <ul className={styles["list-project"]}>
              <li id="movepoint"></li>
              <li onMouseOver={(e) => moveBackground(e)}>
                <Link to={`/MainPage`} state={2}>
                  Main
                </Link>
              </li>
              <li onMouseOver={(e) => moveBackground(e)}>
                <Link to={`/ProjectNav/0`}>Portfolio</Link>
              </li>
              <li onMouseOver={(e) => moveBackground(e)}>
                <Link to={`/ProjectNav/1`}>Youtube</Link>
              </li>
              <li onMouseOver={(e) => moveBackground(e)}>
                <Link to={`/ProjectNav/2`}>Travel</Link>
              </li>
              <li onMouseOver={(e) => moveBackground(e)}>
                <Link to={`/ProjectNav/3`}>SNS</Link>
              </li>
            </ul>
          )}
          <Link to={`/MainPage`} state={3}>
            CONTACT
          </Link>
          <span></span>
        </div>
        <div className={styles["list-front"]}>FRONTEND</div>
      </div>
    </div>
  );
}
