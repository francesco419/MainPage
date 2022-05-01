import styles from "./Home.module.css";
import Intro from "../objects/Intro";
import SideMenu from "../objects/SideMenu";
import {useRef, useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Skill from "../objects/Skill";
import Projectpage from "../objects/Projectpage";
import Loading from "./Loading";

function Home(){
    const [load,setLoad]=useState(true);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const visarr=[ref1,ref2,ref3];

     useEffect(()=>{
        Aos.init({duration:1500 });
        setTimeout(()=>{
            setLoad(false);
        },4000);
    },[])

    return(
        <div className={styles.main}>
            {load ? <Loading/> : (
            <div>
                <SideMenu arr={visarr}/>
                <div className={styles.sideline}></div>
                <div className={styles.box}>
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
                    <div class='pop' ref={ref1} className={styles.box}>
                        <Intro/>
                    </div>
                    <div ref={ref2} className={styles.box}>
                        <Skill/>
                    </div>
                    <div ref={ref3} className={styles.box}>
                        <Projectpage/>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Home;