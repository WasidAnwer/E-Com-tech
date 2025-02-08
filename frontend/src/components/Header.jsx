import React from "react";
import "../assets/css/common/commons.css";
import "../assets/css/common/header.css";

function Header() {
    return (
        <main>
            <header>
                <strong className="welcome">Welcom to admin</strong>
                <div className="icon-list">
                    <ul>
                        <li><i class="fa-solid fa-bell"></i></li>
                        <li><i class="fa-solid fa-cart-flatbed-suitcase"></i></li>
                        <li><i class="fa-solid fa-location-dot"></i></li>
                    </ul>

                </div>

                <div className="pro-details">
                    <div className="dropdown-img">

                    </div>
                    <strong>wasid anwer</strong>
                    <ul className="drop-down">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </header>
        </main>
    )
}

export default Header;