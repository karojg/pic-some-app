import React, { useContext, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../context/Context'
import useHover from '../hooks/useHover'

function CartItem({item}) {
    const { removeFromCart } = useContext(Context)
    const [ hovered, ref ] = useHover()

    const trashIcon = hovered ? 'fill' : 'line'

    return (
        <div className='cart-item'>
            <i
              className={`ri-delete-bin-${trashIcon}`}
              onClick={() => removeFromCart(item)}
              ref={ref}
            >
            </i>
            <img src={item.url} alt='Product' width='130px' />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}

export default CartItem
