import React from "react";
import NavBar from "../NavBar/NavBar";
import "./register.css"

export default function Register(){
    return (
        <div>
            <NavBar isLoggedIn={true} />
            <form>
                <label for="firstName">Firstname</label>
                <br/>
                <input type="text" placeholder="First Name" name="firstName"></input>
                <br/><br/>

                <label for="lastName">LastName</label>
                <br/>
                <input type="text" placeholder="Last Name" name="lastName"></input>
                <br/><br/>
                
                <label for="email">Email</label>
                <br/>
                <input type="email" placeholder="Email" name="email"></input>
                <br/><br/>

                <label for="username">Username</label>
                <br/>
                <input type="text" placeholder="username" name="username"></input>
                <br/><br/>

                <label for="password">Password</label>
                <br/>
                <input type="text" placeholder="password" name="password"></input>
                <br/><br/>

                <label for="picture">Profile Picture</label>
                <br/>
                <input type="file" name="picture"></input>
                <br/><br/>
                <button type="submit" className="submitButton">Submit</button>

            </form>
        </div>
    )
}