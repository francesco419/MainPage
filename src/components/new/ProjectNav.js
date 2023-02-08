import styles from "./ProjectNav.module.css";
import { ProjectDetailText } from "../../context/ProjectText.js";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Github } from "../../picture/contact/github.svg";
import { ReactComponent as PublishedLink } from "../../picture/sticksvg/navigate.svg";
import Aos from "aos";

export default function ProjectNav() {
  const param = useParams();
  const [data, setData] = useState(ProjectDetailText[param.id]);
  const [imageShow, setImageShow] = useState(false);
  const [imageData, setImageData] = useState("");
  const [pageTransition, setPageTransition] = useState(true);
  const nav = useNavigate();
  const qwerty = useRef(0);

  useEffect(() => {
    setData(ProjectDetailText[param.id]);
    transitionTimeout();
    window.addEventListener("wheel", (e) => wheelHandler(e));
    return () => {
      window.removeEventListener("wheel", (e) => wheelHandler(e));
      transitionTimeout();
    };
  }, [param]);

  useEffect(() => {
    transitionTimeout();
    window.addEventListener("wheel", (e) => wheelHandler(e));
    return () => {
      transitionTimeout();
      window.removeEventListener("wheel", (e) => wheelHandler(e));
    };
  }, []);

  const wheelHandler = (e) => {
    const elementSlide = document.getElementById("imgSlide");
    if (e.deltaY < 0) {
      if (elementSlide.style.left === `-350%`) {
        return;
      }
      qwerty.current = qwerty.current - 10;
      elementSlide.style.left = `${qwerty.current}%`;
      return;
    }
    if (e.deltaY > 0) {
      if (elementSlide.style.left === `100%`) {
        return;
      }
      qwerty.current = qwerty.current + 10;
      elementSlide.style.left = `${qwerty.current}%`;
      return;
    }
  };

  const transitionTimeout = () => {
    setTimeout(() => {
      setPageTransition((pageTransition) => false);
    }, 2000);
  };

  const onChangeShow = (num) => {
    setImageShow((imageShow) => !imageShow);
    setImageData(data.img[num]);
  };

  return (
    <div className={styles["project-page"]}>
      <div className={styles["project-header"]}>
        <nav className={styles["project-nav"]}>
          <p>Lee Sang Hean</p>
          <div className={styles["project-button"]}>
            <button
              onClick={() => {
                nav(`/MainPage`);
              }}
            >
              MainPage
            </button>
            <button
              onClick={() => {
                if (param.id === "0") {
                  return;
                }
                nav(`/ProjectNav/${parseInt(param.id) - 1}`);
              }}
            >
              Previous Project
            </button>
            <button
              onClick={() => {
                if (param.id === "3") {
                  return;
                }
                nav(`/ProjectNav/${parseInt(param.id) + 1}`);
              }}
            >
              Next Project
            </button>
          </div>
        </nav>
      </div>
      <div className={styles["project-sidebar"]}>
        <ul className={styles["project-sidebar-date"]}>
          <li>
            <p>Last Update</p>
            <p>{data.LastUpdate}</p>
          </li>
          <li>
            <p>Created</p>
            <p>{data.created}</p>
          </li>
        </ul>
        <div className={styles["project-sidebar-link"]}>
          <a href={data.github} target="_blank">
            <Github />
          </a>
          <a href={data.url} target="_blank">
            <PublishedLink />
          </a>
        </div>
      </div>
      <section className={styles["project-section"]}>
        <div className={styles["project-section-0"]}>
          <div className={styles["project-title"]}>
            <h1>Project:</h1>
            <h1>{data.name}</h1>
          </div>
          <div
            className={styles["project-introduction"]}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            <h2>Introduction</h2>
            <p>{data.text2}</p>
          </div>
        </div>
        <div
          className={styles["project-section-1"]}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <div id="imgSlide" className={styles["project-imgslide"]}>
            {data.img.map((data, index) => (
              <img
                src={data}
                onClick={() => {
                  onChangeShow(index);
                }}
              />
            ))}
          </div>
          <div className={styles["project-section-control"]}>
            <div>
              <h2>Proejct Image</h2>
              <p>The images of the projects </p>
            </div>
          </div>
        </div>
        <div
          className={styles["project-section-2"]}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="2000"
        >
          <ul>
            <li>
              <h2>Result & TakeAway</h2>
            </li>
            {data.result.map((text) => (
              <li>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={styles["project-section-3"]}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="1500"
        >
          <div className={styles["project-skill"]}>
            <ul>
              <li>
                <h2>SKILL STACK :</h2>
              </li>
              {data.program.map((skill) => (
                <li>
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles["project-number"]}></div>
      </section>
      {imageShow && (
        <div
          className={styles["project-fullimage"]}
          onClick={() => setImageShow((imageShow) => !imageShow)}
        >
          <div>
            <img src={imageData} />
          </div>
        </div>
      )}
      {pageTransition && <TransitionEffect />}
    </div>
  );

  function TransitionEffect() {
    return <div className={styles["transiton-effect-out"]}></div>;
  }

  /* return (
    <div className={styles["project-page"]}>

      <div className={styles["project-header"]}>
        <h1>
          {data.id}. {data.name}
        </h1>
      </div>
      <div className={styles["project-button"]}>
        <button
          onClick={() => {
            if (param.id === "0") {
              return;
            }
            nav(`/ProjectNav/${parseInt(param.id) - 1}`);
          }}
        >
          <span>Previous Project</span>
          <span>{`> Previous Project <`}</span>
        </button>
        <button
          onClick={() => {
            nav(`/MainPage`);
          }}
        >
          <span>MainPage</span>
          <span>{`> MainPage <`}</span>
        </button>
        <button
          onClick={() => {
            if (param.id === "3") {
              return;
            }
            nav(`/ProjectNav/${parseInt(param.id) + 1}`);
          }}
        >
          <span>Next Project</span>
          <span>{`> Next Project <`}</span>
        </button>
      </div>

      <div className={styles["project-section"]}>
        <ul>
          <ol>
            <li>
              <h2># 프로젝트 개요</h2>
            </li>
            <li>
              <p>{data.contribution}</p>
            </li>
            <li>
              <p>{data.date}</p>
            </li>
          </ol>
          <ol>
            <li>
              <h2># 프로젝트 설명</h2>
            </li>
            <li>
              <p style={{ lineHeight: "30px" }}>{data.text2}</p>
            </li>
          </ol>
          <ol>
            <li>
              <h2># 성과 및 배운점</h2>
            </li>
            {data.result.map((data, index) => (
              <li key={`archive${index}`}>
                <p>{data}</p>
              </li>
            ))}
          </ol>
          <ol style={{ display: "flex" }}>
            <ol style={{ margin: "0 5vw 0 0" }}>
              <li>
                <h2># 기술 스택</h2>
              </li>
              {data.program.map((data, index) => (
                <li key={`skills_${index}`}>
                  <p>{data}</p>
                </li>
              ))}
            </ol>
            <ol>
              <li>
                <h2># 링크</h2>
              </li>
              <li>{data.url && <a href={data.url}>PUBLISHED URL</a>}</li>
              <li>
                <a href={data.github}>GITHUB PAGE</a>
              </li>
            </ol>
          </ol>
        </ul>
        <hr />
      </div>
      <div className={styles["project-img-container"]}>
        <div className={styles["img-container"]}>
          {data.img.map((src) => (
            <img
              className={styles["img-block"]}
              src={src}
              onMouseOver={(e) => {
                const doc = document.getElementById("viewbox");
                doc.src = e.target.src;
              }}
            />
          ))}
        </div>
        <div className={styles["project-img"]}>
          <img
            id="viewbox"
            className={styles["project-img-block"]}
            src={data.img[0]}
          />
        </div>
      </div>
    </div>
  ); */
}
