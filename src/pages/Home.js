import styles from "./Home.module.css";
import Intro from "../objects/Intro";
import classNames from 'classnames';
import SideMenu from "../objects/SideMenu";
import {useRef, useEffect} from "react";
import ht from "../objects/picture/HTML.png";
import cs from "../objects/picture/CSS.png";
import js from "../objects/picture/JS.png";
import re from "../objects/picture/React.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Skill from "../objects/Skill";
import Projectpage from "../objects/Projectpage";
import { useScroll } from "../objects/useScroll";

function Home(){
     useEffect(()=>{
        Aos.init({duration:1500 });
    },[])

    const prjt = [0,1,2,3];
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const visarr=[ref1,ref2,ref3];
    const {y} = useScroll();

    const move=()=>{
        if(y===0){
            window.scroll({top:ref1.current.offsetTop,behavior:"smooth"});
        }
    }

    return(
        <div className={styles.main}>
            {/* <Header/> */}
            <SideMenu arr={visarr} />
            <div className={styles.sideline}></div>
            <div className={styles.cover}>
                <div className={styles.front}>
                    <div className={styles.title}>
                        <div data-aos="fade-up" data-aos-delay="1000" className={styles.lee}>LEE</div>
                        <div data-aos="fade-up" data-aos-delay="2000" className={styles.sanghean}>
                            <span>SANG HEAN</span>
                            <span style={{color:'#ADF53E'}}>.</span>
                        </div>
                    </div>
                    <div className={styles.indicator}>
                        <div>Intro</div>
                        <div>Skills</div>
                        <div>Project</div>
                    </div>
                </div>
            </div> 
            <div className={styles.bodies}>
                <div ref={ref1} className={styles.box}>
                    <Intro/>
                </div>
                <div ref={ref2} className={styles.box}>
                    <Skill/>
                </div>
                <div ref={ref3} className={classNames(styles.c, styles.box)}>
                    <Projectpage/>
                </div>
            </div>
        </div>
    )
}

export default Home;