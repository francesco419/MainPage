import styles from "./ProjectNav.module.css";
import { ProjectDetailText } from "../../context/ProjectText.js";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/image/contact/github.svg";
import { ReactComponent as PublishedLink } from "../../assets/image/sticksvg/navigate.svg";
import Aos from "aos";
import { Link } from "react-router-dom";

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

  const getImageShow = () => {
    setImageShow((imageShow) => !imageShow);
  };

  return (
    <div className={styles["c-project-page"]}>
      <ProjectHeader param={param} />
      <ProjectSideBar
        update={data.LastUpdate}
        created={data.created}
        github={data.github}
        url={data.url}
      />
      <section className={styles["c-project-section"]}>
        <SectionFirst text={data.text2} name={data.name} />
        <SectionSecond imgs={data.img} onChangeShow={onChangeShow} />
        <SectionThird results={data.result} />
        <SectionFourth skills={data.program} />
        <div className={styles["c-project__number"]}></div>
      </section>
      {imageShow && (
        <AbsoluteImg getImageShow={getImageShow} imageData={imageData} />
      )}
      {pageTransition && <TransitionEffect />}
    </div>
  );

  function TransitionEffect() {
    return <div className={styles["transiton-effect-out"]}></div>;
  }
}

function ProjectHeader({ param }) {
  return (
    <div className={styles["c-project-header"]}>
      <nav className={styles["c-project-nav"]}>
        <p>Lee Sang Hean</p>
        <div className={styles["c-project-link"]}>
          <Link className={styles["c-project-link__link"]} to={`/MainPage`}>
            MainPage
          </Link>
          <Link
            className={styles["c-project-link__link"]}
            to={`/ProjectNav/${parseInt(param.id) - 1}`}
            onClick={(e) => {
              if (param.id === "0") {
                e.preventDefault();
              }
            }}
          >
            Previous Project
          </Link>
          <Link
            className={styles["c-project-link__link"]}
            to={`/ProjectNav/${parseInt(param.id) + 1}`}
            onClick={(e) => {
              if (param.id === "3") {
                e.preventDefault();
              }
            }}
          >
            Next Project
          </Link>
        </div>
      </nav>
    </div>
  );
}

function ProjectSideBar({ update, created, github, url }) {
  return (
    <div className={styles["c-project-sidebar"]}>
      <ul className={styles["l-project-sidebar__list"]}>
        <li className={styles["l-project-sidebar__item"]}>
          <p className={styles["c-project-sidebar__paragraph"]}>Last Update</p>
          <p className={styles["c-project-sidebar__paragraph"]}>{update}</p>
        </li>
        <li className={styles["l-project-sidebar__item"]}>
          <p className={styles["c-project-sidebar__paragraph"]}>Created</p>
          <p className={styles["c-project-sidebar__paragraph"]}>{created}</p>
        </li>
      </ul>
      <div className={styles["c-project-sidebar__link"]}>
        <a href={github} target="_blank">
          <Github />
        </a>
        <a href={url} target="_blank">
          <PublishedLink />
        </a>
      </div>
    </div>
  );
}

function SectionFirst({ text, name }) {
  return (
    <div className={styles["c-project-first__section"]}>
      <div className={styles["c-project-first__item"]}>
        <h1 className={styles["c-project-first__title"]}>Project:</h1>
        <h1 className={styles["c-project-first__title"]}>{name}</h1>
      </div>
      <div
        className={styles["c-project-section__introduction"]}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1500"
      >
        <h2 className={styles["title-blue"]}>Introduction</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

function SectionSecond({ imgs, onChangeShow }) {
  return (
    <div
      className={styles["c-project-second__section"]}
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="1000"
    >
      <div id="imgSlide" className={styles["c-project-second__imgbox"]}>
        {imgs.map((data, index) => (
          <img
            className={styles["c-project-second__img"]}
            key={`img_${index}`}
            src={data}
            onClick={() => {
              onChangeShow(index);
            }}
          />
        ))}
      </div>
      <div className={styles["c-project-second__project"]}>
        <div>
          <h2 className={styles["title-blue"]}>Proejct Image</h2>
          <p>The images of the projects </p>
        </div>
      </div>
    </div>
  );
}

function SectionThird({ results }) {
  return (
    <div
      className={styles["c-project-third__section"]}
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="2000"
    >
      <ul className={styles["l-project-third__list"]}>
        <li className={styles["l-project-third__item"]}>
          <h2 className={styles["title-blue"]}>Result & TakeAway</h2>
        </li>
        {results.map((text, index) => (
          <li className={styles["l-project-third__item"]} key={`text_${index}`}>
            <p className={styles["c-project-third__paragraph"]}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionFourth({ skills }) {
  return (
    <div
      className={styles["c-project-fourth__section"]}
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-delay="1500"
    >
      <ul className={styles["l-project-fourth__list"]}>
        <li className={styles["l-project-fourth__item"]}>
          <h2 className={styles["title-blue"]}>SKILL STACK :</h2>
        </li>
        {skills.map((skill) => (
          <li className={styles["l-project-fourth__item"]} key={`${skill}`}>
            <p className={styles["c-project-fourth__paragraph"]}>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AbsoluteImg({ getImageShow, imageData }) {
  return (
    <div className={styles["c-project-absolute"]} onClick={getImageShow}>
      <div className={styles["c-project-absolute_box"]}>
        <img className={styles["c-project-absolute_img"]} src={imageData} />
      </div>
    </div>
  );
}
