import React, { useContext, useState } from 'react'
import PropTypes from "prop-types"
import { Context } from '../context/Context'

function CartItem({item}) {
    const { removeFromCart } = useContext(Context)
    const [hovered, setHovered] = useState(false)


    const trashIcon = hovered ? 'fill' : 'line'

    return (
        <div className='cart-item'>
            <i className={`ri-delete-bin-${trashIcon}`}
              onClick={() => removeFromCart(item)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            ></i>
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
