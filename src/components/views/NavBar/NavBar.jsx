import React from "react";

export default function NavBar(props) {
    return(
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div>
            <p className="bg-blue-200">MoviesDB</p>
        </div>
        <div>
            {props.isLoggedIn && <p>Logged In</p>}
            {!props.isLoggedIn && <p>Not Logged In</p>}
        </div>
    </nav>)
}