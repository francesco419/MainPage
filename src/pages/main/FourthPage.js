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

  function ContactBox({ text, SVG }) {
    return (
      <div
        className={styles["fourthpage-big__item"]}
        onClick={() => {
          navigator.clipboard.writeText(text);
          alert("Copied to Users Clipboard !");
        }}
      >
        {SVG}
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div id="fourth" className={styles["fourthpage"]}>
      <SideMenu />
      <div className={styles["fourthpage-right"]}>
        <div className={styles["fourthpage-box"]}>
          <div className={styles["fourthpage-title"]} ref={ref}>
            <h2>{`<CONTACT/>`}</h2>
          </div>
          <div className={styles["fourthpage-section"]}>
            <div className={styles["fourthpage-big"]}>
              <ContactBox text={"francesco419@naver.com"} SVG={<Email />} />
              <ContactBox
                text={"https://github.com/francesco419"}
                SVG={<Github />}
              />
              <ContactBox
                text={"https://velog.io/@francesco419"}
                SVG={<Blog />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
