import React,{useState} from 'react';
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./css/App-dark.css";
import "./css/App-light.css";




const App = () => {
    const [theme, setTheme] = useState("light");

    console.log(`theme`, theme);
    const changeTheme = () => {
        if(theme === "light"){
            console.log(`should change to dark` );
            setTheme("dark")
        }else   {
            console.log("should change to light");
            setTheme("light")
        } 
    }

    return (
        <div className= {theme === "dark"? "ui container dark" : "ui container light"}>
            <Header theme={theme} setTheme={changeTheme} />
            <Menu theme={theme}/>
        </div>
    )
}

export default App
