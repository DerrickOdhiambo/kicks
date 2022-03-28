import React from 'react'

import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
      <div className='trend-more-section'>
        <div className='trend-more'>
          <Link to='/' className='link-flash'>
            <span>Shop Collection.</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Button
