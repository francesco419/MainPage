import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Skill.module.css";

function Skill(){
    const [x,setX]=useState(false);
    const skills = "</skills>";
    const text = "총 9개의 언어 구현이 가능하며,\n 그 중에서도 Frontend 부분에서\n HTML, CSS, JavaScript와\n React를 메인으로 사용합니다.";
    const [arr,setArr] = useState(false);
    const change=()=>{
        if(arr===true){
            setArr(false);
        }else{
            setArr(true);
        }
        console.log(arr);
    }
    return(
        <div className={styles.skill}>
            <div className={styles.title}>{skills}</div>
            <div className={styles.split}>
                <div>
                    <div className={styles.boldwhite}>Best Skills</div>
                    <div>{text}</div>
                    <div className={styles.iconbox}>
                        <div className={styles.iconboxL}>
                            <div style={{marginBottom:'20px'}} className={styles.icon}></div>
                            <div className={styles.icon}></div>
                        </div>
                        <div className={styles.iconboxR}>
                            <div style={{marginBottom:'20px'}}  className={styles.icon}></div>
                            <div className={styles.icon}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.skillslide}>
                        <div className={styles.slide}>
                            <div className={styles.y}>C++</div>
                            <div className={styles.y}>C</div>
                            <div>JavaScript</div>
                            <div className={styles.y}>React</div>
                            <div className={styles.y}>CSS</div>
                            <div className={styles.y}>HTML</div>
                            <div className={styles.y}>C#</div>
                            <div className={styles.y}>Java</div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={change}>clickme!</button>
        </div>
    )
}

export default Skill;