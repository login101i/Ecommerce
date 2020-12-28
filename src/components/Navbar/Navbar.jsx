import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from './styles'

function Navbar({ totalItems, cart }) {
    const classes = useStyles()
    const location = useLocation()
    console.log('to jest cart')
    console.log(cart)

if(!cart.line_items) return "Ładuję dane"
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography
                        component={Link} to="/"
                        variant="h6" className={classes.title} color="inherit">
                        <img
                            src={logo}
                            alt="Commerce.js"
                            height="25px"
                            className={classes.image} />
                         MKrus Shop
                    </Typography>
                    <div className={classes.grow}></div>
                    {location.pathname === '/' && (
                        <div className={classes.button}>

                            <IconButton component={Link} to="/cart" aria-label="Pokaż koszyk" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            {cart.line_items.length>0? <Typography
                                className={classes.underCart}
                            > {cart.subtotal.formatted_with_code}</Typography>:"koszyk"
                            }
                        </div>
                    )}
                    {location.pathname === '/details' && (
                        <div className={classes.button}>

                            <IconButton component={Link} to="/cart" aria-label="Pokaż koszyk" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            {cart.line_items.length > 0 ? <Typography
                                className={classes.underCart}
                            > {cart.subtotal.formatted_with_code}</Typography> : "koszyk"
                            }
                        </div>
                    )}

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar
