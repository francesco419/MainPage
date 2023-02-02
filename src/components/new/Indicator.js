import styles from "./Indicator.module.css";
import PropTypes from "prop-types";
import { ReactComponent as Home } from "../../picture/sticksvg/home.svg";
import { ReactComponent as About } from "../../picture/sticksvg/about.svg";
import { ReactComponent as Skill } from "../../picture/sticksvg/skill.svg";
import { ReactComponent as Project } from "../../picture/sticksvg/project.svg";
import { ReactComponent as Contact } from "../../picture/sticksvg/contact.svg";

export default function Indicator({ type }) {
  return <indicator>{type ? <StickForm /> : <SideForm />}</indicator>;
}

function StickForm() {
  return (
    <div className={styles["indicator-container-stick"]}>
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

function SideForm() {
  return (
    <div className={styles["indicator-container-side"]}>
      <div>HOME</div>
      <div>ABOUT ME</div>
      <div>SKILL STACK</div>
      <div>PROJECTS</div>
      <div>CONTACT </div>
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
