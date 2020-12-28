import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout, Details, Categories, Carousel} from './components'



const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [product, setProduct] = useState('')



    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };



    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })

        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    };

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    };

    // ________________________________
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };
    // ________________________________

    const getProduct = (id) => {
        const product = products.find(product => product.id === id)

        setProduct(product)
    }


    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log("To jest Twoj produkt----->", product)

    return (
        <Router>
            <div style={{width:'100%', display: 'flex', flexDirection: 'column', margin: 0, padding: 0, overflow: 'hidden'}}>
                <Navbar
                    totalItems={cart.total_items}
                    cart={cart}
                />
                <Categories />
                <Carousel/>


                <Switch>
                    <Route exact path="/">
                        <Products
                            products={products}
                            onAddToCart={handleAddToCart}
                            getMe={getProduct}

                        />
                    </Route>
                    <Route exact path="/cart">
                        <Cart
                            cart={cart}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart}
                            onEmptyCart={handleEmptyCart} />

                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}

                        />
                    </Route>
                    <Route exact path='/details'>
                        <Details
                            product={product}
                            onAddToCart={handleAddToCart}
                            onUpdateCartQty={handleUpdateCartQty}
                            cart={cart}

                        />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default App
