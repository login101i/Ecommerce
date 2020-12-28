import React from 'react'

function ImgComponent({ src }) {


    let imgStyle = {
        width: '100%',
        height: '100%',
        // display: "block",
        // marginLeft: "auto",
        // marginRight: "auto",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit:'cover',


    }
    return (
        <img
            src={src}
            alt="slider-img"
            style={imgStyle}
        />
    )
}

export default ImgComponent
