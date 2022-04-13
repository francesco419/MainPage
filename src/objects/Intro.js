import styles from "./Intro.module.css";
import Git from './picture/github.png';
import Lin from './picture/linkedin.png';
import email from './picture/email.png';
import kakao from './picture/kakao.png';

function Intro(){

    const str = "이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n"
    return(
        <div className={styles.split}>
            <div className={styles.intro}>
                <h2>Intro.</h2>
                <h1>LEE SANG HEAN</h1>
                <span>{str}</span>
                <div className={styles.contact}>
                    <div className={styles.innerCircle}>
                        <a href={"https://github.com/francesco419"}>
                            <img src={Git}/>
                        </a>
                    </div>
                    <div className={styles.innerCircle}>
                        <a>
                            <img src={email}/>
                        </a>
                    </div>
                    <div className={styles.innerCircle}>
                        <a href="">
                            <img src={kakao}/>
                        </a>
                    </div>
                    <div className={styles.innerCircle}>
                        <a href="https://www.linkedin.com/in/sang-hean-lee-109932221/">
                            <img src={Lin}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.intro}>
                <img src="https://picsum.photos/1000/500"/>
            </div>
        </div>
    )
}

export default Intro;