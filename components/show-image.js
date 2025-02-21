import React from 'react'

function ShowImage ({src, fullWidth, preview}) {
  const className = fullWidth ? 'fullwidth' : false

  return (
    <span>
      <img src={src} className={className} />
      <style jsx>{`
        .fullwidth {
          width: 100%;
        }
      `}</style>
    </span>
  )
}

ShowImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  fullWidth: React.PropTypes.bool,
  preview: React.PropTypes.bool
}

export default ShowImage
