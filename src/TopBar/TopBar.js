import React from "react";
import classes from './TopBar.module.css';

const TopBar = () => {
    return (
        <header >
            <nav className={classes.Topbar}>
                <img src="./amazonstandin.png" alt="Amazon Logo" />
            </nav>
        </header>
    );

}
export default TopBar;