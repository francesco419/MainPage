import {useEffect, useState} from "react";
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
    },[location])
    

    const str = [
        {
            name:"Instagram Clone",
            text:'이 프로젝트는 프론트엔드를 배우는 과정에서, 현재 많이 사용되고 있는 웹사이트에서 어떠한 방식으로 구조 및 레이아웃을 구현하는지 알아 보기위한 프로젝트로서, 인스타그램의 프로필 페이지의 외형적인 것에 중점을 두고 제작한 클론페이지입니다.',
            img:"c",
            url:null,
            github:"https://github.com/francesco419/WebClone_Instagram"
        },
        {
            name:"Greeting",
            text:'이 프로젝트는 프론트엔드를 배우는 과정에서, 현재 많이 사용되고 있는 웹사이트에서 어떠한 방식으로 구조 및 레이아웃을 구현하는지 알아 보기위한 프로젝트로서, 인스타그램의 프로필 페이지의 외형적인 것에 중점을 두고 제작한 클론페이지입니다..',
            img:"c",
            url:null,
            github:"https://github.com/francesco419/tp_Greetings"
        },
        {
            name:"Movie Theater",
            text:'NomadCoder의 강의의 수강 결과물로서 만들게 된 프로젝트로서, React를 처음으로 사용한 프로젝트입니다. 현재 가장 많이 사용되고 있는 라이브러리인 만큼, 여러 가지 편의성 및 기능들을 사용해보면서 왜 많이 사용되고 있는지를 직접 알 수 있었던 프로젝트였다. 특히 라우트 기능을 통해서 페이지 로딩이 아닌 페이지전환과 같은 기능의 유용성을 알게 된 프로젝트입니다.',
            img:"c",
            url:"https://francesco419.github.io/tp_Movie",
            github:"https://github.com/francesco419/tp_Movie"
        },
        {
            name:"Portfolio",
            text:'첫 프로젝트로 HTML, CSS, JavsScript의 사용 및 경험을 목표로한 프로젝트로서,\n기본적인 계산기의 외형 및 레이아웃을 HTML, CSS로 구현하고 계산식의 처리를 Javascript를 통하여 구현했습니다\navascript를 사용한 계산처리방식에서 사칙연산 순서에 의한 연산을 구현하였습니다.',
            img:"c",
            url:"https://francesco419.github.io/MainPage",
            github:"https://github.com/francesco419/MainPage"
        },
        {
            name:"Calculator",
            text:'첫 프로젝트로 HTML, CSS, JavsScript의 사용 및 경험을 목표로한 프로젝트로서,\n기본적인 계산기의 외형 및 레이아웃을 HTML, CSS로 구현하고 계산식의 처리를 Javascript를 통하여 구현했습니다\navascript를 사용한 계산처리방식에서 사칙연산 순서에 의한 연산을 구현하였습니다.',
            img:"c",
            url:null,
            github:"https://github.com/francesco419/tp_Calculator"
        },
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
    
    return(
        <div className={styles.page}>
            <div className={styles.intro}>
                <div data-aos="fade-up" className={styles.name}>PROJECT INFO</div>
                    <div data-aos="fade-up" className={styles.subname}>{str[id].name}
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