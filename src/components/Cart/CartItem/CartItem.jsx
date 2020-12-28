import React from 'react'

import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
    console.log('ItemId________________________')
    console.log(item.id)
    console.log(item.quantity)

    const classes = useStyles()
    return (
        <Card>
            <CardMedia
                image={item.media.source}
                alt={item.name}
                className={classes.media}
            />
            <CardContent className={classes.cartContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_code}</Typography>

            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button 
                    onClick={()=>onUpdateCartQty(item.id, item.quantity -1)}
                    type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button 
                        onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}

                    type="button" size="small">+</Button>
                </div>
                <Button
                    onClick={() => onRemoveFromCart()}

                variant="contained" type="button" color="secondary">Usuń</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
