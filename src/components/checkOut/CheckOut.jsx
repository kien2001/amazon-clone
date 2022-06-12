import React from 'react'
import CheckOutProduct from '../checkoutProduct/CheckOutProduct'
import SubTotal from '../subtotal/SubTotal'
import './checkOut.css'
import { useStateValue } from '../stateProvider/stateProvider'

const CheckOut = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h2 className='checkout__title'>Your shopping basket</h2>
          {basket.map((product, index) => {
            return <CheckOutProduct key={index} id = {product.id} title={product.title} price={product.price} rating={product.rating} image={product.image} />
          })
          }
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  )
}

export default CheckOut