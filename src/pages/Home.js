import Header from "./Header";
import styles from "./Home.module.css";
import Intro from "../objects/Intro";
import classNames from 'classnames';
import SideMenu from "../objects/SideMenu";
import { useScroll } from "../objects/useScroll";
import {useRef, useEffect, useState} from "react";
import {useOnScreen} from "../objects/useOnScreen";
import ht from "../objects/picture/HTML.png";
import cs from "../objects/picture/CSS.png";
import js from "../objects/picture/JS.png";
import re from "../objects/picture/React.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Skill from "../objects/Skill";
import Project from "../objects/Project";

function Home(){
     useEffect(()=>{
        Aos.init({duration:1500 });
    },[])

    const skilltext = [
        {
            id:1,
            left:false,
            text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            imgs:js
        },
        {
            id:2,
            left:true,
            text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            imgs:ht
        },
        {
            id:3,
            left:false,
            text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            imgs:cs
        },
        {
            id:4,
            left:true,
            text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            imgs:re
        }
    ];

    const prj = [0,1,2,3];

    //const [test,ts]=useTT();
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const visible1=useOnScreen(ref1);
    const visible2=useOnScreen(ref2);
    const visible3=useOnScreen(ref3);
    console.log(visible3)
    const visible4=useOnScreen(ref4);

    const visarr=[visible1,visible2,visible3,visible4];

    return(
        <div className={styles.main}>
            {/* <Header/> */}
            <SideMenu arr={visarr} />
            <div>
                <div className={styles.cover}>
                <img src="https://picsum.photos/1000/500"/>
                </div> 
                <div  /* {...test} */className={styles.bodies}>
                    <div ref={ref1} className={classNames(styles.a, styles.box)}>
                        <Intro/>
                        </div>
                    <div ref={ref2} className={classNames(styles.b, styles.box)}>
                        {/* <Skillpart/> */}
                        <div>
                        {skilltext.map((skills)=>(
                            <Skill
                            id={skills.id}
                            left={skills.left}
                            text={skills.text}
                            imgs={skills.imgs}
                            />
                            ))}
                        </div>
                        <div data-aos="fade-up" className={styles.lefto}>
                            <img src={re}></img>
                            <img src={re}></img>
                            <img src={re}></img>
                            <img src={re}></img>
                        </div>
                    </div>
                    <div className={classNames(styles.c, styles.box)}>
                        <div>
                            <h1>PROJECT</h1>
                            {prj.map((num)=>(
                                <Project
                                num={num}
                                />
                            ))}
                            <a href="">
                                View All →
                            </a>
                        </div>
                    </div>
                    <div ref={ref4} className={classNames(styles.d, styles.box)}>
                        <h1><u>COMMENT</u></h1>
                        <div className={styles.commentbox}>
                            <div className={styles.commentinfo}>
                                <h2><u>Name</u></h2>
                                <input type="text" />
                                <h2><u>Password</u></h2>
                                <input type="password" />
                            </div>
                            <div className={styles.comment}>
                                <h2><u>comment</u></h2>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;