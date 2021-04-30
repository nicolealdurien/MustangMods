import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className = 'productscreen'>
            <div className = 'productscreen__left'>
                <div className = 'left__image'>
                    <img src = 'https://www.cjponyparts.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/h/d/hd1233_1.2486.jpg' alt = 'product' />
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