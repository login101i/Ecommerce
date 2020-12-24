import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'


// const products = [
//     {
//         id: 1,
//         name: "shoes",
//         description: ' Super buty',
//         price: '10zł',
//         image:'https://images-na.ssl-images-amazon.com/images/I/81QnGdrGwsL._UL1500_.jpg'
//     },
//     {
//         id: 2,
//         name: "apple",
//         description: ' Super apple',
//         price: '10zł',
//         image:'https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg'
//     },
// ]


const Products = ({products, onAddToCart}) => {

    const classes=useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products