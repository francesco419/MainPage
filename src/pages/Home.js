import Header from "./Header";
import SkillBox from "../objects/SkillBox";
import styles from "./Home.module.css";


function Home(){
    return(
        <div>
            <Header/>      
            <main>
                <div className={styles.mainimg}>
                    <img src="https://picsum.photos/1000/500"/>
                </div>
                <div className={styles.intro}>Intro
                    <div>a</div>
                </div>
                <div className={styles.about}>aoubt me....</div>
                <div className={styles.main}>
                    <SkillBox/>
                </div>
            </main>
            <footer>
                Footer
            </footer>
        </div> 
    )
}

export default Home;