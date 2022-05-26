import React from 'react';
import "../css/Header.css";
// import "../css/App-dark.css";
// import "../css/App-light.css";

const Header = (props) => {
    console.log("Header props", props);
    return (
        <div >
            <h1 className={props.theme === "dark"? "ui header title-dark" : "ui header title-light" }>Poplavskii Burger</h1>
            <div className="ui toggle checkbox right floated">
                <input type="checkbox" name="public" onChange={props.setTheme}  />
                    <label className={props.theme === "dark"? "theme-label-darktheme" : "theme-label-light" }>Dark mode</label>
</div>
            </div>
    )
}

export default Header
