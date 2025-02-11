import React from "react";
import "../assets/css/common/login.css";
//login section
function Login() {
    return (
        <div className="login">
            <h2>Login</h2>
            <p>
                Not a member? <span>Create account</span>
            </p>
            <div className="container">
                <form>
                    <div className="input-box">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
