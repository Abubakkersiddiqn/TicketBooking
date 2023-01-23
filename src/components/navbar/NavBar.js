import React, { useContext } from 'react'

import { Link } from 'react-router-dom';


import './NavBar.scss';
import { AuthContext } from '../Contex/AuthContex';

const NavBar = () => {

  const {currentUser,logOut}=useContext(AuthContext)
  
  return (
    <div className="navbar">
  
   <div className='wrapper'>
   <Link className="name" to={'/'}>Book Now</Link>
    <div className='searchInput'>
    
      <input type="text" placeholder='Search movies...' />
    
    </div>
    <div className='items'>
    
     
    <p>{currentUser?.username} {currentUser?.displayName}</p> 
   {currentUser ? <Link to={'/bookingstatus/'+ currentUser.id} className="link">Booking Status</Link>:""}
   {currentUser ? (<button onClick={logOut}>Logout</button>) : (<Link to={"/login"}>LogIn</Link> ) }
    
  

    </div>
   </div>
    
    </div>
  )
}

export default NavBar