import React from 'react'

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom';


import useStyles from './styles'

function Product({ product, onAddToCart, getMe }) {

    const classes = useStyles()
    return (
        <Card className={classes.root}
          
            onClick={() => getMe(product.id)
            }
        >
            <CardMedia
                component={Link} to="/details"
                className={classes.media}
                image={product.media.source}
                title={product.name}
            />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price.raw}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }}
                        className={classes.text}
                        variant="body2"
                        color="textSecondary"
                    />
                </div>
            </CardContent>
            <CardActions
                className={classes.cardActions}>

                <IconButton
                    onClick={() => onAddToCart(product.id, 1)}
                    aria-label="Dodaj do koszyka">
                    <AddShoppingCart />

                </IconButton>
                
            </CardActions>
        </Card>

    )
}

export default Product
