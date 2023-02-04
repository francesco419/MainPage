import styles from "./FrontPage.module.css";
import FirstPage from "../components/new/FirstPage";
import SecondPage from "../components/new/SecondPage";
import Indicator from "../components/new/Indicator";
import ThirdPage from "../components/new/ThirdPage";
import FourthPage from "../components/new/FourthPage";
import FifthPage from "../components/new/FifthPage";
import { useEffect } from "react";

export default function FrontPage() {
  let timer;

  useEffect(() => {
    window.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
      },
      { passive: false }
    );
    window.addEventListener("wheel", (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (e.deltaY > 0) {
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        } else if (e.deltaY < 0) {
          window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
        }
      }, 300);
    });
    return () => {
      window.addEventListener(
        "wheel",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
        },
        { passive: false }
      );
      window.addEventListener("wheel", (e) => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (e.deltaY > 0) {
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
          } else if (e.deltaY < 0) {
            window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
          }
        }, 300);
      });
    };
  }, []);
  return (
    <div className={styles["page"]}>
      <Indicator type={true} />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}
