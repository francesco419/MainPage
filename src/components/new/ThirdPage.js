import { useEffect, useRef } from "react";
import styles from "./ThirdPage.module.css";
import { useOnScreen } from "../../hook/useOnScreen";
import { useDispatch } from "react-redux";
import { changeSide } from "../../redux/SideSlide";
import SideMenu from "./SideMenu";
import { skillText } from "./text";
import { ProjectDetailText } from "../../context/ProjectText.js";
import { useNavigate } from "react-router-dom";

export default function ThirdPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(2));
    }
  }, [screen]);

  return (
    <div id="third" className={styles["third-page"]}>
      <SideMenu />
      <div className={styles["third-page-right"]}>
        <div className={styles["third-right-box"]}>
          <div className={styles["third-right-title"]} ref={ref}>
            <div>
              <h2>{`<PROJECT/>`}</h2>
            </div>
          </div>
          <div className={styles["third-right-section"]} ref={ref}>
            {ProjectDetailText.map((data, index) => {
              if (index < 4) {
                return <Project props={data} index={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Project({ props, index }) {
  const nav = useNavigate();
  return (
    <div
      className={styles["third-section-block"]}
      onClick={() => {
        nav(`/ProjectNav/${index}`);
      }}
    >
      <dl>
        <dt>
          <h1>{props.id}</h1>
          <h2>{props.name}</h2>
        </dt>
        <hr />
        <dd>
          <p>{props.intro}</p>
        </dd>
      </dl>
    </div>
  );
}

{
  /* <ul className={styles["third-section-book"]}>
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
</ul> */
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
        <div style={{ margin: arr.length <= 2 ? "30% 0" : "15% 0" }}>
          {arr.map((data) => (
            <Parah text={data.text} svg={data.svg} />
          ))}
        </div>
      </li>
    </ol>
  );
}
