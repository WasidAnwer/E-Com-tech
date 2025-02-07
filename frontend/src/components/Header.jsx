import React from "react";
import "../assets/css/common/commons.css";
import "../assets/css/common/header.css";

function Header() {
    return (
        <header>
            <div className="main-header">
                <div className="text">
                    <h1> Welcome</h1>
                </div>
                <div className="icon-list">
                    <ul>
                        <li>darkmode</li>
                        <li>notification</li>
                        <li>setting</li>
                        <li>activity</li>
                        <li>profile</li>
                    </ul>
                </div>
                <form>
                    <div className="search-header">
                        <input type="search" id="mySearch" name="q" />
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header;