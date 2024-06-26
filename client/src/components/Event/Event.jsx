import React from 'react'
import Navbar1 from '../Navbar/Navbar'

const Event = ({showNavbar = true}) => {
  return (
    <div>
      {showNavbar && <Navbar1/>}
    </div>
  )
}

export default Event
