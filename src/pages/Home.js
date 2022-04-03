import Header from "./Header";
import styles from "./Home.module.css";
import Intro from "../objects/Intro";
import classNames from 'classnames'
import Scrolltop from "../objects/text";
import Skillpart from "../objects/Skillpart";
import { useScroll } from "../objects/useScroll";
import SideMenu from "../objects/SideMenu";

function Home(){
    const {y}=useScroll();
    console.log(y);
    return(
    <div className={styles.main}>
        <Header/>
        <SideMenu/>
        <div>
            <div className={styles.cover}>
            <img src="https://picsum.photos/1000/500"/>
            </div> 
            <div className={styles.bodies}>
                <div className={classNames(styles.a, styles.box)}>
                    <Intro/>
                </div>
                <div className={classNames(styles.b, styles.box)}>
                    <Skillpart/>
                </div>
                <div className={classNames(styles.c, styles.box)}>
                </div>
                <div className={classNames(styles.d, styles.box)}>d</div>
                <div className={classNames(styles.e, styles.box)}>e</div>
                <div className={classNames(styles.f, styles.box)}>f</div>
            </div>
        </div>
        <Scrolltop/>
    </div>
    )
}

export default Home;