import Project from "./Project.js";
import styles from "./Projectpage.module.css";

function Projectpage({popup, display, getPopUp}){
    const prjt = [0,1,2,3];
    const name='</projects>';
    return(
        <div className={styles.project}>
            <div className={styles.title}>{name}</div>
            {prjt.map((no)=>(
            <Project
            key={no}
            num={no}
            popup={popup}
            display={display}
            getPopUp={getPopUp}
            />
            ))}
            <a href="https://github.com/francesco419" className={styles.github}>
                See More at Github▷
            </a>
        </div>
    )    
}

export default Projectpage;