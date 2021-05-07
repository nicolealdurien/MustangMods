import './CartScreen.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import StripeCheckout from 'react-stripe-checkout'

// Components
import CartItem from '../components/CartItem'

//Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

const CartScreen = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    }

    const makePayment = (token, addresses) => {
        const body = {
            token,
            cartItems
        }
        const headers = {
            'Content-Type': 'application/json',
            'Mode': 'no-cors'
        }
        return fetch(`http://localhost:5000/payment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log('RESPONSE', response)
            const { status } = response
            console.log('STATUS', status)
        }).catch(error => console.log(error))
    }

    return (
        <div className = 'cartscreen'>
            <div className = 'cartscreen__left'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        No products have been added to your cart yet. <br/><br/><Link to = '/' className = 'go__home'>Return Home</Link>
                    </div>
                ) : cartItems.map((item) => (
                    <CartItem 
                        key = {item.product}
                        item = {item}
                        qtyChangeHandler = {qtyChangeHandler}
                        removeHandler = {removeHandler}
                    />
                ))}
            </div>
            <div className = 'cartscreen__right'>
                <div className = 'cartscreen__info'>
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <StripeCheckout 
                stripeKey = 'pk_test_51In4ABCDwFUaylUuuSu1e43AVzMfTkMUQq4wu5sU7iTRpVkTjhQD9JxkVTZiZPKQLH0VOtKfVPgVP6naDlrpDx4Z00SDMXekQC' 
                token = {makePayment} 
                name = 'Mustang Mods Checkout'
                amount = {Number(getCartSubTotal().toFixed(2))*100}
                shippingAddress
                billingAddress>
                    <div><button className = 'stripeButton'>Secure Checkout With Stripe</button></div>
                </StripeCheckout>
            </div>
        </div>
    )
}

export default CartScreen