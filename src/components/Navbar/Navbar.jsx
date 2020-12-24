import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from './styles'

function Navbar({ totalItems }) {
    const classes = useStyles()
    const location = useLocation()

   
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
                                <Link to="/cart">Go to cart</Link>
                                <IconButton component={Link} to="/cart" aria-label="Pokaż koszyk" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>

                            </div>
                        )}

                    </Toolbar>

                </AppBar>
            </div>
        )
}

export default Navbar
