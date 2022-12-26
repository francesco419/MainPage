import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from "./ProjectDetail.module.css";
import "aos/dist/aos.css";
import { ProjectDetailText } from "./ProjectText.js";

let prePath = ""; // 컴포넌트 함수 외부에 위치

function ProjectDetail({ popup }) {
  const id = popup;
  const arr = [
    "Youtube",
    "tp_Greetings",
    "tp_Movie",
    "MainPage",
    "tp_Calculator",
    "WebClone_Instagram",
  ];
  const [value, setValue] = useState([]);
  const [isprev, setIsprev] = useState(true);
  const [isnext, setIsnext] = useState(true),
    [iimg, setIimg] = useState(0);
  //let location = useLocation();

  const getValue = async () => {
    const json = await (
      await fetch(
        `https://api.github.com/repos/francesco419/${arr[id]}/languages`
      )
    ).json();
    setValue(json);
    console.log(json);
  }; //https://api.github.com/users/francesco419/repos

  const getnext = () => {
    if (parseInt(id) === 0) {
      setIsprev(false);
    }
    if (parseInt(id) === arr.length - 1) {
      setIsnext(false);
    }
  };

  useEffect(() => {
    getValue();
  }, [popup]);

  let javascript;
  let all;
  if (value.JavaScript === undefined) {
    javascript = 0;
    all = value.CSS + value.HTML;
  } else {
    all = value.JavaScript + value.CSS + value.HTML;
    javascript = Math.floor((value.JavaScript / all) * 100);
  }
  const cs = Math.floor((value.CSS / all) * 100);
  const ht = Math.floor((value.HTML / all) * 100);

  const COLORS = ["#ADF53E", "#95CE29", "#CAE794"];
  const data01 = [
    {
      name: "JS",
      value: javascript,
    },
    {
      name: "CSS",
      value: cs,
    },
    {
      name: "HTML",
      value: ht,
    },
  ];
  console.log(ProjectDetailText);

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <div className={styles.pages}>
          <div data-aos="fade-up" data-aos-once="true" className={styles.title}>
            {ProjectDetailText[id].name}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className={styles.detail}
          >
            <div style={{ marginRight: "50px" }}>
              <div style={{ color: "#3b5210" }}>Period</div>
              <div style={{ color: "#3b5210" }}>Program</div>
              <div style={{ color: "#3b5210" }}>Contribution</div>
            </div>
            <div>
              <div>{ProjectDetailText[id].period}</div>
              <div>{ProjectDetailText[id].program}</div>
              <div>{ProjectDetailText[id].contribution}</div>
              {ProjectDetailText[id].url ? (
                <a href={ProjectDetailText[id].url} className={styles.pagelink}>
                  See ProjectPage
                </a>
              ) : null}
            </div>
          </div>
          <div className={styles.info}>
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-once="true"
              className={styles.text}
            >
              {ProjectDetailText[id].text}
            </div>
            <div className={styles.pie}>
              <PieChart width={330} height={320}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  fill="#82ca9d"
                  label={(data01) => data01.name}
                >
                  {data01.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
          {/* <a data-aos="fade-up" data-aos-delay="1000" data-aos-once="true" href={str[id].github} className={styles.git}>
                        <img src={github}/>
                    </a> */}
        </div>
      </div>
      <div className={styles.pages}>
        <div id="images" className={styles.imageslide}>
          <button
            className={styles.imageslide_LeftB}
            onClick={() => {
              let num = ProjectDetailText[id].img.length - 1;
              if (iimg !== num) {
                setIimg(iimg + 1);
              } else {
                setIimg(0);
              }
            }}
          >
            L
          </button>
          <button
            className={styles.imageslide_RightB}
            onClick={() => {
              let num = ProjectDetailText[id].img.length - 1;
              if (iimg === 0) {
                setIimg(num);
              } else {
                setIimg(iimg - 1);
              }
            }}
          >
            R
          </button>
          <div className={styles.polpol}>
            <img src={ProjectDetailText[id].img[iimg]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
