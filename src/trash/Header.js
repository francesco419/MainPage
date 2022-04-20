import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import img from "./smile.png";
import {Link} from "react-router-dom";
import classNames from 'classnames'

function Header(){
  const [headnav, setHeadNav]=useState(false);

  const changeheadercolor=()=>{
      if(window.scrollY>60){
        setHeadNav(true);
      }else{
        setHeadNav(false);
      }
  }

  useEffect(()=>changeheadercolor,[window.scrollY])

  const Moveto=(point)=>{
    window.scroll({top:point,behavior:"smooth"}); 
  } 

  window.addEventListener("scroll",changeheadercolor);

  return(
    <nav className={headnav ? classNames(styles.tophead, styles.active) : styles.tophead}>
        <div className={styles.topheadin}>
            <div className={styles.topheadmenu}>
              <div className={styles.menuicon}>
                <Link to={"/"}>
                  <img src={img} alt="logo"/>
                </Link>
              </div>
              <div className={styles.menulists}>
                <span onClick={()=>Moveto(950)}>ABCDEFG</span>
                <span onClick={()=>Moveto(1900)}>ABCDEFG</span>
                <span onClick={()=>Moveto(2900)}>ABCDEFG</span>
                <span onClick={()=>Moveto(3900)}>ABCDEFG</span>
                <span onClick={()=>Moveto(4850)}>ABCDEFG</span>
                <span onClick={()=>Moveto(5900)}>ABCDEFG</span>
              </div>
              <div className={styles.topheadprofile}>
                N
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Header;