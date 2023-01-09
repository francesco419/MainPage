import styles from "./Intro.module.css";
import Git from "../picture/github.png";
import Lin from "../picture/linkedin.png";
import email from "../picture/email.png";
import { IntroText } from "../context/ProjectText.js";

function Intro() {
  const name = "</about>";
  const emailcopy = () => {
    navigator.clipboard.writeText("francesco419@naver.com");
    alert("Email Copied to Users Clipboard !");
  };

  function BottomComponent() {
    return (
      <div className={styles.bottom}>
        <ul className={styles["block-bottom"]}>
          <li style={{ listStyle: "circle", margin: "5px 0" }}>
            <strong>Birthdate</strong>
          </li>
          <li>
            <p>1994.06.07</p>
          </li>
        </ul>
        <ul className={styles["block-bottom"]}>
          <li style={{ listStyle: "circle", margin: "5px 0" }}>
            <strong>Education</strong>
          </li>
          <li>
            <p>한림대학교 / 2014.03-2022.02</p>
            <p>- 전자공학과 전공 (춘천본교·졸업)</p>
          </li>
          <li>
            <p>개인 및 온라인 학습 / 2022.03~</p>
          </li>
        </ul>
        <ul className={styles["block-bottom"]}>
          <li style={{ listStyle: "circle", margin: "5px 0" }}>
            <strong>Certificate</strong>
          </li>
          <li>
            <p>TOEIC : 910 / 2022.04 - 2024.03</p>
          </li>
        </ul>
        <ul className={styles["block-bottom"]}>
          <li style={{ listStyle: "circle", margin: "5px 0" }}>
            <strong>Advantages</strong>
          </li>
          <ul style={{ listStyle: "disc" }}>
            {IntroText.text.map((data) => (
              <li>
                <p>{data}</p>
              </li>
            ))}
          </ul>
        </ul>
        <div className={styles["block-bottom-contact"]}>
          <div className={styles.innerCircle}>
            <a href={"https://github.com/francesco419"}>
              <img src={Git} alt="Github" />
            </a>
            <p className={styles["block-display-none"]}>GitHub</p>
          </div>
          <div className={styles.innerCircle}>
            <a href="https://www.linkedin.com/in/sang-hean-lee-109932221/">
              <img src={Lin} alt="linkedin" />
            </a>
            <p className={styles["block-display-none"]}>LinkedIn</p>
          </div>
          <div onClick={emailcopy} className={styles.innerCircle}>
            <img style={{ cursor: "pointer" }} src={email} alt="email" />
            <p className={styles["block-display-none"]}>Email</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.about}>
      <div className={styles.top}>
        <div className={styles.title}>
          <p>{`</about>`}</p>
        </div>
        <div className={styles["block-top-personal"]}>
          <p className={styles["p-top-name"]} style={{ margin: "0 20px 0 0" }}>
            이상현
          </p>
          <p>Lee Sang Hyeon</p>
        </div>
        <p>P. 010 2922 1840</p>
        <p style={{ margin: "0 0 20px 0" }}>E. francesco419@naver.com</p>
      </div>
      <BottomComponent />
    </div>
  );
}

export default Intro;
