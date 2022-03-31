import Header from "./Header";
import styles from "./Home.module.css";
import SkillBox from "../objects/SkillBox";
import Move from "../objects/Move";
import Intro from "../objects/Intro";
import {useScroll} from "../objects/useScroll";


function Home(){
    const {y}=useScroll();
    console.log(y);
    return(
        <div className={styles.cover}>
            <Header/>
            <img src="https://picsum.photos/1000/500"/>
        </div> 
    )
}

export default Home;