import styles from "./Header.module.css";
import img from "./smile.png";
import {Link} from "react-router-dom";

function Header(){
    return(
    <div className={styles.tophead}>
        <div className={styles.topheadin}>
            <div className={styles.topheadmenu}>
              <div className={styles.menuicon}>
                <Link to={"/"}>
                  <img src={img} alt="logo"/>
                </Link>
              </div>
              <div className={styles.menulists}>
                <Link to={"/skills"}>S</Link>
                <a href="https://www.naver.com/">C</a>
                <a href="https://www.naver.com/">L</a>
              </div>
              <div className={styles.topheadprofile}>
                N
              </div>
            </div>
        </div>
    </div>
    )
}

export default Header;