import styles from "./Loading.module.css";
import ProgressCircle from "../oldcomponent/ProgressCircle";

export default function Loading({ progressDone, getProgressDone }) {
  return (
    <div className={styles.page}>
      <ProgressCircle
        progressDone={progressDone}
        getProgressDone={getProgressDone}
      />
    </div>
  );
}
