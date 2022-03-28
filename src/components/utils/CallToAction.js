import React from 'react'
import { Link } from 'react-router-dom'

import './utils.scss'

const CallToAction = () => {
  return (
    <div className='button'>
      <Link to=''>
        <span>SHOP NOW</span>
        <div className='wave'></div>
      </Link>
    </div>
  )
}

export default CallToAction
