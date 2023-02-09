import styles from "./ProjectPopUp.module.css";
import { useEffect } from "react";
import ProjectDetail from "./ProjectDetail";

function ProjectPopUp({popup,display,getDisplay}){
    const doNull=()=>{
        getDisplay(display);
    }

    useEffect(()=>{

    },[popup])

    return(
        <div className={styles.pu_container} style={display ? {display:'flex'} : {display:'none'}}>
            <div className={styles.pu_clickend} onClick={doNull}></div>
            <div id="page" className={styles.pu_page}>
                <ProjectDetail popup={popup}/>
            </div>
        </div>
    )
}

export default ProjectPopUp;