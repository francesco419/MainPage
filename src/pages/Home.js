import Header from "./Header";
import styles from "./Home.module.css";
import Intro from "../objects/Intro";
import classNames from 'classnames';
import SideMenu from "../objects/SideMenu";
import { useScroll } from "../objects/useScroll";
import {useRef, useEffect} from "react";
import {useOnScreen} from "../objects/useOnScreen";
import ht from "../objects/picture/HTML.png";
import cs from "../objects/picture/CSS.png";
import js from "../objects/picture/JS.png";
import re from "../objects/picture/React.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Home(){
    useEffect(()=>{
        Aos.init({duration:1500 });
    },[])

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
                            <div data-aos="fade-right" className={classNames(styles.skillbox, styles.rightside)}>
                                <img src={js}></img>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                            </div>
                            <div data-aos="fade-left" className={classNames(styles.skillbox, styles.leftside)}>
                            <img src={ht}></img>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                            </div>
                            <div data-aos="fade-right" className={classNames(styles.skillbox, styles.rightside)}>
                            <img src={cs}></img>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                            </div>
                            <div data-aos="fade-left" className={classNames(styles.skillbox, styles.leftside)}>
                            <img src={re}></img>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                            </div>
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
                            <div className={styles.project}>
                                <div data-aos="fade-up" className={styles.pic}>
                                    <img src="https://picsum.photos/1000/500"/>
                                </div>
                                <div data-aos="fade-left" className={styles.intro}>
                                    <h1>유투브 클론 프로젝트</h1>
                                    <h2>React, Java Script</h2>
                                    <h3>리엑트를 사용하여 유튜브 전반적인 기능을동일하게 구현한 프로젝트입니다.</h3>
                                    <h3>리엑트를 사용한 페이지 전환 및 라이브러리에 대해 더욱 발전시킬 수 있었던 계기가 되었습니다.</h3>
                                </div>
                            </div>
                            <div className={styles.project}>
                                <div data-aos="fade-up" className={styles.pic}>
                                    <img src="https://picsum.photos/1000/500"/>
                                </div>
                                <div data-aos="fade-left" className={styles.intro}>
                                    <h1>유투브 클론 프로젝트</h1>
                                    <h2>React, Java Script</h2>
                                    <h3>리엑트를 사용하여 유튜브 전반적인 기능을동일하게 구현한 프로젝트입니다.</h3>
                                    <h3>리엑트를 사용한 페이지 전환 및 라이브러리에 대해 더욱 발전시킬 수 있었던 계기가 되었습니다.</h3>
                                </div>
                            </div>
                            <div className={styles.project}>
                                <div data-aos="fade-up" className={styles.pic}>
                                    <img src="https://picsum.photos/1000/500"/>
                                </div>
                                <div data-aos="fade-left" className={styles.intro}>
                                    <h1>유투브 클론 프로젝트</h1>
                                    <h2>React, Java Script</h2>
                                    <h3>리엑트를 사용하여 유튜브 전반적인 기능을동일하게 구현한 프로젝트입니다.</h3>
                                    <h3>리엑트를 사용한 페이지 전환 및 라이브러리에 대해 더욱 발전시킬 수 있었던 계기가 되었습니다.</h3>
                                </div>
                            </div>
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