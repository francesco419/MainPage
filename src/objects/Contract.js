import styles from "./Contract.module.css";
import classNames from 'classnames';
import Git from './picture/github.png';
import Lin from './picture/linkedin.png';
import email from './picture/email.png';
import kakao from './picture/kakao.png';
import Aos from "aos";
import "aos/dist/aos.css";

function Contract(){
    const copy=()=>{
        alert("Copied!");
    }
    return(
        <div className={styles.box}>
            <div className={styles.circle}>
                <div data-aos="fade-up" className={classNames(styles.innerCircle, styles.a)}>
                    <a href={"https://github.com/francesco419"}>
                        <img src={Git}/>
                    </a>

                </div>
                <div data-aos="fade-up" className={classNames(styles.innerCircle, styles.b)}>
                    <a href="https://www.linkedin.com/in/sang-hean-lee-109932221/">
                        <img src={Lin}/>
                    </a>
                </div>
                <div data-aos="fade-up" className={classNames(styles.innerCircle, styles.c)}>
                    <span onClick={copy}>
                        <img src={email}/>
                    </span>
                </div>
                <div data-aos="fade-up" className={classNames(styles.innerCircle, styles.d)}>
                    <a href="">
                        <img src={kakao}/>
                    </a>
                </div>
                <div data-aos="fade-up" className={classNames(styles.innerCircle, styles.e)}>
                   <a href={"https://www.jobkorea.co.kr/</div>"}>
                       <img src={"https://image.rocketpunch.com/company/12850/jobkorea_logo.png?s=400x400&t=inside"}/>
                       </a> 
                </div>
            </div>
        </div>
    )
}

export default Contract;