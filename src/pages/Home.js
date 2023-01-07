import styles from "./Home.module.css";
import Intro from "../components/Intro";
import SideMenu from "../components/SideMenu";
import { useRef, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Skill from "../components/Skill";
import Projectpage from "../components/Projectpage";
import Loading from "./Loading";
import ProjectPopUp from "../components/ProjectPopUp";

function Home() {
  let session = window.sessionStorage.getItem("setting");
  const [popup, setPopup] = useState(0);
  const [display, setDisplay] = useState(false);
  const [load, setLoad] = useState(
    session == true || session === null ? true : false
  );
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const visarr = [ref1, ref2, ref3];

  const setStorage = () => {
    setLoad(false);
    const data = { setting: load };
    sessionStorage.setItem("setting", JSON.stringify(load));
  };

  const getPopUp = (popup, display) => {
    setPopup(popup);
    console.log(popup);
    getDisplay(display);
  };

  const getDisplay = (display) => {
    if (display === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    console.log(display);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setTimeout(() => {
      setStorage();
    }, 4000);
  }, []);

  return (
    <div className={styles.main}>
      {load ? (
        <Loading />
      ) : (
        <div className={styles.relative}>
          <SideMenu arr={visarr} />
          <div className={styles.sideline}></div>
          <div className={styles.box}>
            <div className={styles.front}>
              <div className={styles.title}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className={styles.lee}
                >
                  LEE
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="2000"
                  className={styles.sanghean}
                >
                  <span>SANG HEAN</span>
                  <span style={{ color: "#ADF53E" }}>.</span>
                </div>
              </div>
              <div className={styles.indicator}>
                <div>Intro</div>
                <div>Skills</div>
                <div>Project</div>
              </div>
            </div>
          </div>
          <div className={styles.bodies}>
            <div ref={ref1} className={styles.box}>
              <Intro />
            </div>
            <div ref={ref2} className={styles.box}>
              <Skill />
            </div>
            <div ref={ref3} className={styles.box}>
              <Projectpage
                popup={popup}
                getPopUp={getPopUp}
                display={display}
              />
            </div>
          </div>
          <ProjectPopUp
            popup={popup}
            display={display}
            getDisplay={getDisplay}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
