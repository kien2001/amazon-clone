import React from 'react'
import './checkoutProduct.css'
import {useStateValue} from '../stateProvider/stateProvider'

const CheckOutProduct = ({id, title, price, rating, image}) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkout__product">
            <img src={image} alt="" className="checkout__product--image" />
            <div className="checkout__product--info">
                <p className="checkout__product--title">
                    {title}
                </p>
                <p className='checkout__product--price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout__product--rating">
                    {Array(rating).fill().map((value, index) => {
                        return <i key={index}>⭐</i>
                    })}
                </div>
                <button onClick = {removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct