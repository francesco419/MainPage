import "aos/dist/aos.css";
import { useEffect, useState,useRef } from "react";
import styles from "./Skill.module.css";
import useInterval from "./useInterval";
import { ReactComponent as JS} from "./picture/jssvg.svg";
import { ReactComponent as CSS} from "./picture/csssvg.svg";
import { ReactComponent as HTML} from "./picture/htmlsvg.svg";
import { ReactComponent as REACT} from "./picture/reactsvg.svg";
import {SkillsText} from "./ProjectText.js";

function Skill(){
    const [skillarr,setSkillarr] = useState(["C++","C","JavaScript","React","CSS","HTML","C#","Java"]);
    const ref=useRef(null);
    const [a,setA]=useState(0);
    const changearr =()=>{
        const LENGTH = skillarr.length-1;
        let temp = skillarr[LENGTH];
        for(let i=LENGTH;i>0;i--){
           skillarr[i] = skillarr[(i-1)];
        }
        skillarr[0] = temp;
        setSkillarr(skillarr);
    }
    useEffect(()=>{
        changearr();
    },[a])
    useInterval(()=>{
        aaa();
    },5000);
    const aaa=()=>{
        setA(a+1);
    }
    return(
        <div className={styles.skill}>
            <div className={styles.title}>{SkillsText[0].text}</div>
            <div className={styles.split}>
                <div className={styles.info}>
                    <div className={styles.boldwhite}>Best Skills</div>
                    <div>{SkillsText[1].text}</div>
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
                <div className={styles.skillslide}>
                        {/* <div className={styles.lll}></div> */}
                        <div className={styles.slide}>
{/*                             <div  className={styles.y}>{skillarr[6]}</div>
                            <div className={styles.y}>{skillarr[7]}</div> */}
                            <div className={styles.y}>{skillarr[0]}</div>
                            <div className={styles.y}>{skillarr[1]}</div>
                            <div className={styles.y} style={{color:'white', fontSize:'80px'}}>{skillarr[2]}</div>
                            <div className={styles.y}>{skillarr[3]}</div>
                            <div className={styles.y}>{skillarr[4]}</div>
                            <div className={styles.y}>{skillarr[5]}</div>
                            <div className={styles.y}>{skillarr[6]}</div>
          {/*                   <div className={styles.y}>{skillarr[7]}</div>
                            <div className={styles.y}>{skillarr[0]}</div>
                            <div className={styles.y}>{skillarr[1]}</div> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Skill;