import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar"
import axios from "axios";
import { API_KEY,API_URL_MOVIE } from "../../config/API";
import "./movie.css"


export default function Movie(props){
    // const [movie,setMovie] = React.useState({});
    const [casts,setCasts] = React.useState([]);
    const [comments,getComments] = React.useState([]);

    /*useEffect(() => {
        axios.get(`${API_URL_MOVIE}/movie/${props.id}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => {
            setMovie({...movie,res})
        })
    },[]) */

    
    // useEffect(() => {
    //     axios.get(`${API_URL_MOVIE}/movie/${props.id}/credits?api_key=${API_KEY}&language=en-US`)
    //     .then(res => res.json())
    //     .then(res => {
    //         setCasts([...casts,res.casts])
    //     })
    // }) 
    

    // const detailsArray = detail.map((data,index) => {
    //     return (
    //         <tr>
    //             <td>{data.head}</td>
    //             <td>{data.head.value}</td>
    //         </tr>
    //     )
    // })

    const movie = {
        "adult": false,
        "backdrop_path": "/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",
        "belongs_to_collection": {
            "id": 724848,
            "name": "Shazam! Collection",
            "poster_path": "/qZ5EoG97hmlqCfNI2VWeMGIXJPJ.jpg",
            "backdrop_path": "/qHvTysanNatrEQECO36iES7U1zg.jpg"
        },
        "budget": 125000000,
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 14,
                "name": "Fantasy"
            }
        ],
        "homepage": "",
        "id": 594767,
        "imdb_id": "tt10151854",
        "original_language": "en",
        "original_title": "Shazam! Fury of the Gods",
        "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
        "popularity": 7479.031,
        "poster_path": "/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg",
        "production_companies": [
            {
                "id": 12,
                "logo_path": "/5ThIuO93vsk47oexKTSdfKEr7EC.png",
                "name": "New Line Cinema",
                "origin_country": "US"
            },
            {
                "id": 11565,
                "logo_path": null,
                "name": "The Safran Company",
                "origin_country": "US"
            },
            {
                "id": 128064,
                "logo_path": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
                "name": "DC Films",
                "origin_country": "US"
            },
            {
                "id": 174,
                "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
                "name": "Warner Bros. Pictures",
                "origin_country": "US"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2023-03-15",
        "revenue": 120864255,
        "runtime": 130,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Oh. My. Gods.",
        "title": "Shazam! Fury of the Gods",
        "video": false,
        "vote_average": 6.939,
        "vote_count": 943
    }


    return (
        <div className="main-div">
            {/* {<div className="outer-box" style={{backgroundImage:`linear-gradient(url()`)}}>} */}
            <img className='image' src={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt="Movie back"></img>
                <h1>Movie Title</h1>
                <p>Movie description</p>
                <div className="inner-box">
                    <h1>Movie Details</h1>
                    <table className="table">
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