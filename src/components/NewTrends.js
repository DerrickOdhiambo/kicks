import React, { useEffect, useRef, useState } from 'react'
import Button from './utils/Button'
import images from './utils/images'

import './NewTrends.scss'

import { motion } from 'framer-motion'

const NewTrends = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <React.Fragment>
      <section className='new__trends'>
        <h3>Trending collection</h3>
        <div className='container'>
          <div className='get__noticed__section'>
            <h5>get noticed</h5>
            <img
              src='https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg'
              alt=''
            />
            <p>good shoes take you good places!</p>
            <Button />
          </div>
          <div className='get__noticed__section__2'>
            <img
              src='https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
        </div>
      </section>
      <motion.section ref={carousel} className='trendy__images__carousel'>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner__carousel'
        >
          {images.map((image) => {
            return (
              <motion.div className='item' key={image.key}>
                <img src={image.url} alt='' />
                <p>{image.name}</p>
                <h3>{image.price}</h3>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>
    </React.Fragment>
  )
}

export default NewTrends
