import {useEffect, useState} from "react";
import { PieChart, Pie, Cell } from 'recharts';
import styles from "./ProjectDetail.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Carousel from "nuka-carousel";
import { useParams, Link, useLocation } from "react-router-dom";
import {ProjectDetailText} from "../objects/ProjectText.js";

let prePath = ''; // 컴포넌트 함수 외부에 위치

function ProjectDetail(){
    const {id} = useParams();
    const arr=["Youtube","tp_Greetings","tp_Movie","MainPage","tp_Calculator","WebClone_Instagram"];
    const [value,setValue] = useState([]);
    const [isprev,setIsprev]=useState(true);
    const [isnext,setIsnext]=useState(true);
    let location = useLocation();

    const getValue=async()=>{
        const json = await(await fetch(`https://api.github.com/repos/francesco419/${arr[id]}/languages`)).json();
        setValue(json);
        console.log(json)
    }//https://api.github.com/users/francesco419/repos

    const getnext=()=>{
        if(parseInt(id)===0){
            setIsprev(false);
        }
        if(parseInt(id)===arr.length-1){
            setIsnext(false);
        }
    }
    useEffect(()=>{
        if (prePath.indexOf('/Project/') !== -1) {
            console.log('새로고침');
            prePath = '';
            window.location.reload();
        }
        prePath = location.pathname;
        getnext();
        getValue();
        Aos.init({duration:2000 });
    },[location]);
    
    let javascript;
    let all;
    if(value.JavaScript===undefined){
        javascript = 0;
        all = value.CSS + value.HTML;
    }else{
        all = value.JavaScript + value.CSS + value.HTML;
        javascript = Math.floor((value.JavaScript/all)*100);
    }
    const cs = Math.floor((value.CSS/all)*100);
    const ht = Math.floor((value.HTML/all)*100);

    const COLORS = ['#ADF53E','#95CE29', '#CAE794'];
    const data01=[
        {
            "name":"JS",
            "value":javascript
        },
        {
            "name":"CSS",
            "value":cs
        },
        {
            "name":"HTML",
            "value":ht
        },
    ]
    
    return(
        <div className={styles.page}>
            <div className={styles.sideline}></div>
            <div className={styles.intro}>
                <div className={styles.pages}>
                    <div data-aos="fade-up" data-aos-once="true" className={styles.title}>{ProjectDetailText[id].name}</div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className={styles.detail}>
                        <div style={{marginRight:'50px'}}>
                            <div style={{color:'#3b5210'}}>Period</div>
                            <div style={{color:'#3b5210'}}>Program</div>
                            <div style={{color:'#3b5210'}}>Contribution</div>
                        </div>
                        <div>
                            <div>{ProjectDetailText[id].period}</div>
                            <div>{ProjectDetailText[id].program}</div>
                            <div>{ProjectDetailText[id].contribution}</div>
                            {ProjectDetailText[id].url ? <a href={ProjectDetailText[id].url} className={styles.pagelink}>See ProjectPage</a> : null}
                        </div>

                    </div>
                    <div className={styles.info}>
                        <div data-aos="fade-up" data-aos-delay="1000" data-aos-once="true" className={styles.text}>
                            {ProjectDetailText[id].text}
                        </div>
                        <div className={styles.pie}>
                            <PieChart width={330} height={320}>
                                <Pie 
                                data={data01} 
                                dataKey="value" 
                                nameKey="name" 
                                cx="50%" 
                                cy="50%" 
                                fill="#82ca9d" 
                                label={(data01)=>data01.name}
                                >
                                {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                </Pie>
                            </PieChart> 
                        </div>
                    </div>
                    {/* <a data-aos="fade-up" data-aos-delay="1000" data-aos-once="true" href={str[id].github} className={styles.git}>
                        <img src={github}/>
                    </a> */}
                </div>
            </div>
                <div className={styles.pages}>
                    <div data-aos="fade-right" data-aos-delay="1000" data-aos-once="true" className={styles.slide}>
                        <Carousel>
                            {(ProjectDetailText[id].img).map((image)=>(
                                <img src={image} alt={image}/>
                            ))}
                        </Carousel>
                    </div>
                    <div className={styles.button}>
                        <Link className={styles.Links} to={'/Mainpage'}>Back</Link>
                        {isprev ? (<Link className={styles.Links} to={`/Project/${(id-1)}`}>Prev</Link>) :<div>Prev</div>}
                        {isnext ? (<Link className={styles.Links} to={`/Project/${(parseInt(id)+1)}`}>Next</Link>) :<div>Next</div>}
                        <a href={ProjectDetailText[id].github} style={{margin:'0'}} className={styles.Links}>
                        Github
                        </a>
                    </div>
            </div>
        </div>
        
    )
}

export default ProjectDetail;