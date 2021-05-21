import React, { Component } from 'react'
import './Product.css'


class Product extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="Product">
                <figure>
                    <img src="https://images.unsplash.com/photo-1620654458802-d9392aa95664?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <figcaption>
                        <h3>Price $ { this.props.price}</h3>
                        <button>Buy Now</button>
                    </figcaption>
                </figure>
            </article>
        )
    }
}

export default Product;
