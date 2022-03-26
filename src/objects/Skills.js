import styles from "./Skills.module.css";
import PropTypes from "prop-types";
import ht from "./HTML.png";
import cs from "./CSS.png";
import js from "./JS.png";
import re from "./React.png";
import { useEffect, useState } from "react";

function Skills({num,text}){
    const img = [ht,cs,js,re];
    const [image,setImage]=useState();
    useEffect(()=>{
        setImage(image=>img[num]);
    },[])
    return(
        <div className={styles.Skills}>
            <div className={styles.icon}>
                <img src={image}/>
                <div className={styles.name}>
                    {text}
                </div>
            </div>
        </div>
    )
}

Skills.propTypes = {
    text : PropTypes.string.isRequired,
    num : PropTypes.number.isRequired,
}

export default Skills;