import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar"
import axios from "axios";
import { API_KEY,API_URL_MOVIE } from "../../config/API";


export default function Movie(props){
    const [movie,setMovie] = React.useState({});
    const [casts,setCasts] = React.useState([]);
    const [comments,getComments] = React.useState([]);

    /*useEffect(() => {
        axios.get(`${API_URL_MOVIE}/movie/${props.id}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => {
            setMovie({...movie,res})
        })
    },[]) */

    
    useEffect(() => {
        axios.get(`${API_URL_MOVIE}/movie/${props.id}/credits?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => {
            setCasts([...casts,res.casts])
        })
    }) 
    

    // const detailsArray = detail.map((data,index) => {
    //     return (
    //         <tr>
    //             <td>{data.head}</td>
    //             <td>{data.head.value}</td>
    //         </tr>
    //     )
    // })



    return (
        <div>
            <img src="" alt="Movie back"></img>
            <h1>Movie Title</h1>
            <p>Movie description</p>
            <div>
                <h1>Movie Details</h1>
                <table>
                    <tr>
                        <td>Budget</td>
                        <td>{movie.budget}</td>
                    </tr>
                    <tr>
                        <td>Release Date</td>
                        <td>{movie.release_date}</td>
                    </tr>
                    <tr>
                        <td>Revenue</td>
                        <td>{movie.revenue}</td>
                    </tr>

                    <tr>
                        <td>Status</td>
                        <td>{movie.status}</td>
                    </tr>

                    <tr>
                        <td>Rating</td>
                        <td>{movie.vote_average}</td>
                    </tr>

                </table>
            </div>
        </div>
    )
    

}