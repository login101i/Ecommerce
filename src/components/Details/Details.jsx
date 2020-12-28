import React, {useState} from 'react'
import { Card, CardMedia, Button, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import ButtonUI from '../ButtonUI'

import useStyles from './styles'




function Details({ product, onAddToCart, onUpdateCartQty, cart }) {
    const classes = useStyles()
    console.log('product__________________')
    console.log(product)

    const productId = product.id
    console.log('productId__________________')
    console.log(productId)

    const assets = product.assets
    console.log(cart)

    const cartItem = cart.line_items.find(item => item.product_id === productId)
    console.log('cartItem__________________')
    console.log(cartItem)

    const itemUp=()=>{

    }

    const [item, setItem] = useState(1)

    return (

        <div className={classes.container}>

            <div className={classes.container__left}>
                {assets.map(asset => (
                    <img className={classes.image_left} src={asset.url} alt="" />
                ))}


            </div>

            <div className={classes.container__center}>
                <img
                    className={classes.media}
                    src={product.media.source}
                    alt="" />
            </div>

            <div className={classes.container__right}>
                <div className={classes.buttons}>
                    <Button
                        onClick={() => setItem(prevState=>prevState-1)}
                        type="button" size="small">-</Button>
                    {cartItem ? <Typography>{item}</Typography> : '1'}
                    <Button
                        onClick={() => setItem(prevState=>prevState+1)}

                        type="button" size="small">+</Button>
                </div>


                <ButtonUI
                    onAddToCart={onAddToCart}
                    product={product}
                    item={item}
                    onUpdateCartQty={onUpdateCartQty}
                    cart={cart}
                />



            </div>

        </div>

    )
}


export default Details
