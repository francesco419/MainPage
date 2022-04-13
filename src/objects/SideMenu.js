import styles from "./SideMenu.module.css";
import { useScroll } from "./useScroll";
import {useEffect, useRef, useState} from "react";

function SideMenu(arr){
  const Moveto=(point)=>{
    window.scroll({top:point,behavior:"smooth"}); 
  }
  const {y}=useScroll();
  const BACKG = 'rgba(0, 0, 0, 0.678)'
  const [showbar,setShowBar]=useState(false);

  const showsidebar=()=>{
    if(window.scrollY>window.innerHeight){
      setShowBar(true);
    }else{
      setShowBar(false);
    }
  }
  window.addEventListener("scroll",showsidebar);

  return(
    <div className={styles.sidehead}>
      <div className={styles.inner}>
        <div className={styles.up} onClick={()=>Moveto(0)}>Up</div>
        <span style={arr.arr[0] ? {backgroundColor:BACKG} : null}>Intro</span>
        <span style={arr.arr[1] ? {backgroundColor:BACKG} : null}>Skills</span>
        <span style={arr.arr[2] ? {backgroundColor:BACKG} : null}>Project</span>
        <span style={arr.arr[3] ? {backgroundColor:BACKG} : null}>Comment</span>
        <div className={styles.down} onClick={()=>Moveto(5900)}>Down</div>
      </div>
    </div>
  )
}

export default SideMenu;