import React from "react";
import NavBar from "../NavBar/NavBar"
import "./login.css"

export default function Login() {
    return (
        <div>
            <NavBar isLoggedIn={true}/>
            {/* {<div className="form-div">} */}
                <form>
                    <div>
                        <h1>Sign in</h1>
                        <input type="text" placeholder="Username" name="username" style={{border:"1px sloid black"}}></input>
                        <br/>
                        <input type="text" placeholder="Password" name="password"></input>
                        <br/><br/>
                        <button type="submit" className="submit-button">Sign-in</button>
                    </div>
                </form>

            {/* {</div>} */}
        </div>
    )
}