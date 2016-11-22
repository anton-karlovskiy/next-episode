import React from 'react'

// Utilities
import css from 'next/css'

// Components
import ShowImage from './show-image'

function ShowCard ({image}) {
  const cardStyle = css({
    width: '200px',
    transition: '0.4s ease all',
    ':hover': {
      transform: 'scale(0.95)'
    }
  })

  return (
    <div className={cardStyle}>
      <ShowImage src={image} preview fullWidth />
    </div>
  )
}

ShowCard.propTypes = {
  image: React.PropTypes.string.isRequired
}

export default ShowCard
