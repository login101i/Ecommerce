import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'

import useStyles from './styles'

function Categories() {

    const classes = useStyles()

    return (
        <div>

            <Toolbar className={classes.appBar}>
                <Typography

                    variant="h6" className={classes.title} color="inherit">
                    Hello from Categories
                    </Typography>
                <Typography

                    variant="h6" className={classes.title} color="inherit">
                    Hello from Categories
                    </Typography>
                <Typography

                    variant="h6" className={classes.title} color="inherit">
                    Hello from Categories
                    </Typography>
                <Typography

                    variant="h6" className={classes.title} color="inherit">
                    Hello from Categories
                    </Typography>

            </Toolbar>


        </div>
    )
}

export default Categories
