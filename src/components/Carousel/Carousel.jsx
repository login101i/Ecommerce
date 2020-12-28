import React, { useState } from 'react'

import useStyles from './styles'
import ImgComponent from './ImgComponent'
import img1 from '../../assets/Buenos-Aires-Background-.jpg'
import img2 from '../../assets/IMG_7942.JPG'
import img3 from '../../assets/IMG_8431.JPG'
import img4 from '../../assets/IMG_8463.JPG'
import img5 from '../../assets/IMG_9997.JPG'

function Carousel() {


    const classes = useStyles()

    let sliderArr = [
        <ImgComponent src={img1} />,
        <ImgComponent src={img2} />,
        <ImgComponent src={img3} />,
        <ImgComponent src={img4} />,
        <ImgComponent src={img5} />,
    ]
    const [x, setX] = useState(0)

    const goLeft = () => {
        console.log(x)

        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        console.log(x)
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }


    return (
        <div className={classes.slider}>
            {sliderArr.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className={classes.slide}
                        style={{ transform: `translateX(${x}%` }}
                    >{slide}</div>
                )
            })}
            <button onClick={goLeft} className={classes.goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button onClick={goRight} className={classes.goRight}><i class="fas fa-chevron-right"></i></button>
        </div>
    )
}

export default Carousel
