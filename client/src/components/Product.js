import './Product.css'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className = 'product'>
            <img src='https://www.cjponyparts.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/w/1/w1144-v_1.373_1.jpg' alt='product name' />
            <div className = 'product__info'>
                <p className = 'info__name'>Product 1</p>
                <p className = 'info__description'>
                    Lorem ipsum blah blah yada yada
                </p>
                <p className = 'info__price'>$499.99</p>
                <Link to = {`/product/${1111}`} className = 'info__button'>View</Link>
            </div>
        </div>
    )
}

export default Product