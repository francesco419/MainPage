import styles from "./SecondPage.module.css";
import { ReactComponent as Communiction } from "../../picture/communication.svg";
import { ReactComponent as Creativity } from "../../picture/creativity.svg";
import { ReactComponent as Growths } from "../../picture/growth.svg";
import { ReactComponent as System } from "../../picture/system.svg";
import SideMenu from "./SideMenu";
import { useOnScreen } from "../../hook/useOnScreen";
import { useDispatch } from "react-redux";
import { changeSide } from "../../redux/SideSlide";
import { useEffect, useRef } from "react";

export default function SecondPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(1));
      console.log(1);
    }
  }, [screen]);
  return (
    <div id="second" className={styles["second-page"]}>
      <SideMenu />
      <div className={styles["second-page-right"]}>
        <div className={styles["second-right-box"]}>
          <div className={styles["second-right-title"]} ref={ref}>
            <div>
              <h2>{`<ABOUT ME/>`}</h2>
            </div>
          </div>
          <div className={styles["second-right-section"]}>
            <div className={styles["second-section-intro"]}>
              <p>
                대학교 3학년 때 폭 넓은 시각을 갖고싶어 C 언어 강의를
                수강하였고, 이 전부터 조립하거나 제작하는 걸 좋아했기에
                프로그래밍으로 무에서 유를 창조하는 개발 과정에 큰 흥미를 느끼게
                되었습니다. 이 후 Java, C, C++ 등 프로그래밍 강의 위주로 수업을
                들으며 개발자로서 기본 역량을 키웠고 사용자가 처음에 마주하는
                영역을 보다 시각적이고 직관적으로 구현하고 싶어 프론트엔드
                개발자로 도전하게 되었습니다.
              </p>
            </div>
            <div className={styles["second-section-detail"]}>
              <ul className={styles["second-ul-first"]}>
                <h3>핵심역량</h3>
                <li>React 라이브러리를 사용한 SPA 개발 능력</li>
                <li>
                  TypeScript의 정적 타입 코드 작성 및 타입 오류 문제해결 능력
                </li>
                <li>
                  Redux Toolkit을 적용해 프로젝트의 효율적인 전역 상태 관리 능력
                </li>
                <li>SCSS, CSS Module의 장점을 이해한 스타일 시트 작성 능력</li>
                <li>Git을 통한 프로젝트 관리 경험</li>
              </ul>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Communiction />
                      <p>{`<Communication>`}</p>
                    </td>
                    <td>
                      <Creativity />
                      <p>{`<Creativity>`}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Growths />
                      <p>{`<Growths>`}</p>
                    </td>
                    <td>
                      <System />
                      <p>{`<Systematic>`}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles["second-progress"]}>
              <span className={styles["progressbar"]} id="html">
                <div style={{ height: "5vh" }}></div>
              </span>
              <span className={styles["progressbar"]} id="css">
                <div style={{ height: "5vh" }}></div>
              </span>
              <span className={styles["progressbar"]} id="js">
                <div style={{ height: "4vh" }}></div>
              </span>
              <span className={styles["progressbar"]} id="ts">
                <div style={{ height: "10vh" }}></div>
              </span>
              <span className={styles["progressbar"]} id="scss">
                <div style={{ height: "8vh" }}></div>
              </span>
              <span className={styles["progressbar"]} id="react">
                <div style={{ height: "5vh" }}></div>
              </span>
              <span className={styles["progressbar"]} id="redux">
                <div style={{ height: "8vh" }}></div>
              </span>
              <div className={styles["second-progress-absolute"]}>
                <hr />
                <hr />
              </div>
              <div className={styles["progress-name"]}>
                <p>HTML</p>
                <p>CSS</p>
                <p>JS</p>
                <p>TS</p>
                <p>SCSS</p>
                <p>REACT</p>
                <p>REDUX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
