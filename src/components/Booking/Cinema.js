import axios from 'axios'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Cinema.scss"
function Cinema({ selectedSeats, onSelectedSeatsChange }) {
  const [movie,setMovie]= useState([])
 
  const {Id}= useParams();
  const [bookedSeats,setbookedSeats]= useState([])
const arr=[];
let occupied =[];
  const objectArray = Object.entries(bookedSeats);

objectArray.forEach(([key, value]) => {
  console.log(key,"keyy"); // 'one'
  console.log(value,"valueee"); // 1
  arr.push(value);
 
});

for(let i=0; i<arr.length; i++) {
  const result= arr[i].selectedseat
  occupied.push(result)

}
console.log((occupied.flat()),'flastttt');
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
  },[]);

  useEffect(()=>{
    const occupiedSeats=async()=>{
      const res = await axios.get(`http://localhost:8800/api/booking/selectedseat`)
    
      setbookedSeats(res.data)
    }
    occupiedSeats()
  },[])
console.log( bookedSeats,"bokke")


    const seats = Array.from({ length: 8 * 8 }, (_, i) => i)
    // console.log(seats)
    function handleSelectedState(seat) {
      const isSelected = selectedSeats.includes(seat)
      if (isSelected) {
        onSelectedSeatsChange(
          selectedSeats.filter(selectedSeat => selectedSeat !== seat),
        )
      } else {
        onSelectedSeatsChange([...selectedSeats, seat])
      }
    }
    console.log(typeof(movie.occupied),"cinema",movie)
  
    return (
      <div className="Cinema">
        <div className="screen" />
  
        <div className="seats">
          {seats.map(seat => {
            const isSelected = selectedSeats.includes(seat)
            const isOccupied = (selectedSeats.includes(seat))
            return (
              <span
                tabIndex="0"
                key={seat}
                className={clsx(
                  'seat',
                  isSelected && 'selected',
                  isOccupied && 'occupied',
                )}
                onClick={isOccupied ? null : () => handleSelectedState(seat)}
                onKeyPress={
                  isOccupied
                    ? null
                    : e => {
                        if (e.key === 'Enter') {
                          handleSelectedState(seat)
                        }
                      }
                }
              />
            )
          })}
          
        </div>
        
       
      </div>
    )
  }
  export default Cinema