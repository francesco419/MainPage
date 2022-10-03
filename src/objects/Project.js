import styles from "./Project.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import {ProjectTXT} from "./ProjectText.js";

function Project({id,num,popup,display,getPopUp}){
    useEffect(()=>{
        Aos.init({duration:1000 });
    },[]);

    const onClick=()=>{
        getPopUp(ProjectTXT[num].id,display);
    }

    return(
        <div id={id} className={styles.project}>
            <div className={styles.split}>
                <div className={styles.pic}>
                    <img src={ProjectTXT[num].imgs} alt={ProjectTXT[num].eng}/>
                </div>
                <div className={styles.intro}>
                    <div className={styles.eng}>{ProjectTXT[num].eng}</div>
                    <div className={styles.boldwhite}>{ProjectTXT[num].title}</div>
                    <div>{ProjectTXT[num].text}</div>
                    {/* {window.outerWidth<=768 ? 
                    <div style={{margin:'30px 0'}}><Link className={styles.Links} to={`/Project/${ProjectTXT[num].id}`}>view detail▷</Link></div> 
                    : 
                    <div style={{margin:'30px 0'}} onClick={onClick}>view detail▷</div>
                } */}
                <div style={{margin:'30px 0'}} onClick={onClick}>view detail▷</div>
                </div>
            </div>
        </div>
    )
}

export default Project;