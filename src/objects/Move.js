import {useRef, useEffect} from "react";
import image from "./picture/HTML.png";
import cs from "./picture/CSS.png";
import js from "./picture/JS.png";
import re from "./picture/React.png";
import styles from "./Move.module.css";
import { faGroupArrowsRotate } from "@fortawesome/free-solid-svg-icons";



function Move(){
    return(
        <div  className={styles.box}>
            <div>
                <img  src={image}/>
            </div>
            <div>
                <img src={cs}/>
            </div>
            <div>
                <img src={js}/>
            </div>
            <div>
                <img src={re}/>
            </div>
        </div>
    )
}

export default Move;