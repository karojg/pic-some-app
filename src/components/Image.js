import React, { useState, useContext } from "react"
import { Context }  from '../context/Context'

function Image({className, img}) {
  const { toggleFavorite } = useContext(Context)
  const [hovered, setHovered] = useState(false)

  const heartIcon = hovered &&
    <i className={"ri-heart-line favorite"}
        onClick={() => toggleFavorite(img.id)}>
    </i>

  const heartIconAlways =
  <i className={"ri-heart-fill favorite"}
      onClick={() => toggleFavorite(img.id)}>
  </i>

  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

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

export default Image
