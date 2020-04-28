import React, { useState, useContext } from "react"
import { Context }  from '../context/Context'
import PropTypes from 'prop-types';

function Image({className, img}) {
  const { toggleFavorite, addToCart } = useContext(Context)
  const [hovered, setHovered] = useState(false)

  const heartIcon = hovered &&
    <i className={"ri-heart-line favorite"}
        onClick={() => toggleFavorite(img.id)}>
    </i>

  const heartIconAlways =
    <i className={"ri-heart-fill favorite"}
        onClick={() => toggleFavorite(img.id)}>
    </i>

  const cartIcon = hovered &&
    <i className="ri-add-circle-line cart"
      onClick={() => addToCart(img)}></i>

  return (
      <div
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={img.url} alt={''} className="image-grid"/>
        { img.isFavorite ? heartIconAlways : heartIcon}
        {cartIcon}
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
