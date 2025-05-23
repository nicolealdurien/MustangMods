# Mustang Mods

![](https://github.com/nicolealdurien/MustangMods/blob/main/client/public/homepage.png?raw=true)
<br /> <br />

- **Purpose of the app:** <br/><br/>
  Mustang Mods is a fully responsive e-commerce site that would serve a shop selling pony car modification and enhancement parts. The site was built using the MERN stack (MongoDB, Express, React, and Node) as well as Redux.

- **Features:**

  The homepage lists the products with titles, images, prices, short descriptions, and a link to the details page for each product. Products are populated from the mongoDB database.

  The product details page lists all the same product info from the homepage with a longer description. The quantity selector and add-to-cart button are on this page. If an item is out of stock, this will be displayed on the details page and the user will be blocked from adding it to their cart. (The code below demonstrates the change from a functional add-to-cart button to a non-functional out-of-stock notice.)

  `<p>{product.countInStock > 0 ? <button type = 'button'`
  `onClick = {addToCartHandler}>Add To Cart</button> : <button`
  `type = 'button' >Item Out Of Stock</button>}</p>`

  Within the cart, users are able to change the quantity of chosen items, delete an item, and see their subtotal. Checkout is handled securely through Stripe's API.

- **Product Details Page:**

![](https://github.com/nicolealdurien/MustangMods/blob/main/client/public/productpage.png?raw=true)

- **Shopping Cart Page:**

![](https://github.com/nicolealdurien/MustangMods/blob/main/client/public/cart.png?raw=true)

- **Languages/Frameworks/Tools Used:**

React, Redux, Node, Express, Javascript, MongoDB, HTML/CSS, Stripe API, Heroku
