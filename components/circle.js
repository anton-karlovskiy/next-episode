import React, { PropTypes } from 'react'

function Circle ({number}) {
  return (
    <span>
      {number}
      <style jsx>{`
        span {
          display: inline-block;
          width: 30px;
          height: 30px;
          padding: 5px;
          margin-right: 10px;
          border-radius: 50%;
          background-color: #fff;
          color: #333;
          text-align: center;
        }
      `}</style>
    </span>
  )
}

Circle.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Circle
