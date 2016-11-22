import React from 'react'

// Utilities
import css from 'next/css'

function Circle ({number}) {
  const style = css({
    display: 'inline-block',
    width: '30px',
    height: '30px',
    padding: '5px',
    marginRight: '10px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'center'
  })

  return <span className={style}>{number}</span>
}

Circle.propTypes = {
  number: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ])
}

export default Circle
