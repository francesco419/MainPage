import { useEffect, useRef } from "react";
import styles from "./ThirdPage.module.css";
import { useOnScreen } from "../../hook/useOnScreen";
import { useDispatch } from "react-redux";
import { changeSide } from "../../redux/SideSlide";
import SideMenu from "./SideMenu";

import { ReactComponent as JAVASCRIPT_SVG } from "../../picture/language/javascript.svg";
import { ReactComponent as CSSS_VG } from "../../picture/language/css.svg";
import { ReactComponent as HTML_SVG } from "../../picture/language/html.svg";
import { ReactComponent as TYPESCRIPT_SVG } from "../../picture/language/typescript.svg";
import { ReactComponent as NODEJS_SVG } from "../../picture/language/nodejs.svg";
import { ReactComponent as REACT_SVG } from "../../picture/language/react.svg";
import { ReactComponent as REDUX_SVG } from "../../picture/language/redux.svg";
import { ReactComponent as GIT_SVG } from "../../picture/language/figma.svg";
import { ReactComponent as FIGMA_SVG } from "../../picture/language/git.svg";
import { ReactComponent as SCSS_SVG } from "../../picture/language/scss.svg";

import { skillText } from "./text";

export default function ThirdPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(2));
    }
  }, [screen]);

  const moveBook = (classHead, classText) => {
    const doc = document.getElementById(classHead);
    const detail = document.getElementById(classText);
    if (doc.classList.contains(styles["aaa"])) {
      doc.classList.add(styles["bbb"]);
      detail.classList.add(styles["bbq"]);
      setTimeout(() => {
        doc.classList.remove(styles["aaa"]);
        detail.classList.remove(styles["aaq"]);
        doc.classList.remove(styles["bbb"]);
        detail.classList.remove(styles["bbq"]);
      }, 500);
    } else {
      doc.classList.add(styles["aaa"]);
      detail.classList.add(styles["aaq"]);
    }
  };

  return (
    <div className={styles["third-page"]}>
      <SideMenu />
      <div className={styles["third-page-right"]}>
        <div className={styles["third-right-box"]}>
          <div className={styles["third-right-section"]} ref={ref}>
            <ul className={styles["third-section-book"]}>
              <div className={styles["third-hidden"]}> a</div>
              <OrderedList
                bckColor={"#b9d6f2"}
                list={"list1"}
                detail={"detail1"}
                arr={[skillText[0], skillText[2], skillText[3]]}
                header={"Language"}
              />
              <OrderedList
                bckColor={"#061A40"}
                list={"list2"}
                detail={"detail2"}
                arr={[skillText[5], skillText[6]]}
                header={"Library"}
              />
              <OrderedList
                bckColor={"#0353A4"}
                list={"list3"}
                detail={"detail3"}
                arr={[skillText[1], skillText[9]]}
                header={"Style Sheet"}
              />
              <OrderedList
                bckColor={"#006DAA"}
                list={"list4"}
                detail={"detail4"}
                arr={[skillText[7], skillText[8]]}
                header={"Extra"}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Parah({ text, svg }) {
  return (
    <div className={styles["third-set"]}>
      <div>{svg}</div>
      <p className={styles["third-set-parah"]}>{text}</p>
    </div>
  );
}

function OrderedList({ bckColor, list, detail, arr, header }) {
  const moveBook = (classHead, classText) => {
    const doc = document.getElementById(classHead);
    const detail = document.getElementById(classText);
    if (classHead === "list1") {
      if (document.getElementById("list2").classList.contains(styles["aaa"])) {
        return;
      }

      document.getElementById("list2").classList.add(styles["aaa"]);
      document.getElementById("detail2").classList.add(styles["aaq"]);
      document.getElementById("list3").classList.add(styles["aaa"]);
      document.getElementById("detail3").classList.add(styles["aaq"]);
      document.getElementById("list4").classList.add(styles["aaa"]);
      document.getElementById("detail4").classList.add(styles["aaq"]);
      return;
    }

    if (classHead === "list2") {
      if (document.getElementById("list3").classList.contains(styles["aaa"])) {
        document.getElementById("list2").classList.add(styles["aaa"]);
        document.getElementById("detail2").classList.add(styles["aaq"]);
        return;
      }
      document.getElementById("list3").classList.add(styles["aaa"]);
      document.getElementById("detail3").classList.add(styles["aaq"]);
      document.getElementById("list4").classList.add(styles["aaa"]);
      document.getElementById("detail4").classList.add(styles["aaq"]);
      return;
    }
    if (doc.classList.contains(styles["aaa"])) {
      doc.classList.add(styles["bbb"]);
      detail.classList.add(styles["bbq"]);
      setTimeout(() => {
        doc.classList.remove(styles["aaa"]);
        detail.classList.remove(styles["aaq"]);
        doc.classList.remove(styles["bbb"]);
        detail.classList.remove(styles["bbq"]);
      }, 500);
    } else {
      doc.classList.add(styles["aaa"]);
      detail.classList.add(styles["aaq"]);
    }
  };

  return (
    <ol>
      <li
        id={list}
        style={{ backgroundColor: bckColor }}
        onClick={() => moveBook(list, detail)}
      >
        <p className={styles["third-book-header"]}>{header}</p>
      </li>
      <li id={detail} style={{ backgroundColor: bckColor }}>
        <div style={{ margin: arr.length <= 2 ? "40% 0" : "20% 0" }}>
          {arr.map((data) => (
            <Parah text={data.text} svg={data.svg} />
          ))}
        </div>
      </li>
    </ol>
  );
}
