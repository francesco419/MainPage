import FlipCard from "./FlipCard";
import styles from "./Skillpart.module.css";
import ht from "./picture/HTML.png";
import cs from "./picture/CSS.png";
import js from "./picture/JS.png";
import re from "./picture/React.png";
import Cc from "./picture/Cc.png";
import Cp from "./picture/Cp.png";
import Cs from "./picture/Cs.png";
import Jv from "./picture/jv.png";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skillpart(){
    useEffect(()=>{
        Aos.init({duration:2000 });
    },[])
    const [image,setImage]=useState([
        {
            pic:ht,
            name:"HTML"
        },
        {
            pic:cs,
            name:"CSS"
        },
        {
            pic:js,
            name:"JavaScript"
        },
        {
            pic:re,
            name:"ReactJS"
        }
    ]);
    const [icon,setIcon]=useState([Cc,Cp,Cs,Jv]);
    return(
        <div className={styles.main}>
            <div className={styles.fullbox}>
                <div data-aos="fade-up" className={styles.skillbox}>
                    {image.map((item)=>(
                        <FlipCard
                        icons={item.pic}
                        text={item.name}
                        />
                    ))}
                </div>
                <div className={styles.leftover}>
                    <div data-aos="fade-up" className={styles.overbox}>
                        {icon.map((icons)=>(
                            <div>
                                <img src={icons}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skillpart;