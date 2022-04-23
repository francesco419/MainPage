import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState,useRef } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Skill.module.css";
import useInterval from "./useInterval";
import { ReactComponent as JS} from "./picture/jssvg.svg";
import { ReactComponent as CSS} from "./picture/csssvg.svg";
import { ReactComponent as HTML} from "./picture/htmlsvg.svg";
import { ReactComponent as REACT} from "./picture/reactsvg.svg";

function Skill(){
    const skills = "</skills>";
    const text = "총 8개의 개발언어 사용이 가능하며,\n 그 중에서도 Frontend 개발관련\n HTML, CSS, JavaScript와\n React를 메인으로 사용합니다.";
    const [skillarr,setSkillarr] = useState(["C++","C","JavaScript","React","CSS","HTML","C#","Java"]);
    const ref=useRef(null);
    /* const [a,setA]=useState(0);
    const changearr =()=>{
        const LENGTH = skillarr.length-1;
        let temp = skillarr[LENGTH];
        for(let i=LENGTH;i>0;i--){
           skillarr[i] = skillarr[(i-1)];
        }
        skillarr[0] = temp;
        setSkillarr(skillarr);
        console.log(skillarr);
    }
    useEffect(()=>{
        changearr();
    },[a])
    useInterval(()=>{
        aaa();
    },5000);
    const aaa=()=>{
        setA(a+1);
        console.log(a);
    } */

    return(
        <div className={styles.skill}>
            <div className={styles.title}>{skills}</div>
            <div className={styles.split}>
                <div className={styles.info}>
                    <div className={styles.boldwhite}>Best Skills</div>
                    <div>{text}</div>
                    <div className={styles.iconbox}>
                        <div className={styles.iconboxL}>
                            <div style={{marginBottom:'20px'}} className={styles.icon}>
                                <HTML/>
                            </div>
                            <div className={styles.icon}>
                                <JS/>
                            </div>
                        </div>
                        <div className={styles.iconboxR}>
                            <div style={{marginBottom:'20px'}}  className={styles.icon}>
                                <CSS/>
                            </div>
                            <div className={styles.icon}>
                                <REACT/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.skillslide}>
                        <div className={styles.lll}></div>
                        <div ref={ref} className={styles.slide}>
                            <div className={styles.y}>{skillarr[6]}</div>
                            <div className={styles.y}>{skillarr[7]}</div>
                            <div className={styles.y}>{skillarr[0]}</div>
                            <div className={styles.y}>{skillarr[1]}</div>
                            <div className={styles.y}>{skillarr[2]}</div>
                            <div className={styles.y}>{skillarr[3]}</div>
                            <div className={styles.y}>{skillarr[4]}</div>
                            <div className={styles.y}>{skillarr[5]}</div>
                            <div className={styles.y}>{skillarr[6]}</div>
                            <div className={styles.y}>{skillarr[7]}</div>
                            <div className={styles.y}>{skillarr[0]}</div>
                            <div className={styles.y}>{skillarr[1]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;