import styles from "./Intro.module.css";
import Git from './picture/github.png';
import Lin from './picture/linkedin.png';
import email from './picture/email.png';

function Intro(){
    const name = "</about>";
    const emailcopy=()=>{
        navigator.clipboard.writeText('francesco419@naver.com');
        alert('Email Copied to Users Clipboard !');
    }
    return(
        <div className={styles.about}>
            <div className={styles.top}>
                <div className={styles.title}>{name}</div>
                <div>
                    <div style={{marginBottom:'20px'}}>
                        <span className={styles.title} style={{fontSize:'50px', marginRight:'20px'}}>이상현</span>
                        <span className={styles.boldwhite}>Lee Sang Hean</span>
                    </div>
                    <div>P.010 2922 1840</div>
                    <div style={{marginBottom:'40px'}}>E.francesco419@naver.com</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <div className={styles.left}>
                        <div className={styles.boldwhite}>Birthdate</div>
                        <div style={{marginBottom:'40px'}}>1994.06.07</div>
                        <div className={styles.boldwhite}>Education</div>
                        <div>한림대학교 / 2014-2022</div>
                        <span>전자공학과 전공</span><span style={{fontSize:'20px'}}>(춘천본교·졸업)</span>
                    </div>
                </div>
                <div className={styles.left}>
                    <div>
                        <div className={styles.boldwhite}>Certificate</div>
                        <div style={{marginBottom:'40px'}}>
                           <span>TOEIC / 910점</span><span style={{fontSize:'20px'}}>(22.04 - 24.04)</span> 
                        </div>     
                    </div>
                    <div>
                        <div className={styles.boldwhite}>Strength</div>
                        <div>▷더 좋은 제품과 코드를 위해 끊임없이 고민하고 실천하는 문제해결 능력</div>
                        <div>▷피드백을 듣고 개선하려는 노력과
    변화에 민첩하게 반응하는 자세</div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.innerCircle}>
                        <a href={"https://github.com/francesco419"}>
                            <img src={Git} alt='Github'/>
                        </a>
                    </div>
                    <div className={styles.innerCircle}>
                        <a href="https://www.linkedin.com/in/sang-hean-lee-109932221/">
                            <img src={Lin} alt='linkedin'/>
                        </a>
                    </div>
                    <div onClick={emailcopy} className={styles.innerCircle}>
                        <img src={email} alt='email'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;