// http://image.tmdb.org/t/p/w154/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg

import React from 'react'
import { Col } from 'antd';
import "./card.css"

function Cards(props) {

    let { actor, key, image, movieId, movieName, characterName } = props
    const POSTER_SIZE = "w154";

    if (actor) {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <img style={{ width: '80%', height: '50%' }} alt="Damn" src="http://image.tmdb.org/t/p/w154/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" />
                </div>
            </Col>
        )
    } else {
        return (
            <div className='Grid'>
                {/* <a href=""></a>
                <img src="" alt='Image'></img> */}
                <h1>Shit</h1>
            </div>
        )
    }

    
   /* alternate
    <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${movieId}`} >
                        <img style={{ width: '80%', height: '50%' }} alt="Damns" src="http://image.tmdb.org/t/p/w154/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" />
                    </a>
                </div>
            </Col> */

}

export default Cards