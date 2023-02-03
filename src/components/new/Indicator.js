import styles from "./Indicator.module.css";
import PropTypes from "prop-types";
import { ReactComponent as Home } from "../../picture/sticksvg/home.svg";
import { ReactComponent as About } from "../../picture/sticksvg/about.svg";
import { ReactComponent as Skill } from "../../picture/sticksvg/skill.svg";
import { ReactComponent as Project } from "../../picture/sticksvg/project.svg";
import { ReactComponent as Contact } from "../../picture/sticksvg/contact.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Indicator({ type }) {
  return <div>{type ? <StickForm /> : <SideForm />}</div>;
}

function StickForm() {
  const side = useSelector((state) => state.side.value);
  return (
    <div className={styles["indicator-container-stick"]}>
      <div>
        <Home fill={side === 0 ? "#fff" : "#000"} />
      </div>
      <div>
        <About fill={side === 1 ? "#fff" : "#000"} />
      </div>
      <div>
        <Skill fill={side === 2 ? "#fff" : "#000"} />
      </div>
      <div>
        <Project fill={side === 3 ? "#fff" : "#000"} />
      </div>
      <div>
        <Contact fill={side === 4 ? "#fff" : "#000"} />
      </div>
    </div>
  );
}

function SideForm() {
  const side = useSelector((state) => state.side.value);
  return (
    <div className={styles["indicator-container-side"]}>
      <div style={{ color: side === 0 ? "#edd451" : "#fff" }}>HOME</div>
      <div style={{ color: side === 1 ? "#edd451" : "#fff" }}>ABOUT ME</div>
      <div style={{ color: side === 2 ? "#edd451" : "#fff" }}>SKILL STACK</div>
      <div style={{ color: side === 3 ? "#edd451" : "#fff" }}>PROJECTS</div>
      <div style={{ color: side === 4 ? "#edd451" : "#fff" }}>CONTACT </div>
      <span className={styles["indicator-side-line"]}></span>
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
