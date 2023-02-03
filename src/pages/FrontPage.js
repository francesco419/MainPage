import styles from "./FrontPage.module.css";
import FirstPage from "../components/new/FirstPage";
import SecondPage from "../components/new/SecondPage";
import Indicator from "../components/new/Indicator";
import ThirdPage from "../components/new/ThirdPage";
import FourthPage from "../components/new/FourthPage";
import FifthPage from "../components/new/FifthPage";

export default function FrontPage() {
  return (
    <div className={styles["page"]}>
      <Indicator type={true} />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </div>
  );
}
