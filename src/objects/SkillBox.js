import Skills from "./Skills";
import styles from "./SkillBox.module.css";
import cclogo from "./picture/Cc.png";
import cplogo from "./picture/Cp.png";
import cslogo from "./picture/Cs.png";
import jvlogo from "./picture/jv.png";

function SkillBox(){
 const no =[0,1,2,3];
    return(
        <div className={styles.main}>
            <div className={styles.box}>
                <div className={styles.inner}>
                    <div className={styles.item}>
                        <Skills
                        num={no[0]}
                        text="HTML"
                        />
                        <Skills
                        num={no[1]}
                        text="CSS"
                        />
                    </div>
                    <div className={styles.item}>
                        <Skills
                        num={no[2]}
                        text="JavaScript"
                        />
                        <Skills
                        num={no[3]}
                        text="React"
                        />
                    </div>
                </div>
                <div className={styles.item2}>
                    <div><img src={cclogo} alt="C"/></div>
                    <div><img src={cplogo} alt="C++"/></div>
                    <div><img src={cslogo} alt="C#"/></div>
                    <div><img src={jvlogo} alt="JAVA"/></div>
                </div>
            </div>
        </div>
    )

}

export default SkillBox;