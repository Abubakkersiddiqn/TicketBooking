import './Booking.scss'
import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import Payment from '../Payment/Payment'
import DatePicker from "react-datepicker";
import { addDays, subDays } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

//import clsx from 'clsx'
import MovieBooking from './MovieBooking'
import ShowCase from './ShowCase'
import Cinema from './Cinema'

import axios from 'axios'
import { AuthContext } from '../Contex/AuthContex'





function Booking() {
  const [startDate, setStartDate] = useState(null);
  console.log(startDate)
    const {Id}=useParams();
    const navigate = useNavigate()
  
    const [movie,setMovie]= useState({})
   
  
    const {currentUser}=useContext(AuthContext)

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
     console.log(Id)
  let [selectedMovie, setSelectedMovie] = useState()

  
  const [selectedSeats, setSelectedSeats] = useState([])
const [seatbook,setSeatBook]=useState(JSON.parse(localStorage.getItem('seatBooking'))||null)

  selectedMovie=movie
  const total = selectedMovie.price * selectedSeats.length;
 


console.log(movie,"mmmm");
const handleClick = async(e)=>{
 
 const bookingData ={
     moviename:selectedMovie.name,
     selectedseat:JSON.stringify(selectedSeats),
     noofseat:selectedSeats.length,
     totalprice:total,
     
     mid:Id,
     uid:currentUser.id,
     bookedDate:startDate,
    
 }
 const res = await axios.post("http://localhost:8800/api/booking/seatbooking",bookingData);
 setSeatBook(res.data)
 navigate('/bookingstatus/'+ currentUser.id)
}
useEffect(()=>{
  localStorage.setItem('seatBooking',JSON.stringify(seatbook))
},[seatbook])

  return (
    <div className="App">
    <div className='date'>
       <span>Select Date</span>
    <DatePicker 
    selected={startDate} 
    onChange={(ndate) => setStartDate(ndate)} 
     dateFormat="yyyy/MM/dd"
     includeDateIntervals={[
        { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
      ]}
      />
    </div>
   
      <MovieBooking
        movie={movie}
        moviess={movie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
         
        }}
      />
      
      
        <Cinema
        movie={movie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />
      
      <ShowCase />
     
   

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className="total">
          {total} Rs
         
        </span>
      </p>
      <div className="button">
      {/* <Button  color='error' variant='contained' size='small' >Pay Now  {total===0 ? "" : -total}</Button> */}
      <Payment total={total} handleClick={handleClick}/>
      
      </div>
     
    </div>
  )
}
export default Booking





