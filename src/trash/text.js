import styles from "./text.module.css";

function Scrolltop(){
    const OnClick=()=>{
        window.scroll({top:0,behavior:"smooth"});
    }
    return (
        <div>
            <button className={styles.scroll} onClick={OnClick}>
                A
            </button>
        </div>
    )
}

export default Scrolltop;