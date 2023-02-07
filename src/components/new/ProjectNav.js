import styles from "./ProjectNav.module.css";
import { ProjectDetailText } from "../../context/ProjectText.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProjectNav() {
  const param = useParams();
  const [data, setData] = useState(ProjectDetailText[param.id]);
  const nav = useNavigate();

  useEffect(() => {
    setData(ProjectDetailText[param.id]);
    window.scrollTo(0, 0);
  }, [param]);

  return (
    <div className={styles["project-page"]}>
      {/**---title/indicator---*/}
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
      {/**---body section---*/}
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
      {/**---image container---*/}
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
  );
}
