import { useEffect } from "react";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Footer from "./footer";
import Header from "./header";

const Main =() => {
    useEffect(()=> {
        window.scrollTo(0,0);
    }, []);

    return(
        <main>
    
        <Home2/>
        <Home3/>
        <Home4/>
        
    
        </main>
    );
};

export default Main;