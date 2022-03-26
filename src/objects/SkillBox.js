import Skills from "./Skills";
import styles from "./SkillBox.module.css";

function SkillBox(){
 const no =[0,1,2,3];
    return(
        <div className={styles.box}>
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
    )

}

export default SkillBox;