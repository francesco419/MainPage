import { useEffect } from "react";
import styles from "./FirstPage.module.css";
import { ReactComponent as Arrow } from "../../picture/left-arrow.svg";
import Indicator from "./Indicator";

export default function FirstPage() {
  useEffect(() => {}, []);
  return (
    <div className={styles["first-page"]}>
      <div className={styles["first-page-left"]}>
        <div className={styles["first-page-introduce"]}>
          <div className={styles["first-page-name"]}>
            <p>LEE SANG HEAN</p>
          </div>
          <div className={styles["first-page-info"]}>
            <p>변화하는 코드같은 개발자</p>
          </div>
          <div>
            <p className={styles["first-page-text"]}>
              {`코드는 사용자를 위해 더 좋은 방향으로 지속적으로발전해나갑니다. 
                이렇게 끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.

                무언가를 제작하는 것을 좋아했기에 코드를 사용해 생각하는 것을 만들어 낼 수 있는 
                개발에 큰 흥미를 느껴 개발자가 되고자 결심하게 되었으며, 사용자 경험을 중시하는
                마인드를 갖고 보다 정확하고 편리한 서비스를 제공하는 개발자가 되고자 합니다.`}
            </p>
          </div>
          <div className={styles["first-page-button"]}>
            <button>
              <Arrow width="15px" height="15px" fill="#4d92f1" />
            </button>
            <p>MORE ABOUT ME</p>
          </div>
        </div>
      </div>
      <div className={styles["first-page-right"]}>
        <p className={styles["first-page-righttext"]}>
          JUNIORFRONTENDDEVELOPERJUNIORFRONTENDDEVELOPER JUNIOR FRONT END
          DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR
          FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR FRONT END
          DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR
          FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR FRONT END
          DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR
          FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR FRONT END
          DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER JUNIOR
          FRONT END DEVELOPER JUNIOR FRONT END DEVELOPER
        </p>
      </div>
    </div>
  );
}
