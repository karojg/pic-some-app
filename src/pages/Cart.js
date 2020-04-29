import React, {useContext, useState} from 'react'
import { Context } from '../context/Context'
import CartItem from '../components/CartItem'

const Cart = () => {
    const {cartItems, emptyCart} = useContext(Context)
    const [cartText, setCartText] = useState('Place Order')
    // naïve implementation assuming every items costs the same
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const orderPlaced = () => {
      setCartText('Ordering...')

      const timer = setTimeout(() => {
        console.log('This will run after 3 second!')
        emptyCart()
        setCartText('Place Order')
      }, 3000);
      return () => clearTimeout(timer);
    }

    return (
      <main className='cart-page'>
          <h1>Check out</h1>
          {cartItemElements}
          <p className='total-cost'> Total: {totalCostDisplay} </p>
          {
            cartItems.length > 0 ?
              <div className='order-button'>
                <button onClick={orderPlaced}>{cartText}</button>
              </div> :
              <p>You do not have items in your cart.</p>
          }
      </main>
    )
}

export default Cart
