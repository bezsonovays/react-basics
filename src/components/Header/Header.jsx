import React from "react";
import  './Header.css';

function Header ({title}) {
    return (
        <div id="AppHeader">
            <div className="title">{title}</div>
        </div>
    )
}

export default Header;
