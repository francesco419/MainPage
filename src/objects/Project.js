import {useRef, useEffect, useState} from "react";
import styles from "./Project.module.css";
import {Link} from "react-router-dom";


function Project({num}){

    const prj = [
        {
            id:1,
            imgs:"https://picsum.photos/1000/500",
            title:"유투브 클론 프로젝트1",
            skill:"React, Java Script",
            text:"리엑트를 사용하여 유튜브 전반적인 기능을동일하게 구현한 프로젝트입니다\n리엑트를 사용한 페이지 전환 및 라이브러리에 대해 더욱 발전시킬 수 있었던 계기가 되었습니다."
        },
        {
            id:2,
            imgs:"https://picsum.photos/1000/500",
            title:"유투브 클론 프로젝트2",
            skill:"React, Java Script",
            text:"리엑트를 사용하여 유튜브 전반적인 기능을동일하게 구현한 프로젝트입니다\n리엑트를 사용한 페이지 전환 및 라이브러리에 대해 더욱 발전시킬 수 있었던 계기가 되었습니다."
        },
        {
            id:3,
            imgs:"https://picsum.photos/1000/500",
            title:"유투브 클론 프로젝트3",
            skill:"React, Java Script",
            text:"리엑트를 사용하여 유튜브 전반적인 기능을동일하게 구현한 프로젝트입니다\n리엑트를 사용한 페이지 전환 및 라이브러리에 대해 더욱 발전시킬 수 있었던 계기가 되었습니다."
        },
        {
            id:4,
            imgs:"https://picsum.photos/1000/500",
            title:"유투브 클론 프로젝트4",
            skill:"React, Java Script",
            text:"리엑트를 사용하여 유튜브 전반적인 기능을동일하게 구현한 프로젝트입니다\n리엑트를 사용한 페이지 전환 및 라이브러리에 대해 더욱 발전시킬 수 있었던 계기가 되었습니다."
        }
    ]

    return(
        <div className={styles.project}>
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