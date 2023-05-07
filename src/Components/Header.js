import React from 'react'

import { GoThreeBars } from 'react-icons/go';


function Header() {
  return (
    <div className='headercontainer'>
    <h4 className="headerformobile"><GoThreeBars/></h4>
    <h4 className='headertitle'><span className="logo">CB</span>Cloudbankin</h4>
    <h4 className="headerlogout"><span className="logo1">GC</span>Gregory Clark</h4>
    </div>
  )
}

export default Header