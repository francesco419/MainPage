import styles from "./Skill.module.css";
import { ReactComponent as JAVASCRIPT_SVG } from "../picture/language/javascript.svg";
import { ReactComponent as CSSSVG } from "../picture/language/css.svg";
import { ReactComponent as HTMLSVG } from "../picture/language/html.svg";
import { ReactComponent as TYPESCRIPTSVG } from "../picture/language/typescript.svg";
import { ReactComponent as NODEJS_SVG } from "../picture/language/nodejs.svg";
import { ReactComponent as REACT_SVG } from "../picture/language/react.svg";
import { ReactComponent as REDUX_SVG } from "../picture/language/redux.svg";
import { ReactComponent as GIT_SVG } from "../picture/language/figma.svg";
import { ReactComponent as FIGMA_SVG } from "../picture/language/git.svg";
import { ReactComponent as SCSS_SVG } from "../picture/language/scss.svg";
import { SkillsText } from "../context/ProjectText.js";

function Skill() {
  console.log(window.innerWidth);
  /* const [skillarr, setSkillarr] = useState([
    "C++",
    "C",
    "JavaScript",
    "React",
    "CSS",
    "HTML",
    "C#",
    "Java",
  ]);

  const [a, setA] = useState(0);

  const changearr = () => {
    const LENGTH = skillarr.length - 1;
    let temp = skillarr[LENGTH];
    for (let i = LENGTH; i > 0; i--) {
      skillarr[i] = skillarr[i - 1];
    }
    skillarr[0] = temp;
    setSkillarr(skillarr);
  };

  useEffect(() => {
    changearr();
  }, [a]);

  useInterval(() => {
    aaa();
  }, 5000);

  const aaa = () => {
    setA(a + 1);
  }; */

  function Skillset() {
    return (
      <div className={styles["ul-skillset-container"]}>
        <ul className={styles["ul-skillset-0"]}>
          <li>
            <p>React를 기반으로 Typescript와 Redux을</p>
            <p>사용한 Frontend 개발을 할 수 있습니다.</p>
          </li>
          <li>
            <p>컴포넌트별 CSS관리의 편리함을 위해</p>
            <p>CSS Module를 사용하고 있습니다.</p>
          </li>
          <li>
            <p>Git/GitHub-Flow를 이해하며, 이를 통해</p>
            <p>매끄러운 프로젝트 진행이 가능합니다.</p>
          </li>
          <li>
            <p>Java, C, C++, C#을 배운 경험이 있어 새로운</p>
            <p>언어 및 기술을 빠르게 학습할 수 있습니다.</p>
          </li>
        </ul>
        <ul className={styles["ul-skillset-1"]}>
          <li className={styles["li-skillset-absolute"]}>
            <p>Language</p>
          </li>
          <li>
            <HTMLSVG width="100px" height="100px" />
          </li>
          <li>
            <JAVASCRIPT_SVG width="100px" height="100px" />
          </li>
          <li>
            <TYPESCRIPTSVG width="100px" height="100px" />
          </li>
          <li>
            <CSSSVG width="100px" height="100px" />
          </li>
          <li>
            <SCSS_SVG width="100px" height="100px" />
          </li>
        </ul>
        <ul className={styles["ul-skillset-1"]}>
          <li className={styles["li-skillset-absolute"]}>
            <p>Library</p>
          </li>
          <li>
            <REACT_SVG width="100px" height="100px" />
          </li>
          <li>
            <REDUX_SVG width="100px" height="100px" />
          </li>
        </ul>
        <ul className={styles["ul-skillset-1"]}>
          <li className={styles["li-skillset-absolute"]}>
            <p>Library</p>
          </li>
          <li>
            <REACT_SVG width="100px" height="100px" />
          </li>
          <li>
            <REDUX_SVG width="100px" height="100px" />
          </li>
        </ul>
        <ul
          className={styles["ul-skillset-1"]}
          style={window.innerWidth > 1025 ? { margin: "40px 20px" } : null}
        >
          <li className={styles["li-skillset-absolute"]}>
            <p>Database</p>
          </li>
          <li>
            <NODEJS_SVG width="100px" height="100px" />
          </li>
        </ul>
        <ul className={styles["ul-skillset-1"]}>
          <li className={styles["li-skillset-absolute"]}>
            <p>ETC</p>
          </li>
          <li>
            <GIT_SVG width="100px" height="100px" />
          </li>
          <li>
            <FIGMA_SVG width="100px" height="100px" />
          </li>
        </ul>
      </div>
    );
  }

  /* function Skillscreen() {
    return (
      <div className={styles.skillslide}>
        <div className={styles.slide}>
          <div className={styles.y}>{skillarr[0]}</div>
          <div className={styles.y}>{skillarr[1]}</div>
          <div
            className={styles.y}
            style={{ color: "white", fontSize: "80px" }}
          >
            {skillarr[2]}
          </div>
          <div className={styles.y}>{skillarr[3]}</div>
          <div className={styles.y}>{skillarr[4]}</div>
          <div className={styles.y}>{skillarr[5]}</div>
          <div className={styles.y}>{skillarr[6]}</div>
        </div>
      </div>
    );
  }

  function SkillInfo() {
    return (
      <div className={styles.info}>
        <div className={styles.boldwhite}>Best Skills</div>
        <div>{SkillsText[1].text}</div>
        <div className={styles.iconbox}>
          <div className={styles.iconboxL}>
            <div style={{ marginBottom: "20px" }} className={styles.icon}>
              <HTML />
            </div>
            <div className={styles.icon}>
              <JS />
            </div>
          </div>
          <div className={styles.iconboxR}>
            <div style={{ marginBottom: "20px" }} className={styles.icon}>
              <CSS />
            </div>
            <div className={styles.icon}>
              <REACT />
            </div>
          </div>
        </div>
      </div>
    );
  } */

  return (
    <div className={styles.skill}>
      <div className={styles.title}>{SkillsText[0].text}</div>
      <Skillset></Skillset>
      {/* <div className={styles.split}>
      <SkillInfo />
        <Skillscreen />
      </div>*/}
    </div>
  );
}

export default Skill;
