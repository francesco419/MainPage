import styles from "./Indicator.module.css";
import PropTypes from "prop-types";
import { ReactComponent as Home } from "../../../assets/image/sticksvg/home.svg";
import { ReactComponent as About } from "../../../assets/image/sticksvg/about.svg";
import { ReactComponent as Skill } from "../../../assets/image/sticksvg/skill.svg";
import { ReactComponent as Project } from "../../../assets/image/sticksvg/project.svg";
import { ReactComponent as Contact } from "../../../assets/image/sticksvg/contact.svg";
import { ReactComponent as Navigate } from "../../../assets/image/sticksvg/navigate.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Indicator({ type }) {
  return type ? <StickForm /> : <SideForm />;
}

function StickForm() {
  const side = useSelector((state) => state.side.value);
  const nav = useNavigate();
  const navTo = (id) => {
    const doc = document.getElementById(id);
    window.scrollTo({ top: doc.offsetTop, behavior: "smooth" });
  };
  return (
    <div className={styles["c-indicator-stick"]}>
      <div
        onClick={() => {
          nav(`/List`);
        }}
      >
        <Navigate />
      </div>
      <div onClick={() => navTo("first")}>
        <Home fill={side === 0 ? "#fff" : "#000"} />
      </div>
      <div onClick={() => navTo("second")}>
        <About fill={side === 1 ? "#fff" : "#000"} />
      </div>
      <div onClick={() => navTo("third")}>
        <Project fill={side === 2 ? "#fff" : "#000"} />
      </div>
      <div onClick={() => navTo("fourth")}>
        <Contact fill={side === 3 ? "#fff" : "#000"} />
      </div>
    </div>
  );
}

function SideForm() {
  const side = useSelector((state) => state.side.value);
  const menulist = ["HOME", "ABOUT ME", "PROJECTS", "CONTACT"];

  return (
    <div className={styles["c-indicator-side"]}>
      {menulist.map((data, index) => (
        <div
          className={styles["c-indicator-side__item"]}
          style={{
            color: side === index ? "#edd451" : "#fff",
            fontWeight: side === index ? "bold" : "normal",
          }}
        >
          {data}
        </div>
      ))}
      <span className={styles["c-indicator-side__line"]}></span>
    </div>
  );
}

Indicator.propTypes = {
  type: PropTypes.bool.isRequired,
};

/**
Home
about me
Resume
Projects
Contact 
*/

/**
 * 기본 파랑 5190F4
보내준 샘플 짙은 파랑 0c3184
보내준 샘플 연한 하늘 (내용 백그라운드) cfe3fb
보내준 샘플 슬라이드 d5d9e2
보내준 샘플 블랙 292929

컬러 팔레트에서
1번째 진한 파랑 005DB9
2번째 연한 하늘 D0E9EF
3번째 노랑 EDD451 / 블랙 353535
4번째 틸컬러 B9EFFF / 보라 4A4499
 */
