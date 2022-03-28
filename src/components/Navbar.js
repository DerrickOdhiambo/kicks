import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.scss'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

//icons import
import { BiMenuAltLeft } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import SearchBar from './utils/SearchBar'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })
  const [isActive, setActive] = useState(false)

  const changeClassStyle = () => {
    setActive(!isActive)
  }

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (size.width > 786 && navbarOpen) {
      setNavbarOpen(false)
    }
  }, [size.width, navbarOpen])

  const menuToggle = () => {
    setNavbarOpen((p) => !p)
  }

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.header__content}>
          <div className={classes.header__content__toggle}>
            {!navbarOpen ? (
              <BiMenuAltLeft onClick={menuToggle} />
            ) : (
              <AiOutlineClose onClick={menuToggle} />
            )}
          </div>
          <div className={classes.header__content__logo}>
            <motion.h3
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            >
              F.Footware
            </motion.h3>
          </div>
          <div
            className={`${classes.header__content__nav} ${
              navbarOpen ? classes.isMenu : ''
            }`}
            id='menu'
          >
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Shop</Link>
              </li>
              <li>
                <Link to='/'>About</Link>
              </li>
              <li>
                <Link to='/'>Blog</Link>
              </li>
            </ul>
          </div>

          <div className={classes.header__content__icons}>
            <ul>
              <li>
                <Link to='/' id='like'>
                  <AiOutlineHeart />
                </Link>
              </li>
              <li>
                <Link to='/' id='account'>
                  <MdAccountCircle />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <BiSearch onClick={changeClassStyle} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <GiShoppingBag />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={isActive ? 'search__visible' : 'search__trasparent'}>
        <SearchBar />
      </div>
    </React.Fragment>
  )
}
export default Navbar
