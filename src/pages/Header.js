import styles from "./Header.module.css";
import img from "./smile.png";
import Weather from "../objects/Weather";

function Header(){
    return(
    <header className={styles.tophead}>
      <nav>
        <div className={styles.topheadin}>
          <div className={styles.topheadflex}>
            <div className={styles.topheadmenu}>
              <div className={styles.menuicon}>
                <a href="https://www.naver.com/">
                  <img src={img} alt="logo"/>
                </a>
              </div>
            </div>
            <div className={styles.menulists}>
              <a href="https://www.naver.com/">ABCDEFH</a>
              <a href="https://www.naver.com/">ABCDEFH</a>
              <a href="https://www.naver.com/">ABCDEFH</a>
              <a href="https://www.naver.com/">ABCDEFH</a>
              <a href="https://www.naver.com/">ABCDEFH</a>
            </div>
            <div className={styles.topheadprofile}>
              <Weather/>
            </div>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Header;