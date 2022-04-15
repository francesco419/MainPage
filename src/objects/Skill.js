import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Skill.module.css";

function Skill({id,left,text,imgs}){
    return(
        <div>
            {left ? (
                <div id={id} data-aos="fade-right" style={{margin:"40px auto 40px auto"}} className={styles.skillbox}>
                    <img src={imgs}></img>
                    <div>{text}</div>
                </div>
            ):(
            <div id={id} data-aos="fade-left" style={{margin:"40px auto 40px auto"}} className={styles.skillbox}>
                <img src={imgs}></img>
                <div>{text}</div>
            </div>
            )}
        </div>
    )
}

export default Skill;