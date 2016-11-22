import React from 'react'
import css from 'next/css'

function ShowImage ({src, fullWidth, preview}) {
  const image = preview ? src.replace('/fanart/tv/', '/preview/tv/') : src
  const imageStyle = fullWidth ? css({ width: '100%' }) : false

  return <img className={imageStyle} src={image} />
}

ShowImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  fullWidth: React.PropTypes.bool,
  preview: React.PropTypes.bool
}

export default ShowImage
