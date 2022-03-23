import React from 'react'
import './utils.scss'

const SearchBar = () => {
  return (
    <div className='search__bar'>
      <input type='text' placeholder='Search Here...' />
      <button>Search</button>
    </div>
  )
}

export default SearchBar
