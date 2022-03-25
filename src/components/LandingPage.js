import React from 'react'

import './LandingPage.scss'
import CallToAction from './utils/CallToAction'

const LandingPage = () => {
  return (
    <React.Fragment>
      <section className='landing__page'>
        <div className='upper__nav'>social media icons</div>
        <img src='' alt='' />
        <div className='call__to__action'>
          <h1>Shoes to die for</h1>
          <p>you are only one pair of shoes away from a good mood</p>
          <p>What's stopping you?</p>
          <div className='cta'>
            <CallToAction />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default LandingPage
