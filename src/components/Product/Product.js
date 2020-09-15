import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <div className='product'>
            <div className='product-info'>
                <p className='product-title'>{props.title}</p>
                <p className='product-price'><strong>${props.price}</strong></p>
                <div className='product-rating'>
                    {
                        Array(props.rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img className='product-img' src={props.image} alt='product-img' />
            <button className='product-button'>Add to Basket</button>
        </div>
    )
}

export default Product
