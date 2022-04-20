import Project from "./Project.js";
import styles from "./Projectpage.module.css";

function Projectpage(){
    const prjt = [0,1,2,3];
    const name='</projects>';
    return(
        <div className={styles.project}>
            <div className={styles.title}>{name}</div>
            {prjt.map((no)=>(
            <Project
            key={no}
            num={no}
            />
            ))}
        </div>
    )    
}

export default Projectpage;