import { useEffect, useRef } from "react";
import styles from "./FourthPage.module.css";
import { useOnScreen } from "../../hook/useOnScreen";
import { useDispatch } from "react-redux";
import { changeSide } from "../../redux/SideSlide";
import SideMenu from "../../components/new/indicator/SideMenu";
import { ReactComponent as Email } from "../../assets/image/contact/email.svg";
import { ReactComponent as Blog } from "../../assets/image/contact/blog.svg";
import { ReactComponent as Github } from "../../assets/image/contact/github.svg";

export default function FourthPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const screen = useOnScreen(ref);
  useEffect(() => {
    if (screen === true) {
      dispatch(changeSide(3));
      console.log(3);
    }
  }, [screen]);
  return (
    <div id="fourth" className={styles["fourth-page"]}>
      <SideMenu />
      <div className={styles["fourth-page-right"]}>
        <div className={styles["fourth-right-box"]}>
          <div className={styles["fourth-right-title"]} ref={ref}>
            <div>
              <h2>{`<CONTACT/>`}</h2>
            </div>
          </div>
          <div className={styles["fourth-page-section"]}>
            <div className={styles["fourth-section-big"]}>
              <div
                onClick={() => {
                  navigator.clipboard.writeText("francesco419@naver.com");
                  alert("Email Copied to Users Clipboard !");
                }}
              >
                <Email />
                <p>francesco419@naver.com</p>
              </div>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://github.com/francesco419"
                  );
                  alert("URL Copied to Users Clipboard !");
                }}
              >
                <Github />
                <p>https://github.com/francesco419</p>
              </div>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://velog.io/@francesco419"
                  );
                  alert("URL Copied to Users Clipboard !");
                }}
              >
                <Blog />
                <p>https://velog.io/@francesco419</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
