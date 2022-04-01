import "./text.css";

function Scrolltop(){
    const OnClick=()=>{
        window.scroll({top:0,behavior:"smooth"});
    }
    return (
        <div>
            <button onClick={OnClick}>
                A
            </button>
        </div>
    )
}

export default Scrolltop;