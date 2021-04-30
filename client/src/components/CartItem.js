import './CartItem.css'
import { Link } from 'react-router-dom'

const CartItem = () => {
    return (
        <div className = 'cartitem'>
            <div className = 'cartitem__image'>
                <img src='https://www.cjponyparts.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/m/9/m9603m4_2.2399.jpg' alt = 'product' />
            </div>
                <Link to = {`/product/${111}`} className = 'cartitem__name'>
                    <p>Product 1</p>
                </Link>
                
                <p className = 'cartitem__price'>$499.99</p>
                
                <select className = 'cartitem__select'>
                    <option value = '1'>1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                    <option value = '4'>4</option>
                </select>

                <button className = 'cartitem__deleteBtn'>
                    <i className = 'fas fa-trash'></i>
                </button>
        </div>
    )
}

export default CartItem