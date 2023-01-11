import styles from "./ProgressCircle.module.css";
import useInterval from "use-interval";
import { useState } from "react";

function ProgressCircle({ progressDone, getProgressDone }) {
  let CIRCUMFERENCE = 2 * Math.PI * 54;

  const [trigger, setTrigger] = useState(false);
  const [dash, setDash] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [Tool, setTool] = useState(false);
  const [greetText, setGreetText] = useState("");

  /*  useEffect(() => {
      setPercentage(percentage);
    }, [percentage]); */

  /* function progress() {
      valuebar.style.strokeDashoffset = dashoffset;
    } */

  const DownTrigger = () => {
    if (!trigger) {
      setTrigger(true);
    }
  };

  const UpTrigger = () => {
    if (trigger) {
      setTrigger(false);
    }
  };

  useInterval(
    () => {
      if (trigger) {
        if (percentage < 100) {
          setPercentage((percentage) => percentage + 1);
        } else if (percentage === 100) {
          sessionStorage.setItem("setting", JSON.stringify(false));
          setTool(true);
          setTimeout(() => {
            getProgressDone(true);
          }, 6000);
        }
      } else {
        if (percentage > 0) {
          setPercentage((percentage) => percentage - 1);
        }
      }
      setDash((CIRCUMFERENCE * percentage) / 100);
      console.log(percentage);
    },
    (!trigger && percentage === 0) || Tool ? null : 30
  );

  return (
    <div
      className={Tool ? `${styles["fadeout"]} ` : `${styles["progress-wrap"]} `}
      onMouseDown={DownTrigger}
      onMouseUp={UpTrigger}
    >
      <div className={styles["text-font"]}>
        <p
          className={Tool ? `${styles["fadein-1"]} ` : `${styles["none"]} `}
        >{`Greetings :)`}</p>
        <p className={Tool ? `${styles["fadein-2"]} ` : `${styles["none"]} `}>
          I Hope U Enjoy
        </p>
      </div>
      <svg
        className={styles["circle-progress"]}
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >
        <circle
          className={styles["circle-progress-meter"]}
          cx="60"
          cy="60"
          r="54"
          strokeWidth="10"
        />
        <circle
          className={styles["circle-progress-ing"]}
          cx="60"
          cy="60"
          r="54"
          strokeDasharray={[dash, CIRCUMFERENCE - (1 - dash)]}
          strokeWidth="10"
        />
      </svg>
      <p className={styles["circle-progress-value"]}>
        {percentage === 0 ? "Press" : /* Tool ? ":)" : */ `${percentage}%`}
      </p>
    </div>
  );
}

export default ProgressCircle;
