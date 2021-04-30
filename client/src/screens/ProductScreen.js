import './ProductScreen.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getProductDetails, getProducts } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

const ProductScreen = ({match, history}) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.getProductDetails)

    const {loading, error, product} = productDetails

    useEffect(() => {
        if(product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

    return (
        <div className = 'productscreen'>
            <div className = 'productscreen__left'>
                <div className = 'left__image'>
                    <img src = {product.imageUrl} alt = {product.name} />
                </div>
                <div className = 'left__info'>
                    <p className = 'left__name'>Product 1</p>
                    <p>Price $499.99</p>
                    <p>Lorem ipsum whatever dude</p>
                </div>
            </div>
            <div className = 'productscreen__right'>
                <div className = 'right__info'>
                    <p>Price: <span>$499.99</span></p>
                    <p>Status: <span>In Stock</span></p>
                    <p>Qty<select><option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    </select></p>
                    <p><button type = 'button'>Add To Cart</button></p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen