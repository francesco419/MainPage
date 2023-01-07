import {useState, useEffect} from "react";

export const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
  };

/*   <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}></h1> */

{/* <h1 style={{ position: "fixed", color: y > 1000 ? "red" : "blue" }}>HI</h1>  
{y>200? window.scrollTo(100,500) : null} */}