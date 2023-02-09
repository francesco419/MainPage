import styles from "./SecondPage.module.css";
import { ReactComponent as Communiction } from "../../assets/image/communication.svg";
import { ReactComponent as Creativity } from "../../assets/image/creativity.svg";
import { ReactComponent as Growths } from "../../assets/image/growth.svg";
import { ReactComponent as System } from "../../assets/image/system.svg";
import SideMenu from "../../components/new/indicator/SideMenu";
import { useOnScreen } from "../../hook/useOnScreen";
import { useDispatch } from "react-redux";
import { changeSide } from "../../redux/SideSlide";
import { useEffect, useRef } from "react";

export default function SecondPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  const ability = [
    "React 라이브러리를 사용한 SPA 개발 능력",
    "TypeScript의 정적 타입 코드 작성 및 타입 오류 문제해결 능력",
    "Redux Toolkit을 적용해 프로젝트의 효율적인 전역 상태 관리 능력",
    "SCSS, CSS Module의 장점을 이해한 스타일 시트 작성 능력",
    "Git을 통한 프로젝트 관리 경험",
  ];

  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(1));
      console.log(1);
    }
  }, [screen]);

  function ProgressBar({ height, id }) {
    return (
      <span className={styles["second-progress__item"]} id={id}>
        <div
          className={styles["second-progress__block"]}
          style={{ height: height }}
        ></div>
      </span>
    );
  }

  function AbilityBlock({ svg, name }) {
    return (
      <td className={styles["secondpage-table_data"]}>
        {svg}
        <p>{name}</p>
      </td>
    );
  }

  return (
    <div id="second" className={styles["secondpage"]}>
      <SideMenu />
      <div className={styles["secondpage-right"]}>
        <div className={styles["secondpage-box"]}>
          <div className={styles["secondpage-title"]} ref={ref}>
            <h2>{`<ABOUT ME/>`}</h2>
          </div>
          <div className={styles["secondpage-section"]}>
            <div className={styles["secondpage-intro"]}>
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
            <div className={styles["secondpage-detail"]}>
              <ul className={styles["secondpage-detail_list"]}>
                <h3 className={styles["secondpage-detail_title"]}>핵심역량</h3>
                {ability.map((text) => (
                  <li className={styles["secondpage-detail_item"]}>{text}</li>
                ))}
              </ul>
              <table>
                <tbody>
                  <tr>
                    <AbilityBlock
                      svg={<Communiction />}
                      name={`<Communication>`}
                    />
                    <AbilityBlock svg={<Creativity />} name={`<Creativity>`} />
                  </tr>
                  <tr>
                    <AbilityBlock svg={<Growths />} name={`<Growths>`} />
                    <AbilityBlock svg={<System />} name={`<Systematic>`} />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles["second-progress"]}>
              <ProgressBar height={"5vh"} id={"html"} />
              <ProgressBar height={"5vh"} id={"css"} />
              <ProgressBar height={"4vh"} id={"js"} />
              <ProgressBar height={"10vh"} id={"ts"} />
              <ProgressBar height={"8vh"} id={"sass"} />
              <ProgressBar height={"5vh"} id={"react"} />
              <ProgressBar height={"8vh"} id={"redux"} />
              <div className={styles["second-progress__absolute"]}>
                <hr />
                <hr />
              </div>
              <div className={styles["second-progress__name"]}>
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
