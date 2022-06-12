import React from 'react'
import './product.css'
import { useStateValue } from '../stateProvider/stateProvider'

const Product = ({ product }) => {
    const [state, dispatch] = useStateValue();
    const addToBasket = ()=>{
        dispatch({type: 'ADD_TO_BASKET', item:{
            id: product.id,
            title: product.title,
            image: product.image,
            rating: product.rating,
            price: product.price
        }})
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className='product__title'>{product.title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{product.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(product.rating).fill().map((index) => {
                        return (
                            <i key={index}>⭐</i>
                        )
                    })}
                </div>
            </div>
            <img src={product.image} alt="product-image" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product