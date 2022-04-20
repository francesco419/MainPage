import styles from "./Project.module.css";
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import mv from "./picture/movie.PNG";
import pf from "./picture/portfolio.PNG";

function Project({id,num}){
    const prj = [
        {
            id:0,
            imgs:"https://picsum.photos/1000/500",
            eng:'Insta Web Clone',
            title:"인스타웹클론",
            text:"인스타그램의 프로필 페이지를 클론한\n프로젝트로 HTML과 CSS를 사용하여\n제작했습니다."
        },
        {
            id:1,
            imgs:"https://user-images.githubusercontent.com/84317858/158579317-6d81584f-6cce-435f-b6d0-e3dc2c8065a3.PNG",
            eng:'Greeting Web Page',
            title:"Greeting WebPage",
            text:"시간 및 날씨 정보와 할일 들의 정보를\n기록할 수 있는 웹페이지 프로젝트로 HTML,\nCSS와 JavaScript로 제작했습니다."
        },
        {
            id:2,
            imgs:mv,
            eng:'Movie Theater',
            title:"영화 모음집",
            text:"영화의 간단한 내용과 러닝타임, 포스터와\n배우의 정보를 담아 다양한 영화를 소개하는\n영화 모음 프로젝트로 HTML, CSS,\nJavaScript 와 React를 사용해 제작했습니다."
        },
        {
            id:3,
            imgs:pf,
            eng:'My Portfolio',
            title:"나의 포트폴리오",
            text:"개인 포트폴리오를 제작한 프로젝트로\n HTML, CSS, JS와 REACT를 사용했습니다"
        }
    ]

    return(
        <div id={id} className={styles.project}>
            <div data-aos="fade-up" className={styles.pic}>
                <img src={prj[num].imgs}/>
            </div>
            <div data-aos="fade-left" className={styles.intro}>
                <div className={styles.eng}>{prj[num].eng}</div>
                <div className={styles.boldwhite}>{prj[num].title}</div>
                <div>{prj[num].text}</div>
                <div style={{margin:'30px 0'}}><Link className={styles.Links} to={`/Project/${prj[num].id}`}>view detail▷</Link></div>
            </div>
        </div>
    )
}

export default Project;