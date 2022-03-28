import React from 'react'

import './LandingPage.scss'
import CallToAction from './utils/CallToAction'

//animation
import { motion } from 'framer-motion'
import { animationVariants, childrenVariant } from './utils/animations'

const LandingPage = () => {
  return (
    <React.Fragment>
      <motion.section className='landing__page'>
        <div className='upper__nav'>social media icons</div>
        <img src='' alt='' />
        <motion.div
          className='call__to__action'
          variants={animationVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h1>Shoes to die for</motion.h1>
          <p>you are only one pair of shoes away from a good mood</p>
          <motion.p variants={childrenVariant}>What's stopping you?</motion.p>
          <motion.div className='cta' variants={childrenVariant}>
            <CallToAction />
          </motion.div>
        </motion.div>
      </motion.section>
    </React.Fragment>
  )
}

export default LandingPage
