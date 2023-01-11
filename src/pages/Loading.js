import { useEffect, useState } from "react";
import styles from "./Loading.module.css";
import useInterval from "use-interval";
import ProgressCircle from "../components/ProgressCircle";

function Loading({ progressDone, getProgressDone }) {
  return (
    <div className={styles.page}>
      <ProgressCircle
        progressDone={progressDone}
        getProgressDone={getProgressDone}
      />
    </div>
  );
}

export default Loading;
