import { click } from '@testing-library/user-event/dist/click'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <div className='humberger'>
      {/* profile icon
          New Group
          Contacts
          Calls
          Settings
       */}
       <ul className={click ? "NavLinks active" : "NavLinks"}>
        <li>
          <Link to="Avatar">Profile</Link>
        </li>
        <li>
          <Link to="Contactlist">New Group</Link>
        </li>
        <li>
          <Link to="Contactalist">Contacts</Link>
        </li>
        <li>
          <Link to="Dialpad">Calls</Link>
        </li>
        <li>
          <Link to="Settings">Settings</Link>
        </li>
       </ul>
    </div>
  )
}

export default Navbar