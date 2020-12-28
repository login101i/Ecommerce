import React from 'react'
import './buttonUI.css'

function ButtonUI({ product, onAddToCart, cart, onUpdateCartQty, item, setItem }) {


    const productId = product.id
    console.log('productId__________________')
    console.log(productId)

    const cartItem = cart.line_items.find(item => item.product_id === productId)
    console.log('cartItem__________________')
    console.log(cartItem)

    // onUpdateCartQty(cartItem.id, cartItem.quantity + 1)
    return (

        <div
            onClick={() => {
                onUpdateCartQty(cartItem.id, cartItem.quantity + item)
            }
            }
            className="button">
            <h2>Dodaj do koszyka</h2>
        </div>
    )
}

export default ButtonUI
