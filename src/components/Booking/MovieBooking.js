import React from 'react'
import { useParams } from 'react-router-dom'
import './MovieBooking.scss';

function MovieBooking({ movie, onChange,moviess }) {
    const {Id}= useParams()
    console.log(Id)
    return (
      <div className="Movies">
        
       
        <div key={moviess.index} className="input">
      
      <div>
        <h1> Movie : {moviess.name}</h1>
      </div>

<div>
<h3> price: {moviess.price} Rs</h3>
<h3> Show Time: {moviess.showTiming}</h3>


</div>        
       </div>
      </div>
    )
  }

export default MovieBooking