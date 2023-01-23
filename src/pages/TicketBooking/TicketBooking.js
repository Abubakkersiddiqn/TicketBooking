import React, { useEffect, useState } from 'react'
import Booking from '../../components/Booking/Booking'
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';

import './TicketBooking.scss'
import axios from 'axios';



const TicketBooking = () => {

    const {Id}=useParams(); 
    console.log(Id)
    const [movie,setMovie]= useState({})

useEffect(()=>{
  const fetchMovie= async()=>{
    try{
      const res = await axios.get(`http://localhost:8800/api/movie/${Id}`)
      setMovie(res.data[0])
     

    }catch(e){
      console.log(e)
    }
  }
  fetchMovie();
},[Id])
console.log(movie,"mooo")

  return (
    <div>
    <NavBar/>
    <div key={movie.index}>
               <h1>{movie.name}</h1>
            </div>
    <hr/>
    <div>
   
    </div>
    <div className='booking'>
    <Booking moviess={movie}/>
    </div>
     
       <div>
    
       </div>
    </div>
  )
}

export default TicketBooking