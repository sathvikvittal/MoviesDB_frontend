import React, { useEffect } from "react";
import axios from "axios";
import {API_KEY,API_URL_MOVIE} from "../../config/API.js"
import NavBar from "../NavBar/NavBar.jsx";


export default function Home(){
//     const [popularMovies,setpopularMovies] = React.useState([]);
//     // const [upcomingMovies,setUpcomingMovies] = React.useState([]);
//     // const [popularTV,setpopularTV] = React.useState([]);
//     // const [upcomingTV,setUpcomingTV] = React.useState([]);
//     const [mainMovie,setMainMovie] = React.useState(null)
    

//     useEffect(() => {
//         axios.get(`${API_URL_MOVIE}popular?api_key=${API_KEY}&language=en-US&page=1`)
//         .then(results => results.json())
//         .then(results => {
//             setpopularMovies([...popularMovies,...results]);
//             setMainMovie(popularMovies[0]);
//         })

//     },[]);

    // useEffect(() => {
    //     axios.get(`${API_URL_MOVIE}upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    //     .then(results => results.json())
    //     .then(results => {
    //         setUpcomingMovies([...upcomingMovies,results]);
    //     });
    // },[]);

    // useEffect(() => {
    //     axios.get(`${API_URL}upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    //     .then(results => results.json())
    //     .then(results => {
    //         setUpcomingMovies([...upcomingMovies,results]);
    //     });
    // },[]);

    // useEffect(() => {
    //     axios.get(`${API_URL}upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    //     .then(results => results.json())
    //     .then(results => {
    //         setUpcomingMovies([...upcomingMovies,results]);
    //     });
    // },[]);

    return (
        <NavBar isLoggedIn={true}></NavBar>
    )


}