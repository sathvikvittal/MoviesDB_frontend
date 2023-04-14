import React from "react";

export default function NavBar(props) {
    return(
        <nav className="flex items-center justify-between flex-wrap bg-stone-800 p-8">
            <div className="flex items-center flex-shrink-0 text-white mr-8">
                <span className="font-semibold text-xl tracking-tight">MoviesDB</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                </div>
                {props.isLoggedIn && 
                <div>
                    <a href="#" className="inlinetext-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 m-4">Register</a>
                    <a href="#" className="inlinetext-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
                </div>
                }
            </div>
        </nav>
    )
}