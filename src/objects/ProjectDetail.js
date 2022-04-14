import {useRef, useEffect, useState} from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styles from "./ProjectDetail.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Carousel from "nuka-carousel";
import { useParams, Link, useLocation } from "react-router-dom";
import github from "./picture/github.png";
let prePath = ''; // 컴포넌트 함수 외부에 위치

function ProjectDetail(){
    const {id} = useParams();
    const arr=["MainPage","tp_Greetings","tp_Movie","WebClone_Instagram","tp_Calculator"];
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
        if(parseInt(id)==0){
            setIsprev(false);
        }
        if(parseInt(id)==arr.length-1){
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
    },[location])
    

    const str = [
        {
            name:"포트폴리오 프로젝트",
            text:'이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.',
            img:"c",
            url:"d",
            github:"https://github.com/francesco419/MainPage"
        },
        {
            name:"Greeting",
            text:'이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.',
            img:"c",
            url:"d",
            github:"https://github.com/francesco419/tp_Greetings"
        },
        {
            name:"영화표시",
            text:'이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.',
            img:"c",
            url:"d",
            github:"https://github.com/francesco419/tp_Movie"
        },
        {
            name:"인스타그램 웹클론",
            text:'이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.',
            img:"c",
            url:"d",
            github:"https://github.com/francesco419/WebClone_Instagram"
        },
        {
            name:"Calculator",
            text:'이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.\n이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다. 이상현 포트폴리오에 오신 걸 환영합니다.',
            img:"c",
            url:"d",
            github:"https://github.com/francesco419/tp_Calculator"
        }
    ]
    
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

    const COLORS = ['#FFBB28','#0088FE', '#FF0000'];
    const data01=[
        {
            "name":"JavaScript",
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
    Aos.refresh();

    return(
        <div className={styles.page}>
            <div className={styles.intro}>
                <div data-aos="fade-up" className={styles.name}>
                    PROJECT INFO
                    <div data-aos="fade-up" className={styles.subname}>{str[id].name}
                </div>
                </div>
                <div className={styles.info}>
                    <div data-aos="fade-up" data-aos-delay="1000" className={styles.text}>
                        {str[id].text}
                    </div>
                    <div className={styles.pie}>
                        <PieChart width={300} height={300}>
                            <Pie 
                            data={data01} 
                            dataKey="value" 
                            nameKey="name" 
                            cx="50%" 
                            cy="50%" 
                            innerRadius={80} 
                            outerRadius={100} 
                            fill="#82ca9d" 
                            label={true}
                            >
                            {data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart> 
                    </div>
                </div>
                <a data-aos="fade-up" data-aos-delay="1000" href={str[id].github} className={styles.git}>
                    <img src={github}/>
                </a>
                <div data-aos="fade-right" data-aos-delay="2000" className={styles.slide}>
                    <Carousel>
                        <img src="https://picsum.photos/1000/400"/>
                        <img src="https://picsum.photos/1000/500"/>
                        <img src="https://picsum.photos/1000/600"/>
                        <img src="https://picsum.photos/1000/700"/>
                        <img src="https://picsum.photos/1000/800"/>
                        <img src="https://picsum.photos/1000/900"/>
                    </Carousel>
                </div>
                <div className={styles.button}>
                    {isprev ? (<Link className={styles.Links} to={`/Project/${(id-1)}`}>prev</Link>) :<div>NoPrev</div>}
                    {isnext ? (<Link className={styles.Links} to={`/Project/${(parseInt(id)+1)}`}>next</Link>) :<div>NoNext</div>}
                </div>
            </div>
        </div>
        
    )
}

export default ProjectDetail;