import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Listing from '../components/Listing'

const Landing = () => {
  const [movies,setMovies] = useState([])

  return (
    <div>
      <Navbar/>
      <Listing/>
    </div>
  )
}

export default Landing