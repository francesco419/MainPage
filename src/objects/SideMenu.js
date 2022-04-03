import styles from "./SideMenu.module.css";

function SideMenu(){
  const Moveto=(point)=>{
    window.scroll({top:point,behavior:"smooth"}); 
  } 
    return(
      <div className={styles.tophead}>
        <div>Up</div>
        <span onClick={()=>Moveto(950)}>ABCDEFG</span>
        <span onClick={()=>Moveto(1900)}>ABCDEFG</span>
        <span onClick={()=>Moveto(2900)}>ABCDEFG</span>
        <span onClick={()=>Moveto(3900)}>ABCDEFG</span>
        <span onClick={()=>Moveto(4850)}>ABCDEFG</span>
        <span onClick={()=>Moveto(5900)}>ABCDEFG</span>
        <div>Down</div>
      </div>
    )
}

export default SideMenu;