import React, { useEffect } from "react";
import axios from "axios";
import {API_KEY,API_URL_MOVIE} from "../../config/API.js"
import NavBar from "../NavBar/NavBar.jsx";
import Card from "../Cards/Card.jsx";
import { Row } from "antd";


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

    let cardsArray=[]

    for (let i=0;i<4;i++){
        cardsArray.push(<Card />)
    }

    return (
        <div>
            <NavBar isLoggedIn={true}></NavBar>
            <Row gutter={[16,16]}>
                <React.Fragment key={4}>
                    {cardsArray}
                </React.Fragment>
            </Row>
        </div>
    )


}