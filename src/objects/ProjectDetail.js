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
            name:"Instagram\nWeb Clone\nProject",
            text:'이 프로젝트는 프론트엔드를 배우는 과정에서, 현재 많이 사용되고 있는\n 웹사이트에서 어떠한 방식으로 구조 및 레이아웃을 구현하는지 알아 보기위한 프로젝트로서,\n 인스타그램의 프로필 페이지의 외형적인 것에 중점을 두고 제작한 클론페이지입니다.',
            img:"c",
            url:null,
            github:"https://github.com/francesco419/WebClone_Instagram",
            contribution:'100%',
            program:'HTML, CSS',
            period:'1 week'
        },
        {
            name:"Greeting\nWeb Page\nProject",
            text:'NomadCoder의 강의를 수강하며 시작하게된 프로젝트로서, OpenWeatherMap API를\n 통해 위치정보에따른 날씨정보 가져오기, 할 일 정보를 입력받아 로컬스토리지에\n 저장하기 및 삭제 등의 기능을 사용하여 페이지를 제작하였습니다.\n 처음으로 API를 사용하였으며, 이를 계기로 다른 API들을 이용해 실질적으로\n 다양한 페이지를 제작하고자 하는 생각?을 하였습니다. 또한 백엔드를 사용하지 않고,\n 로컬스토리지를 사용함으로서 기본적인 데이터저장을 경험해볼 수 있어 백엔드의\n 필요성을 더욱 느끼게 된 프로젝트이다.',
            img:"c",
            url:null,
            github:"https://github.com/francesco419/tp_Greetings",
            contribution:'100%',
            program:'HTML, CSS, JS',
            period:'1 week'
        },
        {
            name:"Movie Theater\nProject",
            text:'NomadCoder의 강의의 수강 결과물로서 만들게 된 프로젝트로서, React를 처음으로\n 사용한 프로젝트입니다. 현재 가장 많이 사용되고 있는 라이브러리인 만큼,\n 여러 가지 편의성 및 기능들을 사용해보면서 왜 많이 사용되고 있는지를\n 직접 알 수 있었던 프로젝트였습니다. 특히 라우트 기능을 통해서\n 페이지 로딩이 아닌 페이지전환과 같은 기능의 유용성을 알게 된 프로젝트입니다.',
            img:"c",
            url:"https://francesco419.github.io/tp_Movie",
            github:"https://github.com/francesco419/tp_Movie",
            contribution:'100%',
            program:'HTML, CSS, JS,REACT',
            period:'1 week'
        },
        {
            name:"Personal\nPortfolio\nProject",
            text:'간략화한 자기소개 페이지로서 개인정보 및 보유 스킬과 작업한 프로젝트 등의\n정보들을 담은 포트폴리오 프로젝트입니다. 이 프로젝트를 진행함에 따라 외부의\n여러 다양한 라이브러리 및 hook을 사용해보게 되었고 애니메이션 사용이\n 능숙해졌으며 여러 기술들을 사용하는 만큼 발생하는 여러 가지 오류도\n 해결하고 실질적으로 모든 부분에 대해서 기획 제작을 진행한 처음의\n 프로젝트이므로, 이전 작업들을 통틀어 가장 많은 경험을 쌓게 된 프로젝트입니다.',
            img:"c",
            url:"https://francesco419.github.io/MainPage",
            github:"https://github.com/francesco419/MainPage",
            contribution:'100%',
            program:'HTML, CSS, JS, REACT',
            period:'3 week'
        },
        {
            name:"Calculator\nProject",
            text:'첫 프로젝트로 HTML, CSS, JavsScript의 사용 및 경험을 목표로한 프로젝트로서,\n기본적인 계산기의 외형 및 레이아웃을 HTML, CSS로 구현하고 계산식의\n 처리를 Javascript를 통하여 구현했습니다avascript를 사용한\n 계산처리방식에서 사칙연산 순서에 의한 연산을 구현하였습니다.',
            img:"c",
            url:null,
            github:"https://github.com/francesco419/tp_Calculator",
            contribution:'100%',
            program:'HTML, CSS, JS',
            period:'1 week'
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
                    <div data-aos="fade-up" className={styles.title}>{str[id].name}</div>
                    <div data-aos="fade-up" data-aos-delay="500" className={styles.detail}>
                        <div style={{marginRight:'50px'}}>
                            <div style={{color:'#3b5210'}}>Period</div>
                            <div style={{color:'#3b5210'}}>Program</div>
                            <div style={{color:'#3b5210'}}>Contribution</div>
                        </div>
                        <div>
                            <div>{str[id].period}</div>
                            <div>{str[id].program}</div>
                            <div>{str[id].contribution}</div>
                        </div>

                    </div>
                    <div className={styles.info}>
                        <div data-aos="fade-up" data-aos-delay="1000" className={styles.text}>
                            {str[id].text}
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
                    <a data-aos="fade-up" data-aos-delay="1000" data-aos-once="true" href={str[id].github} className={styles.git}>
                        <img src={github}/>
                    </a>
                </div>
            </div>
                <div className={styles.pages}>
                    <div data-aos="fade-right" data-aos-delay="2000" data-aos-once="true" className={styles.slide}>
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
                        <Link className={styles.Links} to={'/Mainpage'}>Back</Link>
                        {isprev ? (<Link className={styles.Links} to={`/Project/${(id-1)}`}>Prev</Link>) :<div>Prev</div>}
                        {isnext ? (<Link className={styles.Links} to={`/Project/${(parseInt(id)+1)}`}>Next</Link>) :<div>Next</div>}
                    </div>
            </div>
        </div>
        
    )
}

export default ProjectDetail;