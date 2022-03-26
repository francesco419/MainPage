import Header from "./Header";
import SkillBox from "../objects/SkillBox";
import styles from "./Home.module.css";


function Home(){
    return(
        <div>
            <Header/>      
            <main>
                <div className={styles.mainimg}></div>
                <div className={styles.main}>
                    <SkillBox/>
                </div>
            </main>
            <footer>
                a
            </footer>
        </div> 
    )
}

export default Home;