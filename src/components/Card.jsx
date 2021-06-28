import React from 'react'
import PropTypes from 'prop-types'
import "./Card.css"

function Card({lang, img, fcolor, scolor}) {
    return (
        <div className="card"
        style={{
        background:`linear-gradient(to left, ${fcolor}, ${scolor} `
        }}
        >
           <img src={img} alt="python lang"/>
           <h1>{lang}</h1>
            
        </div>
    )
}

Card.protoType={
    lang:PropTypes.string,
    img:PropTypes.string,
    scolor:PropTypes.string,
    fcolor:PropTypes.string

}



export default Card;
