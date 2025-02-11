import React from "react";
import "../assets/css/common/nav.css";
import markup from "../assets/image/markup.png";

function Navbar (){
    return(
        <nav className="markup-nav">
            <div className="markup-logo">
                <img src={markup} alt="" />
            </div>
            <ul className="marknav">
                <li><i class="fa-solid fa-list"></i>Dashboard</li>
                <li><i class="fa-solid fa-shirt"></i>Products</li>
                <li><i class="fa-solid fa-notes-medical"></i>Category</li>
                <li><i class="fa-solid fa-bag-shopping"></i>Orders</li>
                <li><i class="fa-solid fa-cube"></i>Inventery</li>
                <li><i class="fa-solid fa-cart-shopping"></i>Purchases</li>
                <li><i class="fa-solid fa-gear"></i>Setting</li>
            </ul>
        </nav>
    )
}

export default Navbar;