import Header from "./Header";
import styles from "./Home.module.css";
import Intro from "../objects/Intro";
import classNames from 'classnames';
import Skillpart from "../objects/Skillpart";
import SideMenu from "../objects/SideMenu";
import Contract from "../objects/Contract";
import { useScroll } from "../objects/useScroll";
import {useRef} from "react";
import {useOnScreen} from "../objects/useOnScreen";
function Home(){
    //const [test,ts]=useTT();
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const ref5=useRef(null);
    const ref6=useRef(null);
    const visible1=useOnScreen(ref1);
    const visible2=useOnScreen(ref2);
    const visible3=useOnScreen(ref3);
    const visible4=useOnScreen(ref4);
    const visible5=useOnScreen(ref5);
    const visible6=useOnScreen(ref6);

    const visarr=[visible1,visible2,visible3,visible4,visible5,visible6];

    return(
        <div className={styles.main}>
            <Header/>
            <SideMenu arr={visarr} />
            <div>
                <div className={styles.cover}>
                <img src="https://picsum.photos/1000/500"/>
                </div> 
                <div  /* {...test} */className={styles.bodies}>
                    <div ref={ref1} className={classNames(styles.a, styles.box)}>
                        <Intro/>
                        </div>
                    <div ref={ref2} className={classNames(styles.b, styles.box)}>
                        <Skillpart/>
                        </div>
                    <div ref={ref3} className={classNames(styles.c, styles.box)}>
                        <Contract/>
                        </div>
                    <div ref={ref4} className={classNames(styles.d, styles.box)}>d</div>
                    <div ref={ref5} className={classNames(styles.e, styles.box)}>e</div>
                    <div ref={ref6} className={classNames(styles.f, styles.box)}>f</div>
                </div>
            </div>
        </div>
    )
}

export default Home;