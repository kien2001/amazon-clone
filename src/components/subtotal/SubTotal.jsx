import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subTotal.css'
import { useStateValue } from '../stateProvider/stateProvider'
import { getTotalPrice } from '../../reducer'
const SubTotal = () => {
    const [{basket}] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotalPrice(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal