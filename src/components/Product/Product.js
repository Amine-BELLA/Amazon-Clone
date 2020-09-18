import React from 'react';
import './Product.css';
import { connect } from 'react-redux';

import addToBasket from '../../actions/actions';

function Product(props) {
    const { id, title, image, price, rating } = props;
    return (
        <div className='product'>
            <div className='product-info'>
                <p className='product-title'>{title}</p>
                <p className='product-price'><strong>${price}</strong></p>
                <div className='product-rating'>
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt='product-img' />
            <button onClick={() => props.addToBasket({
                id,
                title,
                image,
                price,
                rating
            })} >Add to Basket</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addToBasket: (item) => dispatch(addToBasket(item))
    }
}

export default connect(null, mapDispatchToProps)(Product);
