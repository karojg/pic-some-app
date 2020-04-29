import React, { useContext } from 'react'
import { Context }  from '../context/Context'
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

const Image = ({className, img}) => {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)
  const [hovered, ref] = useHover()

  const heartIcon = hovered &&
    <i className={'ri-heart-line favorite'}
        onClick={() => toggleFavorite(img.id)}>
    </i>

  const heartIconAlways =
    <i className={'ri-heart-fill favorite'}
        onClick={() => toggleFavorite(img.id)}>
    </i>

  const iconInCart = () => {
    const isInCart = cartItems.find(item => item.id === img.id)

    if (isInCart) {
      return <i
                className='ri-shopping-cart-fill cart'
                onClick={() => removeFromCart(img)}>
              </i>
    }
    else if (hovered) {
      return <i className='ri-add-circle-line cart'
              onClick={() => addToCart(img)}>
            </i>
    }
  }

  return (
      <div
        className={`${className} image-container`}
        ref={ref}
      >
        <img src={img.url} alt={''} className='image-grid'/>
        { img.isFavorite ? heartIconAlways : heartIcon}
        {iconInCart()}
      </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  }),
}

export default Image
