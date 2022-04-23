import { useEffect, useRef, useState } from "react";
import styles from "./Loading.module.css";
import useInterval from "use-interval";

function Loading(){
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);
    useEffect(()=>{
        setB(b+1);
    },[a])
    useInterval(()=>{
        if(a===99){
            return;
        }else{
            aaa();
        }
    },60);
    const aaa=()=>{
        setA(a+1);
    }
    return(
        <div style={{animationDelay:'7s'}} className={styles.page}>
            <div style={{marginBottom:'20px'}}>{b}%</div>
            <div className={styles.box}>
                <div className={styles.load}>
                    <div style={{animationDelay:'1s'}} className={styles.lineF}></div>
                    <div style={{animationDelay:'3s'}} className={styles.lineB}></div>
                    <div style={{animationDelay:'5s'}} className={styles.lineF}></div>
                    <div style={{animationDelay:'4s'}} className={styles.lineB}></div>
                    <div style={{animationDelay:'2s'}} className={styles.lineF}></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;

