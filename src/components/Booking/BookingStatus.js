import axios from 'axios'
import React, {useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Contex/AuthContex'
import NavBar from '../navbar/NavBar'
import './BookingStatus.scss'

const BookingStatus = () => {
  const {currentUser} = useContext(AuthContext)
    const [BookingStatus,setBookingStatus]=useState([])
   const {userId}=useParams(); 
   console.log(currentUser,"currentUser")
  //  let bookingId=userId.length
   console.log(userId.length,"userId")
   
    
    useEffect(()=>{
     const bookingStatus = async()=>{
        const res = await axios.get(`http://localhost:8800/api/booking/bookingStatus/${userId}`)
        setBookingStatus(res.data)
     }
     bookingStatus()
        
    },[userId])
console.log(BookingStatus,"status")

  return (
  
  
    <div>
    <NavBar/>
 <h1>booking status</h1>
 
{BookingStatus?.map((b)=>(
    <div class="ticket3">
	<div class="ticket3__details">
		<h3 class="ticket3__title">General Details</h3>
		<ul>
			<li style={{color:"black"}}>Spectator Name: {b?.username}</li>
			<li style={{color:"black"}}>Movie Name : {b?.moviename}</li>
			<li style={{color:"black"}}>No.of.Seats : {b?.noofseat}</li>
            <li style={{color:"black"}}>Seat No : {b?.selectedseat}</li>
            <li style={{color:"black"}}>Show Time : {b?.s}</li>
		</ul>
	</div>
	<div class="ticket3__rip"></div>
	<div class="ticket3__price">
		<span class="heading">Amount Paid</span>
		<span class="price">{b.totalprice}</span>
	</div>
</div>
))}

    </div>
  )
}

export default BookingStatus