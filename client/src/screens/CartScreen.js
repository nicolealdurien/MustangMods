import './CartScreen.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { StripeCheckout } from 'react-stripe-checkout'

// Components
import CartItem from '../components/CartItem'

//Actions
import { addToCart, removeFromCart  } from '../redux/actions/cartActions'

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

    const handleToken = (token, addresses) => {
        console.log({token, addresses})
    }

    return (
        <div className = 'cartscreen'>
            <div className = 'cartscreen__left'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty. <Link to = '/'>Go Back</Link>
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
                {/* <StripeCheckout stripeKey = 'pk_test_51In4ABCDwFUaylUuuSu1e43AVzMfTkMUQq4wu5sU7iTRpVkTjhQD9JxkVTZiZPKQLH0VOtKfVPgVP6naDlrpDx4Z00SDMXekQC' token = {handleToken} /> */}
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen