import styles from "./Project.module.css";
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import mv from "./picture/movie.PNG";
import pf from "./picture/portfolio.PNG";

function Project({id,num}){
    const prj = [
        {
            id:1,
            imgs:"https://picsum.photos/1000/500",
            title:"인스타웹클론",
            skill:"HTML, CSS",
            text:"인스타그램의 프로필 페이지를 클론한 프로젝트입니다."
        },
        {
            id:2,
            imgs:"https://user-images.githubusercontent.com/84317858/158579317-6d81584f-6cce-435f-b6d0-e3dc2c8065a3.PNG",
            title:"Greeting WebPage",
            skill:"HTML, CSS, JavaScript",
            text:"시간 및 날씨 정보와 할 일 등의 정보를 기록할 수 있는 웹페이지 프로젝트입니다."
        },
        {
            id:3,
            imgs:mv,
            title:"Movie Theater",
            skill:"HTML, CSS, JavaScript, REACT",
            text:"영화정보"
        },
        {
            id:4,
            imgs:pf,
            title:"포트폴리오",
            skill:"HTML, CSS, JS, REACT",
            text:"개인 포트폴리오를 제작한 프로젝트입니다."
        }
    ]

    return(
        <div id={id} className={styles.project}>
            <div data-aos="fade-up" className={styles.pic}>
                <img src={prj[num].imgs}/>
            </div>
            <div data-aos="fade-left" className={styles.intro}>
                <h1>{prj[num].title}</h1>
                <h2>{prj[num].skill}</h2>
                <h3>{prj[num].text}</h3>
                <h2><Link className={styles.Links} to={`/Project/${prj[num].id}`}>Link</Link></h2>
            </div>
        </div>
    )
}

export default Project;