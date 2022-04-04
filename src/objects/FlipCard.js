import styles from "./FlipCard.module.css";

function FlipCard({icons,text}){
    return(
        <div className={styles.box}>
            <div className={styles.front}>
                <img  src={icons}/>
            </div>
            <div className={styles.back}>
                {text}
                <ul>
                    <li>1번스킬</li>
                    <li>2번스킬</li>
                    <li>3번스킬</li>
                    <li>4번스킬</li>
                    <li>5번스킬</li>
                    <li>6번스킬</li>
                </ul>
            </div>
        </div>
    )
}

export default FlipCard;

//배경, 이미지, 텍스트