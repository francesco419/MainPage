import styles from "./SideMenu.module.css";
import { useScroll } from "./useScroll";
import {useEffect, useRef, useState} from "react";
import {ReactComponent as Up} from "./picture/chevron-up.svg";
import {ReactComponent as Down} from "./picture/chevron-down.svg";

function SideMenu({arr}){
  const [showbar,setShowBar]=useState(false);
  const [offset,setOffset]=useState([]);
  const {y}=useScroll();
  useEffect(()=>{
    setOffset([arr[0].current.offsetTop,arr[1].current.offsetTop,arr[2].current.offsetTop]);
  },[arr]);
  const Moveto=(point)=>{
    console.log(offset,y)
    if(point===0){
      if(y<offset[1]){
        window.scroll({top:0,behavior:"smooth"});
      }else if(y>=offset[0]&&y<=offset[2]){
        window.scroll({top:offset[0],behavior:"smooth"});
      }else if(y>=offset[2]){
        window.scroll({top:offset[1],behavior:"smooth"});
      }
    }
    if(point===1){
      if(y<offset[0]){
        window.scroll({top:offset[0],behavior:"smooth"});
      }else if(y>=offset[0]&&y<=offset[2]){
        window.scroll({top:offset[1],behavior:"smooth"});
      }else if(y>=offset[1]){
        window.scroll({top:offset[2],behavior:"smooth"});
      }
    }
  }

  return(
    <div className={styles.sidehead}>
      <div className={styles.inner}>
        <div onClick={()=>Moveto(0)}>
          <Up className={styles.up}/>
          </div>
           <span className={styles.ssp} style={y>offset[0] ? {height:'50px'} : {height:'100px'}}></span>
        <div onClick={()=>Moveto(1)}>
          <Down className={styles.down}/>
        </div>
      </div>
      <div className={styles.updown}>
        <div style={{backgroundColor:'#888888', width:'30px',height:'30px',borderRadius:'50%',border:'1px solid white'}} onClick={()=>Moveto(0)}>
          <Up className={styles.low}/>
        </div>
        <div style={{height:'10px'}}></div>
        <div style={{backgroundColor:'#888888', width:'30px',height:'30px',borderRadius:'50%',border:'1px solid white'}} onClick={()=>Moveto(1)}>
          <Down className={styles.low}/>
        </div>
      </div>
    </div>
  )
}

export default SideMenu;