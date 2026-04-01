/**
 * @props {string} name
 * @props {string} description
 * @props {num} price
 * */
function Product(props) {
	return (
		<div className="product-container">
			<p>Product Name: {props.name}</p>
			<p>Product Price: {props.price}</p>
			<p>Product Description: {props.description}</p>
		</div>
	)
}

export default Product
